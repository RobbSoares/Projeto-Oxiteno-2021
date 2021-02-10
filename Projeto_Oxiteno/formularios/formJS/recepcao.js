const URL_CHAMADO = 'http://localhost:5000/api/chamados';

function gerarId(){
    return id = 'REC-' + Math.floor(Math.random() * Math.pow(10,5));
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


// Mostra formulario e esconde formulário
function mostraFormTrAdm() {
    var titulo = document.querySelector('#titulo');
    titulo.addEventListener('change', function () {
        var option = this.selectedOptions[0];
        var texto = option.textContent;

        switch (texto) {

            case 'Solicitação de crachá terceiros':
                y = document.querySelectorAll(".tempoContrato");
                for (h = 0; h < y.length; h++) {
                    y[h].style.display = "block";
                }

                x = document.querySelectorAll(".motivoSolicitacao");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                break

            case 'Solicitação de crachá de funcionário':
                y = document.querySelectorAll(".motivoSolicitacao");
                for (h = 0; h < y.length; h++) {
                    y[h].style.display = "block";
                }

                x = document.querySelectorAll(".tempoContrato");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                break

            default:
                break;
        }
    });
}
mostraFormTrAdm()

function stringConcat() {
    //const titulo = document.querySelector('#titulo');

    titulo.addEventListener('change', function () {
        // classes de titulos
        const tempoContrato = document.querySelector('.tempoContrato')
        const motivoSolicitacao = document.querySelector('.motivoSolicitacao')

        // botões de cada formulario
        const btnEnviar = document.querySelector('#btn-enviar')

        btnEnviar.addEventListener('click', function () {
            if (tempoContrato.style.display === 'block') {
                document.querySelector('#motivoSolicitacao').setAttribute('disabled', 'disabled')

                const SLA = 4;
                let campoA = document.querySelector('#nomeCompleto').value
                let campoB = document.querySelector('#matricula').value
                let campoC = document.querySelector('#tempoContrato').value
                let processo = document.querySelector('#titulo').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value

                let stringCampos = `Nome Completo: ${campoA}, Matricula: ${campoB}, Tempo de contrato: ${campoC}`;
                console.log(stringCampos)

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Recepção',
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

                // window.location.reload()
            }

            else if (motivoSolicitacao.style.display === 'block') {
                document.querySelector('#tempoContrato').setAttribute('disabled', 'disabled')

                const SLA = 6;
                let campoA = document.querySelector('#nomeCompleto').value
                let campoB = document.querySelector('#matricula').value
                let campoC = document.querySelector('#motivoSolicitacao').value
                let processo = document.querySelector('#titulo').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value

                let stringCampos = `Nome Completo: ${campoA}, Matricula: ${campoB}, Motivo da solicitação: ${campoC}`;
                console.log(stringCampos)

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: 'RCP-01',
                        gerencia: 'Recepção',
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

                // window.location.reload()
            }
            else{
                const SLA = 3;
                let processo = document.querySelector('#titulo').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: 'RCP-01',
                        gerencia: 'Recepção',
                        processo: processo,
                        sla: SLA,
                        email: email,
                        local: local,
                        andar: andar,
                        mensagem: chamado,
                        detalhesAdicionais: 'NA',
                        /*dataAbertura: geraDataAtual(),*/
                        dataVencimento: geraDataVencimento(SLA),
                        statusChamado: 'Aberto'
                    })
        
                })
                Toast.show("Chamado enviado com sucesso! Cheque seu e-mail", "success");
            }
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
