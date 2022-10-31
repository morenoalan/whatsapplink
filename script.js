import { countries } from './countries.js';

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
    let link = 'http://wa.me/55'+phone;
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
}