// Mostra formulario e esconde formulário
function mostraFormTrAdm() {
    var titulo = document.querySelector('#titulo');
    titulo.addEventListener('change', function () {
        var option = this.selectedOptions[0];
        var texto = option.textContent;

        switch (texto) {
            case 'Cadastro de novo colaborador':
            case 'Mudança de endereço':
                x = document.querySelectorAll(".cadAtualizacao");
                for (var i = 0; i < x.length; i++) {
                    x[i].style.display = "block";
                }

                z = document.querySelectorAll(".segCracha");
                for (h = 0; h < z.length; h++) {
                    z[h].style.display = "none";
                }
                break;

            case '2ª via de crachá':
                y = document.querySelectorAll(".segCracha");
                for (h = 0; h < y.length; h++) {
                    y[h].style.display = "block";
                }

                x = document.querySelectorAll(".cadAtualizacao");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                break

            case 'Outras solicitações':
                x = document.querySelectorAll(".cadAtualizacao");
                for (var i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }

                y = document.querySelectorAll(".segCracha");
                for (var i = 0; i < y.length; i++) {
                    y[i].style.display = "none";
                }
                break

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
                y = document.querySelectorAll(".mudançaturno");
                for (h = 0; h < y.length; h++) {
                    y[h].style.display = "block";
                }

                x = document.querySelectorAll(".cadastro");
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
    const titulo = document.querySelector('#titulo');
    titulo.addEventListener('change', function () {
        // classes de titulos
        const classeCadastro = document.querySelector('.cadAtualizacao')
        const segCracha = document.querySelector('.segCracha')
        const manVeiculo = document.querySelector('.manutencao-veiculo')
        const resVeiculo = document.querySelector('.reserva-veiculos')


        const cadastro = document.querySelector('.cadastro')
        const mudancaturno = document.querySelector('.mudancaturno')


        const liberacao = document.querySelector('.liberacao')
        const reserva = document.querySelector('.reserva')
        const atualizacao = document.querySelector('.atualizacao')


        // botões de cada formulario
        const btnEnviarTransAdm = document.querySelector('#btn-enviar')
        const btnEnviarFrota = document.querySelector('#btn-enviar')
        const btnEnviarEstacionamento = document.querySelector('#btn-enviar')
        const btnEnviarTransTurno = document.querySelector('#btn-enviar')

        let stringCampos

        btnEnviarTransAdm.addEventListener('click', function () {
            if (classeCadastro.style.display === 'block') {
                console.log(classeCadastro)

                // desabilita campos de outros titulos
                document.querySelector('#numeroDaLinha').setAttribute('disabled', 'disabled')
                document.querySelector('#endereco-completo').setAttribute('disabled', 'disabled')
                document.querySelector('#motivo').setAttribute('disabled', 'disabled')


                // pega os valores que o usuario digitou nos campos válidos
                let campoA = document.querySelector('.nome-completo').value
                let campoB = document.querySelector('.matricula').value
                let campoC = document.querySelector('.endereco').value
                let campoD = document.querySelector('.dataInicio').value
                let campoE = document.querySelector('#email').value
                let campoF = document.querySelector('#local').value
                let campoG = document.querySelector('#andar').value
                let campoH = document.querySelector('#chamado').value

                // concatena os valores e os retorna
                let stringCampos = campoA + campoB + campoC + campoD + campoE + campoF + campoG + campoH
                console.log(stringCampos)

                return stringCampos
            }

            else if (segCracha.style.display === 'block') {

                document.querySelector('.nome-completo').setAttribute('disabled', 'disabled')
                document.querySelector('.matricula').setAttribute('disabled', 'disabled')
                document.querySelector('.endereco').setAttribute('disabled', 'disabled')
                document.querySelector('.dataInicio').setAttribute('disabled', 'disabled')

                let campoA = document.querySelector('#numeroDaLinha').value
                let campoB = document.querySelector('#endereco-completo').value
                let campoC = document.querySelector('#motivo').value
                let campoD = document.querySelector('#email').value
                let campoE = document.querySelector('#local').value
                let campoF = document.querySelector('#andar').value
                let campoG = document.querySelector('#chamado').value

                let stringCampos = campoA + campoB + campoC + campoD + campoE + campoF + campoG
                console.log(stringCampos)

                return stringCampos
                // window.location.reload()

            }
            return stringCampos
        })

    })
}

stringConcat()


