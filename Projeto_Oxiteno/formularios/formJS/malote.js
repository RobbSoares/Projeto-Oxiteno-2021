const URL_CHAMADO = 'http://localhost:5000/api/chamados';

function gerarId(){
    return id = 'MCO-' + Math.floor(Math.random() * Math.pow(10,5));
}

function zeroFill(n){
    return n < 9 ? `0${n}` : `${n}`;
}

function geraDataAtual(){
    var date = new Date();
    return date;
}

function geraDataVencimento(SLA){
    var dateV = new Date();
    dateV.setHours(dateV.getDate() + SLA);
    return dateV;
}

function stringConcat() {
    const titulo = document.querySelector('#titulo');

    var stringCampos;

    titulo.addEventListener('change', function () {

        // botões de cada formulario
        const btnEnviar = document.querySelector('#btn-enviar')

        btnEnviar.addEventListener('click', function () {
            const SLA = 6;
            let campoA = document.querySelector('#remetente').value
            let campoB = document.querySelector('#destinatario').value
            let campoC = document.querySelector('#dataEnvio').value
            let processo = document.querySelector('#titulo').value
            let email = document.querySelector('#email').value
            let local = document.querySelector('#local').value
            let andar = document.querySelector('#andar').value
            let chamado = document.querySelector('#chamado').value
            // window.location.reload()

            let stringCampos = `Remetente: ${campoA}, Destinatário: ${campoB}, Data de envio: ${campoC}`;
            console.log(stringCampos)

            fetch(URL_CHAMADO, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    numChamado: gerarId(),
                    gerencia: 'Malote & Correspondência',
                    processo: processo,
                    sla: SLA,
                    email: email,
                    local: local,
                    andar: andar,
                    mensagem: chamado,
                    detalhesAdicionais: stringCampos,
                    /*dataAbertura: geraDataAtual(),*/
                    dataVencimento: geraDataVencimento(SLA),
                    statusChamado: 'Aberto'
                })
    
            })
            Toast.show("Chamado enviado com sucesso! Cheque seu e-mail", "success");
        })
    })
}

stringConcat()


const Toast = {
    init() {
      this.hideTimeout = null;

      this.el = document.createElement("div");
      this.el.className = "toast";
      document.body.appendChild(this.el);
    },

    show(message, state) {
      clearTimeout(this.hideTimeout);

      this.el.textContent = message;
      this.el.className = "toast toast--visible";

      if (state) {
        this.el.classList.add(`toast--${state}`);
      }

      this.hideTimeout = setTimeout(() => {
        this.el.classList.remove("toast--visible");
        window.location.href = '../../paginaInicial/index.html'
      }, 2500);
    }
};

document.addEventListener("DOMContentLoaded", () => Toast.init());
