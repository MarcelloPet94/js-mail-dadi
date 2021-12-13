
const dataMail = [
    'a.b@bmail.com',
    'c.d@bmail.com',
    'e.f@bmail.com',
    'g.h@bmail.com',
    'i.l@bmail.com',
];

const checkYourMail = prompt("Inserisci la tua e-mail");
let controllo = false;

for(let i = 0; i < dataMail.length; i++) {
    if(checkYourMail === dataMail[i]) {
        controllo = true;
    }
}

if(controllo) {
    document.write("E-mail esistente, puoi effettuare l'accesso");
}
else {
    document.write("Il tuo account non esiste");
}
