function convertMessage(msg) {
    var chars = [
        { htmlDec: '&#32', utf8: '+' },
        { htmlDec: '+', utf8: '%2B' },
        { htmlDec: '%', utf8: '%2A' },
        { htmlDec: '\n', utf8: '%0a' }
    ];
    console.log(chars);
    let message;
    for(let i = 0; i < msg.length; i++) {
        if(chars.indexOf(msg.indexOf(i))>=0){
            message.push(msg.indexOf(i));
        }else{

        }
    }

}

function genLink() {
    let phone = document.getElementById('phone-number').value;
    let msg = document.getElementById('message').value;
    convertMessage(msg);
    let link = 'http://wa.me/55'+phone+'?text='+message;
    console.log(link);
    document.getElementById('result-box').classList.remove('display-none');
}

function getCopy() {
    let link = document.getElementById('resulting-link').innerText;
    navigator.clipboard.writeText(link);
}