const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    host:  "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: "projeto.oxiteno.grupo2@gmail.com",
        pass: "Oxiteno2"
    }
});


transporter.sendMail({
    from: "Grupo 2 <projeto.oxiteno.grupo2@gmail.com>",
    to: "robson.santana.soares@gmail.com, vinicius.almeida.ti@gmail.com",
    subject: "FUNCIONOU CARALHO DESGRAÇA",
    text: "aaeeeeeooooo (._. )",
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})