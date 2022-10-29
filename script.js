function genLink() {
    let phone = document.getElementById('phone-number').value;
    phone = phone.replace(/([^\d])+/gim, '');
    let msg = document.getElementById('message').value;
    let message = encodeURIComponent(msg);
    let link = 'http://wa.me/55'+phone+'?text='+message;
    console.log(link);
    document.getElementById('result-box').classList.remove('display-none');
    document.getElementById('a-link').setAttribute('href', link);
    document.getElementById('a-link').innerHTML = link;
}

function getCopy() {
    let link = document.getElementById('p-link').innerText;
    navigator.clipboard.writeText(link);
}