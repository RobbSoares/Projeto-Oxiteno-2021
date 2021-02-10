const URL_CHAMADO = 'http://localhost:5000/api/chamados';

function gerarId(){
    return id = 'LIM-' + Math.floor(Math.random() * Math.pow(10,5));
}

// Mostra formulario e esconde formulário
function mostraFormTrAdm() {
    var titulo = document.querySelector('#titulo');
    titulo.addEventListener('change', function () {
        var option = this.selectedOptions[0];
        var texto = option.textContent;

        switch (texto) {

            case 'Elogios':
            case 'Reclamações':
            case 'Solicitações em geral':
            case 'Abastecimento de insumos':
            case 'Limpeza de vidros':
            case 'Dispensers':
            case 'Solicitações de serviço extra':
                y = document.querySelectorAll(".contratacao");
                for (h = 0; h < y.length; h++) {
                    y[h].style.display = "none";
                }

                x = document.querySelectorAll(".lixeiras");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                break
            case 'Fornecer lixeiras p/ escritório ou banheiros':
                y = document.querySelectorAll(".lixeiras");
                for (h = 0; h < y.length; h++) {
                    y[h].style.display = "block";
                }

                x = document.querySelectorAll(".contratacao");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                break
            case 'Contratação de limpeza de estofado':
                y = document.querySelectorAll(".contratacao");
                for (h = 0; h < y.length; h++) {
                    y[h].style.display = "block";
                }

                x = document.querySelectorAll(".lixeiras");
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
    var stringCampos
    titulo.addEventListener('change', function () {
        // classes de titulos
        const lixeiras = document.querySelector('.lixeiras')
        const contratacao = document.querySelector('.contratacao')

        // botões de cada formulario
        const btnEnviar = document.querySelector('#btn-enviar')


        btnEnviar.addEventListener('click', function () {
            if (lixeiras.style.display === 'block') {
                document.querySelector('#uc').setAttribute('disabled', 'disabled')

                const SLA = 2;
                let processo = document.querySelector('#titulo').value
                let qtd = document.querySelector('#quantidade').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value

                let stringCampos = `Quantidade: ${qtd}`
                console.log(stringCampos)

                //return stringCampos
                // window.location.reload()

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Limpeza',
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
            }

            else if (contratacao.style.display === 'block') {
                document.querySelector('#quantidade').setAttribute('disabled', 'disabled')

                const SLA = 3;
                let processo = document.querySelector('#titulo').value
                let uc = document.querySelector('#uc').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value

                let stringCampos = `UC para contratação: ${uc}`
                console.log(stringCampos)
                // window.location.reload()
                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Limpeza',
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
            }
            else{
                const SLA = 0;
                let processo = document.querySelector('#titulo').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value
                // window.location.reload()

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Limpeza',
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


