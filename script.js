document.getElementById('copyleft-year').innerHTML =  new Date().getUTCFullYear();

// Elemento da lista de países
const selectItems = document.querySelector('#select-items');

// Contagem de países atualmente exibidos
let countriesLoaded = 20;


// Função para carregar países
function loadCountries(startIndex, endIndex) {
    const fragment = document.createDocumentFragment();
    for (let i = startIndex; i < endIndex && i < countries.length; i++) {
        const countryDiv = document.createElement('div');
        countryDiv.setAttribute('data-value', countries[i].name.toLowerCase());
        countryDiv.innerHTML = `<img src="${countries[i].flag}" alt="${countries[i].name} Flag">${countries[i].name}`;
        fragment.appendChild(countryDiv);
    }
    selectItems.appendChild(fragment);

    // Adiciona evento para alterar o item selecionado e fechar a lista
    selectItems.querySelectorAll('div').forEach(function (item) {
        item.addEventListener('click', function () {
            let selected = document.querySelector('#select-selected');
            selected.innerHTML = this.innerHTML;
            selectItems.classList.remove('select-show'); // Esconde a lista após a seleção
        });
    });
}

// Carrega os primeiros 20 países
loadCountries(0, 20);

// Adiciona evento de rolagem
selectItems.addEventListener('scroll', function () {
    if (selectItems.scrollTop + selectItems.clientHeight >= selectItems.scrollHeight - 100) {
        if (countriesLoaded < countries.length) {
            loadCountries(countriesLoaded, countriesLoaded + 20);
            countriesLoaded += 20;
        }
    }
});
// Abrir/fechar a lista ao clicar no elemento selecionado
document.querySelector('#select-selected').addEventListener('click', function() {
    let items = document.querySelector('#select-items');
    items.classList.toggle('select-show'); // Mostra ou esconde as opções
});

// Alterar o item selecionado e fechar a lista
document.querySelectorAll('#select-items div').forEach(function(item) {
    item.addEventListener('click', function() {
        let selected = document.querySelector('#select-selected');
        selected.innerHTML = this.innerHTML; // Atualiza o conteúdo do selecionado
        document.querySelector('#select-items').classList.remove('select-show'); // Esconde a lista após a seleção
    });
});

// Fechar a lista ao clicar fora
document.addEventListener('click', function(event) {
    const selectBox = document.querySelector('#country-selection');
    if (!selectBox.contains(event.target)) {
        document.querySelector('#select-items').classList.remove('select-show');
    }
});

function genLink() {
    document.getElementById('a-link').classList.remove('pointer-events-none');
    document.getElementById('result-box').style.borderLeftColor = 'var(--color-green-two)';
    document.getElementById('result-box').classList.remove('display-none');
    document.getElementById('button-copy').classList.remove('display-none');

    let phone = document.getElementById('phone-number').value;
    phone = phone.replace(/([^\d])+/gim, '');
    if(phone.length === 0) {
        document.getElementById('a-link').setAttribute('href', '');
        document.getElementById('a-link').innerHTML = '';
        document.getElementById('result-box').classList.add('display-none');
        return;
    }else if(phone.length < 10 || phone.length > 11) {
        document.getElementById('a-link').setAttribute('href', '');
        document.getElementById('a-link').innerHTML = 'Número de telefone inválido<br />Tente novamente';
        document.getElementById('a-link').style.color = 'var(--color-red)';
        document.getElementById('result-box').style.borderLeftColor = 'var(--color-red)';
        document.getElementById('a-link').classList.add('pointer-events-none');
        document.getElementById('button-copy').classList.add('display-none');
        return;
    }

    let flagSelected = document.getElementById('flag').getAttribute('alt');
    console.log(flagSelected.id);
    let country = countries.find(item => item.iso2 == flagSelected);
    let idd = country.idd.replace(/[^\d]/gim, "");
    
    let link = 'http://wa.me/'+idd+phone;
    
    let msg = document.getElementById('message').value;
    if(msg.length > 0) {
        let message = encodeURIComponent(msg);
        link += '?text='+message;
    }
    document.getElementById('a-link').style.color = 'var(--color-green-one)';
    document.getElementById('a-link').setAttribute('href', link);
    document.getElementById('a-link').innerHTML = link;
}

function getCopy() {
    let link = document.getElementById('p-link').innerText;
    navigator.clipboard.writeText(link);
    document.getElementById('copied-msg').classList.remove('display-none');
    setTimeout( function(){
        document.getElementById('copied-msg').classList.add('display-none');
    }, 1400);
}

var inputPhoneNumber = document.getElementById('phone-number');
inputPhoneNumber.addEventListener('input', updatePhoneNumber);
function updatePhoneNumber() {
    var key = event.keyCode || event.charCode;
    let replacePhoneNumber = inputPhoneNumber.value;
    let onlyNumbers = replacePhoneNumber.replace(/([^\d])+/gim, '');
    if(onlyNumbers.length < 2) {
        console.log("<2");
        inputPhoneNumber.value = onlyNumbers.replace(/^(\d{2})/gim, '($1)');
        console.log(replacePhoneNumber);
    }else if(key == 8 || key == 46 && replacePhoneNumber.indexOf(replacePhoneNumber.length) == ')') {
        console.log("backspace + )");
        replacePhoneNumber = replacePhoneNumber.slice(-2);
        console.log(replacePhoneNumber);
    }else if(onlyNumbers.length == 2) {
        console.log("2");
        replacePhoneNumber = onlyNumbers.replace(/^(\d{2})/gim, '($1)');
        console.log(replacePhoneNumber);
    }else if(onlyNumbers.length == 3) {
        console.log("3");
        replacePhoneNumber = onlyNumbers.replace(/^(\d{2})(\d{1})/gim, '($1) $2');
        console.log(replacePhoneNumber);
    }else if(onlyNumbers.length == 10) {
        console.log("10");
        replacePhoneNumber = onlyNumbers.replace(/^(\d{2})(\d{4})(\d{4})/gim, '($1) $2-$3');
        console.log(replacePhoneNumber);
    }else if(onlyNumbers.length == 11) {
        console.log("11");
        replacePhoneNumber = onlyNumbers.replace(/^(\d{2})(\d{5})(\d{4})/gim, '($1) $2-$3');
        console.log(replacePhoneNumber);
    }else{
        //replacePhoneNumber = onlyNumbers.replace(/^(\d{2})(\d{4})(\d{4})/gim, '($1) $2-$3');
        console.log(replacePhoneNumber);
    }
}
