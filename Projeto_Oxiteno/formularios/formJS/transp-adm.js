const URL_CHAMADO = 'http://localhost:5000/api/chamados';

function gerarId(){
    return id = 'TRA-' + Math.floor(Math.random() * Math.pow(10,5));
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
        }
    });
}

mostraFormTrAdm()

function stringConcat() {
    const titulo = document.querySelector('#titulo');
    var stringCampos
    titulo.addEventListener('change', function () {
        // classes de titulos
        const classeCadastro = document.querySelector('.cadAtualizacao')
        const segCracha = document.querySelector('.segCracha')

        const btnEnviar = document.querySelector('#btn-enviar')


        btnEnviar.addEventListener('click', function () {
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

                let processo = document.querySelector('#titulo').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value
                const SLA = 4;

                // concatena os valores e os retorna
                let stringCampos = `Nome: ${campoA}, Matricula: ${campoB}, Endereço: ${campoC}, Data de inicio: ${campoD}`;
                console.log(stringCampos)

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Transporte Administrativo',
                        processo: processo,
                        sla: SLA,
                        email: email,
                        local: local,
                        andar: andar,
                        mensagem: chamado,
                        detalhesAdicionais: stringCampos,
                        dataAbertura: geraDataAtual(),
                        dataVencimento: geraDataVencimento(SLA),
                        statusChamado: 'Aberto'
                    })
        
                })
                Toast.show("Chamado enviado com sucesso! Cheque seu e-mail", "success");
            }

            else if (segCracha.style.display === 'block') {

                document.querySelector('.nome-completo').setAttribute('disabled', 'disabled')
                document.querySelector('.matricula').setAttribute('disabled', 'disabled')
                document.querySelector('.endereco').setAttribute('disabled', 'disabled')
                document.querySelector('.dataInicio').setAttribute('disabled', 'disabled')

                let campoA = document.querySelector('#numeroDaLinha').value
                let campoB = document.querySelector('#endereco-completo').value
                let campoC = document.querySelector('#motivo').value

                let processo = document.querySelector('#titulo').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value
                const SLA = 4;

                let stringCampos = `Numero da linha: ${campoA}, Endereço: ${campoB}, Motivo: ${campoC}`;
                console.log(stringCampos)
                // window.location.reload()

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Transporte Administrativo',
                        processo: processo,
                        sla: SLA,
                        email: email,
                        local: local,
                        andar: andar,
                        mensagem: chamado,
                        detalhesAdicionais: stringCampos,
                        dataAbertura: geraDataAtual(),
                        dataVencimento: geraDataVencimento(SLA),
                        statusChamado: 'Aberto'
                    })
        
                })
                Toast.show("Chamado enviado com sucesso! Cheque seu e-mail", "success");
            }

            else if((segCracha.style.display === 'none') && (classeCadastro.style.display === 'none')){
                let processo = document.querySelector('#titulo').value
                let email = document.querySelector('#email').value
                let local = document.querySelector('#local').value
                let andar = document.querySelector('#andar').value
                let chamado = document.querySelector('#chamado').value
                const SLA = 4;

                fetch(URL_CHAMADO, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        numChamado: gerarId(),
                        gerencia: 'Transporte Administrativo',
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
