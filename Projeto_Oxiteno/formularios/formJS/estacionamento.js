function gerarId(){
    return id = 'EST-' + Math.floor(Math.random() * Math.pow(10,5));
}
// Mostra formulario e esconde formulário
function mostraFormTrAdm() {
    var titulo = document.querySelector('#titulo');
    titulo.addEventListener('change', function () {
        var option = this.selectedOptions[0];
        var texto = option.textContent;

        switch (texto) {
            case 'Liberação de entrada de veículo funcionário':
                x = document.querySelectorAll(".liberacao");
                for (var i = 0; i < x.length; i++) {
                    x[i].style.display = "block";
                }

                y = document.querySelectorAll(".reserva");
                for (var h = 0; h < y.length; h++) {
                    y[h].style.display = "none";
                }

                z = document.querySelectorAll(".atualizacao");
                for (var t = 0; t < z.length; t++) {
                    z[t].style.display = "none";
                }
                break

            case 'Reserva para vaga de visitantes':
                y = document.querySelectorAll(".reserva");
                for (h = 0; h < y.length; h++) {
                    y[h].style.display = "block";
                }

                x = document.querySelectorAll(".liberacao");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }

                z = document.querySelectorAll(".atualizacao");
                for (t = 0; t < z.length; t++) {
                    z[t].style.display = "none";
                }
                break

            case 'Atualização de veículo de funcionário':
                z = document.querySelectorAll(".atualizacao");
                for (t = 0; t < z.length; t++) {
                    z[t].style.display = "block";
                }

                x = document.querySelectorAll(".liberacao");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }

                y = document.querySelectorAll(".reserva");
                for (h = 0; h < y.length; h++) {
                    y[h].style.display = "none";
                }
                break
            default:
                break;
        }
    });
}

const URL_CHAMADO = 'http://localhost:5000/api/chamados';

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

mostraFormTrAdm()

function stringConcat() {
    const titulo = document.querySelector('#titulo');

    var stringCampos;

    titulo.addEventListener('change', function () {

        const resVaga = document.querySelector('.reserva')
        const liberacao = document.querySelector('.liberacao')
        const atualizacao = document.querySelector('.atualizacao')

        const btnEnviar = document.querySelector('#btn-enviar')


        btnEnviar.addEventListener('click', function () {
            if (liberacao.style.display === 'block') {
                document.querySelector('#qtdvagas').setAttribute('disabled', 'disabled')
                document.querySelector('#telFixo').setAttribute('disabled', 'disabled')
                document.querySelector('#celular').setAttribute('disabled', 'disabled')
                document.querySelector('#nomevisit').setAttribute('disabled', 'disabled')
                document.querySelector('#cpfvisit').setAttribute('disabled', 'disabled')
                document.querySelector('#veiculovisit').setAttribute('disabled', 'disabled')
                document.querySelector('#motivoRes').setAttribute('disabled', 'disabled')
                document.querySelector('#nomeUsuario').setAttribute('disabled', 'disabled')
                document.querySelector('#marcaVeiculo').setAttribute('disabled', 'disabled')
                document.querySelector('#placa').setAttribute('disabled', 'disabled')
                document.querySelector('#estacionamento').setAttribute('disabled', 'disabled')
                document.querySelector('#matricula').setAttribute('disabled', 'disabled')
                document.querySelector('#cor').setAttribute('disabled', 'disabled')
                
                let campoA = document.querySelector('#cpf').value
                let campoB = document.querySelector('#nome-motorista').value
                let campoC = document.querySelector('#dataNascimento').value

                const SLA = 4;
                let processo = document.querySelector('#titulo').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value

                let stringCampos = `CPF: ${campoA}, Nome do Motorista: ${campoB}, Data de nascimento: ${campoC}`;
                console.log(stringCampos)

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Estacionamento',
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

            else if (resVaga.style.display === 'block') {
                document.querySelector('#nomeUsuario').setAttribute('disabled', 'disabled')
                document.querySelector('#marcaVeiculo').setAttribute('disabled', 'disabled')
                document.querySelector('#placa').setAttribute('disabled', 'disabled')
                document.querySelector('#cor').setAttribute('disabled', 'disabled')
                document.querySelector('#cpf').setAttribute('disabled', 'disabled')
                document.querySelector('#nome-motorista').setAttribute('disabled', 'disabled')
                document.querySelector('#dataNascimento').setAttribute('disabled', 'disabled')
                document.querySelector('#matricula').setAttribute('disabled', 'disabled')
                document.querySelector('#telFixo').setAttribute('disabled', 'disabled')
                document.querySelector('#celular').setAttribute('disabled', 'disabled')

                let campoA = document.querySelector('#estacionamento').value
                let campoB = document.querySelector('#qtdvagas').value
                let campoC = document.querySelector('#nomevisit').value
                let campoD = document.querySelector('#cpfvisit').value
                let campoE = document.querySelector('#veiculovisit').value
                let campoF = document.querySelector('#motivoRes').value
                let processo = document.querySelector('#titulo').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value
                const SLA = 4;

                let stringCampos = `Estacionamento: ${campoA}, Qtd de Vagas: ${campoB}, Nome do visitante: ${campoC}, Cpf do Visitante: ${campoD}, Veículo do visitante: ${campoE}, Motivo da reserva: ${campoF}`;

                console.log(stringCampos)
                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Estacionamento',
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

            else if (atualizacao.style.display === 'block') {
                document.querySelector('#cpf').setAttribute('disabled', 'disabled')
                document.querySelector('#nome-motorista').setAttribute('disabled', 'disabled')
                document.querySelector('#dataNascimento').setAttribute('disabled', 'disabled')
                document.querySelector('#estacionamento').setAttribute('disabled', 'disabled')
                document.querySelector('#qtdvagas').setAttribute('disabled', 'disabled')
                document.querySelector('#nomevisit').setAttribute('disabled', 'disabled')
                document.querySelector('#cpfvisit').setAttribute('disabled', 'disabled')
                document.querySelector('#veiculovisit').setAttribute('disabled', 'disabled')
                document.querySelector('#motivoRes').setAttribute('disabled', 'disabled')

                let campoA = document.querySelector('#nomeUsuario').value
                let campoB = document.querySelector('#matricula').value
                let campoC = document.querySelector('#telFixo').value
                let campoD = document.querySelector('#marcaVeiculo').value
                let campoE = document.querySelector('#celular').value
                let campoF = document.querySelector('#placa').value
                let campoG = document.querySelector('#cor').value
                let processo = document.querySelector('#titulo').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value
                const SLA = 4;

                let stringCampos = `Nome do usuário: ${campoA}, Matricula: ${campoB}, Telefone Fixo: ${campoC}, Marca do veiculo: ${campoD}, Celular: ${campoE}, Placa: ${campoF}, Cor: ${campoG}`;
                console.log(stringCampos)
                // window.location.reload()

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Estacionamento',
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
