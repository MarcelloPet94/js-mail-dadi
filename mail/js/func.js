let checkMail = "";
const verifyMail = document.getElementById("verifyMail");
const outPut = document.getElementById("outPut");

const dataMail = [
    'a.b@bmail.com',
    'c.d@bmail.com',
    'e.f@bmail.com',
    'g.h@bmail.com',
    'i.l@bmail.com',
];

let controllo = false;

verifyMail.addEventListener('click', function() {
    for(let i = 0; i < dataMail.length; i++) {
        
        let checkMail = document.getElementById("checkMail").value;
        console.log(dataMail[i]);
        
        if(checkMail === dataMail[i]) {
            controllo = true;
        }
        
    }

    if(controllo) {
        outPut.innerHTML = "E-mail esistente, puoi effettuare l'accesso";
    }
    else {
        outPut.innerHTML = "Il tuo account non esiste";
        let checkMail = "";
    }
});    
