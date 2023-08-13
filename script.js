document.getElementById('copyleft-year').innerHTML =  new Date().getUTCFullYear();

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
        console.log('setTimeout');
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