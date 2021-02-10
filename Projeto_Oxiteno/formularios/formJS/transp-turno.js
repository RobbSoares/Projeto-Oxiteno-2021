const URL_CHAMADO = 'http://localhost:5000/api/chamados';

function gerarId(){
    return id = 'TRT-' + Math.floor(Math.random() * Math.pow(10,5));
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

function mostraFormTrAdm() {
    var titulo = document.querySelector('#titulo');
    titulo.addEventListener('change', function () {
        var option = this.selectedOptions[0];
        var texto = option.textContent;

        switch (texto) {
            case 'Cadastro (novo colaborador)':
                x = document.querySelectorAll(".cadastro");
                for (var i = 0; i < x.length; i++) {
                    x[i].style.display = "block";
                }

                y = document.querySelectorAll(".mudancaturno");
                for (var h = 0; h < y.length; h++) {
                    y[h].style.display = "none";
                }
                break

            case 'Mudança de turno / endereço':
                console.log('sjgkjh')

                x = document.querySelectorAll(".mudancaturno");
                for (var i = 0; i < x.length; i++) {
                    x[i].style.display = "block";
                }

                y = document.querySelectorAll(".cadastro");
                for (var h = 0; h < y.length; h++) {
                    y[h].style.display = "none";
                }

                break
            case 'Outras solicitações':
                x = document.querySelectorAll(".cadastro");
                for (var i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }

                y = document.querySelectorAll(".mudancaturno");
                for (var i = 0; i < y.length; i++) {
                    y[i].style.display = "none";
                }
                break

            default:
                break;
        }
    });
}

mostraFormTrAdm()


function stringConcat() {
    const titulo = document.querySelector('#titulo');

    var stringCampos
    titulo.addEventListener('change', function () {
        // classes de titulos
        const  cadastro = document.querySelector('.cadastro')
        const mudancaTurno = document.querySelector('.mudancaturno')

        const btnEnviar = document.querySelector('#btn-enviar')

        btnEnviar.addEventListener('click', function () {
            if (cadastro.style.display === 'block') {
                

             // desabilita campos de outros titulos
             document.querySelector('#nomeMudanca').setAttribute('disabled', 'disabled')
             document.querySelector('#matriculaMudanca').setAttribute('disabled', 'disabled')
             document.querySelector('#enderecoMudanca').setAttribute('disabled', 'disabled')
             document.querySelector('#turnoMudanca').setAttribute('disabled', 'disabled')
             document.querySelector('#horarioMudanca').setAttribute('disabled', 'disabled')
             document.querySelector('#datainicioMudanca').setAttribute('disabled', 'disabled')
             document.querySelector('#dataterminoMudanca').setAttribute('disabled', 'disabled')

             // pega os valores que o usuario digitou nos campos válidos
             let campoA = document.querySelector('#nomeCadastro').value
             let campoB = document.querySelector('#matriculaCadastro').value
             let campoC = document.querySelector('#enderecoCadastro').value
             let campoD = document.querySelector('#turnoCadastro').value
             let campoE = document.querySelector('#horarioCadastro').value
             let campoF = document.querySelector('#datainicioCadastro').value

             let processo = document.querySelector('#titulo').value
             let email = document.querySelector('#email').value
             let local = document.querySelector('#local').value
             let andar = document.querySelector('#andar').value
             let chamado = document.querySelector('#chamado').value
             const SLA = 4;

             // concatena os valores e os retorna
             let stringCampos = `Nome: ${campoA}, Matricula: ${campoB}, Endereço: ${campoC}, Turno: ${campoD}, Horario: ${campoE}, Data de inicio: ${campoF}`;
             console.log(stringCampos)

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Transporte de Turno',
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

            else if (mudancaTurno.style.display === 'block') {

                document.querySelector('#nomeCadastro').setAttribute('disabled', 'disabled')
                document.querySelector('#matriculaCadastro').setAttribute('disabled', 'disabled')
                document.querySelector('#enderecoCadastro').setAttribute('disabled', 'disabled')
                document.querySelector('#turnoCadastro').setAttribute('disabled', 'disabled')
                document.querySelector('#horarioCadastro').setAttribute('disabled', 'disabled')
                document.querySelector('#datainicioCadastro').setAttribute('disabled', 'disabled')

                let campoA = document.querySelector('#nomeMudanca').value
                let campoB = document.querySelector('#matriculaMudanca').value
                let campoC = document.querySelector('#enderecoMudanca').value
                let campoD = document.querySelector('#turnoMudanca').value
                let campoE = document.querySelector('#horarioMudanca').value
                let campoF = document.querySelector('#datainicioMudanca').value
                let campoG = document.querySelector('#dataterminoMudanca').value

                let processo = document.querySelector('#titulo').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value
                const SLA = 4;

                let stringCampos = `Nome: ${campoA}, Matricula: ${campoB}, Endereço: ${campoC}, Turno: ${campoD}, Horario: ${campoE}, Data de inicio: ${campoF}, Data de termino: ${campoG}`;

                // window.location.reload()

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Transporte de Turno',
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
            else{
                const SLA = 4;
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
                        gerencia: 'Transporte de Turno',
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
