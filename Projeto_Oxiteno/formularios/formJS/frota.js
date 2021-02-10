const URL_CHAMADO = 'http://localhost:5000/api/chamados';

function gerarId(){
    return id = 'FRV-' + Math.floor(Math.random() * Math.pow(10,5));
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
            case 'Reserva de veículos':
                y = document.querySelectorAll(".reserva-veiculos");
                for (h = 0; h < y.length; h++) {
                    y[h].style.display = "block";
                }

                x = document.querySelectorAll(".manutencao-veiculo");
                for (h = 0; h < x.length; h++) {
                    x[h].style.display = "none";
                }
                break

            case 'Manutenção de veículo':
                y = document.querySelectorAll(".manutencao-veiculo");
                for (h = 0; h < y.length; h++) {
                    y[h].style.display = "block";
                }

                x = document.querySelectorAll(".reserva-veiculos");
                for (h = 0; h < x.length; h++) {
                    x[h].style.display = "none";
                }
                break
        }
    });
}
mostraFormTrAdm()

function stringConcat() {
    const titulo = document.querySelector('#titulo');
    var stringCampos
    titulo.addEventListener('change', function () {
        // classes de titulos
        const manVeiculo = document.querySelector('.manutencao-veiculo')
        const resVeiculo = document.querySelector('.reserva-veiculos')

        // botões de cada formulario
        const btnEnviar = document.querySelector('#btn-enviar')


        btnEnviar.addEventListener('click', function () {
            if (manVeiculo.style.display === 'block') {
                document.querySelector('#nomeCompleto').setAttribute('disabled', 'disabled')
                document.querySelector('#dataInicio').setAttribute('disabled', 'disabled')


                let campoA = document.querySelector('#placaVeiculo').value
                let campoB = document.querySelector('#problemaVeiculo').value
                let processo = document.querySelector('#titulo').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value
                const SLA = 4;

                let stringCampos = `Placa do veiculo: ${campoA}, Problema do Veiculo: ${campoB}`;
                console.log(stringCampos)

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Frota de Veiculos - POOL',
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

            else if (resVeiculo.style.display === 'block') {
                document.querySelector('#placaVeiculo').setAttribute('disabled', 'disabled')
                document.querySelector('#problemaVeiculo').setAttribute('disabled', 'disabled')

                let campoA = document.querySelector('#nomeCompleto').value
                let campoB = document.querySelector('#dataInicio').value
                let processo = document.querySelector('#titulo').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value
                const SLA = 4;

                let stringCampos = `Nome completo: ${campoA}, Data de inicio: ${campoB}`;
                console.log(stringCampos)
                // window.location.reload()

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Frota de Veiculos - POOL',
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
