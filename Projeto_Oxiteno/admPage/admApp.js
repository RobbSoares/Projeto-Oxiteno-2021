const URL_CHAMADOS = 'http://localhost:5000/api/chamados';
const URL_PROCESSOS = 'http://localhost:5000/api/processos';
let output = '';
let modal = '';
let obj;

var cmbGerencia = document.getElementById('selectGerencia');
var cmbOrdem = document.getElementById('selectTempo');
var cmbStatus = document.getElementById('selectStatus');
/*
function zeroFill(n){
    return n < 9 ? `0${n}` : `${n}`;
}

function formatDate(date){
    const d = zeroFill(date.getDate());
    const mo = zeroFill(date.getMonth()+1);
    const y = zeroFill(date.getFullYear());
    const h = zeroFill(date.getHours());
    const mi = zeroFill(date.getMinutes());
    const s = zeroFill(date.getSeconds());

    return `${d}/${mo}/${y} ${h}:${mi}:${s}`;
}*/


function openModal(){
    let modalInfo = document.getElementById('modal--box');
    console.log('deu aqui')
    modalInfo.style.display = 'block';
    let numChamado = document.getElementById('1');
    numChamado.innerHTML = obj.numChamado
}

function fecharChamado(){
    let btnFC = document.getElementById('btnFecharChamado');
    btnFC.addEventListener('click', function(){
        fetch(`${url}/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                numChamado: obj.numChamado,
                gerencia: obj.gerencia,
                processo: obj.processo,
                sla: obj.sla,
                email: obj.email,
                local: obj.local,
                andar: obj.andar,
                mensagem: obj.mensagem,
                detalhesAdicionais: obj.detalhesAdicionais,
                dataAbertura: obj.dataAbertura,
                dataVencimento: obj.dataVencimento,
                statusChamado: 'Fechado'
            }) 
        })
        .then(res => res.json())
    })
}

function buscaStatus(optionSelected){
    let tb = document.querySelector('.tbody');
    let md = document.querySelector('.modal--box');
    /*
    let tb2 = document.querySelector('#dados-tabela')
    if(tb.parentNode){
        tb.parentNode.removeChild(tb)
    }*/
    fetch(URL_CHAMADOS)
        .then(res => res.json())
        .then(data =>{
            

            if(optionSelected === 'Chamados Abertos'){
                obj = [...data].filter((el) =>{
                    return el.statusChamado === 'Aberto';
                })
            }
            else{
                obj = [...data].filter((el) =>{
                    return el.statusChamado === 'Fechado';
                })
            }
        
        obj.forEach(el => {
            let modal;
            if(el.statusChamado == 'Aberto'){
                output += `
                            <tr>
                                <td>${el.numChamado}</td>
                                <td>${el.processo}</td>
                                <td>${el.gerencia}</td>
                                <td>${el.sla} Horas</td>
                                <td>${el.dataVencimento}</td>
                                <td class="statusNegativo">${el.statusChamado}</td>
                                <td><Button id="btnFecharChamado" onclick="fecharChamado()">Fechar Chamado</teste></td>
                                <td><Button id="btnDetalhes" onclick="openModal()">Ver Detalhes</teste></td>
                            </tr>`;
            }
            if(el.statusChamado == 'Fechado'){
                output += `
                            <tr>
                                <td>${el.numChamado}</td>
                                <td>${el.processo}</td>
                                <td>${el.gerencia}</td>
                                <td>${el.sla} Horas</td>
                                <td>${el.dataVencimento}</td>
                                <td class="statusPositivo">${el.statusChamado}</td>
                                <td></td>
                                <td><Button id="btnDetalhes" onclick="openModal()">Ver Detalhes</teste></td>
                            </tr>`;
            }
            /*modal = `
                <div id="abrirModal" class="modal">
                    <a href="#fechar" title="Fechar" class="fechar">x</a>
                    <h2>Detalhes do chamado</h2>
                    <p>Numero do chamado: ${el.numChamado}</p>
                    <p>Processo: ${el.processo}</p>
                    <p>Gerencia: ${el.gerencia}</p>
                    <p>SLA: ${el.sla} Horas</p>
                    <p>Data de abertura: ${el.dataAbertura}</p>
                    <p>Data de vencimento: ${el.dataAbertura}</p>
                    <p>Status do chamado: ${el.statusChamado}</p>
                    <p>Informações: ${el.detalhesAdicionais}</p>
                </div>
            `*/
            
            //console.log(output)
        }) 
        tb.innerHTML = output;
        //md.innerHTML = modal
        output = ''; 
    });
    //tb.innerHTML = output;
}

function buscaGerenciaOrdem(optionSelected){
    let tb = document.querySelector('.tbody');
    let md = document.querySelector('.modal--box');
    /*
    let tb2 = document.querySelector('#dados-tabela')
    if(tb.parentNode){
        tb.parentNode.removeChild(tb)
    }*/
    fetch(URL_CHAMADOS)
        .then(res => res.json())
        .then(data =>{
            

            if(optionSelected == 'Mais Recentes'){
                obj = [...data].sort((a,b) =>{
                    return a.dataAbertura - b.dataAbertura;
                })
            }
            else{
                obj = [...data].sort((a,b) =>{
                    return b.dataAbertura - a.dataAbertura;
                })
            }
        
        obj.forEach(el => {
            let modal;
            if(el.statusChamado == 'Aberto'){
                output += `
                            <tr>
                                <td>${el.numChamado}</td>
                                <td>${el.processo}</td>
                                <td>${el.gerencia}</td>
                                <td>${el.sla} Horas</td>
                                <td>${el.dataVencimento}</td>
                                <td class="statusNegativo">${el.statusChamado}</td>
                                <td><Button id="btnFecharChamado" onclick="fecharChamado()">Fechar Chamado</teste></td>
                                <td><Button id="btnDetalhes" onclick="openModal()">Ver Detalhes</teste></td>
                            </tr>`;
            }
            if(el.statusChamado == 'Fechado'){
                output += `
                            <tr>
                                <td>${el.numChamado}</td>
                                <td>${el.processo}</td>
                                <td>${el.gerencia}</td>
                                <td>${el.sla} Horas</td>
                                <td>${el.dataVencimento}</td>
                                <td class="statusPositivo">${el.statusChamado}</td>
                                <td></td>
                                <td><Button id="btnDetalhes" onclick="openModal()">Ver Detalhes</teste></td>
                            </tr>`;
            }
            /*modal = `
                <div id="abrirModal" class="modal">
                    <a href="#fechar" title="Fechar" class="fechar">x</a>
                    <h2>Detalhes do chamado</h2>
                    <p>Numero do chamado: ${el.numChamado}</p>
                    <p>Processo: ${el.processo}</p>
                    <p>Gerencia: ${el.gerencia}</p>
                    <p>SLA: ${el.sla} Horas</p>
                    <p>Data de abertura: ${el.dataAbertura}</p>
                    <p>Data de vencimento: ${el.dataAbertura}</p>
                    <p>Status do chamado: ${el.statusChamado}</p>
                    <p>Informações: ${el.detalhesAdicionais}</p>
                </div>
            `*/
            
            //console.log(output)
        }) 
        tb.innerHTML = output;
        //md.innerHTML = modal
        output = ''; 
    });
    //tb.innerHTML = output;
    
}




function buscaGerencia(optionSelected){
    let tb = document.querySelector('.tbody');
    let md = document.querySelector('.modal--box');
    /*
    let tb2 = document.querySelector('#dados-tabela')
    if(tb.parentNode){
        tb.parentNode.removeChild(tb)
    }*/
    fetch(URL_CHAMADOS)
        .then(res => res.json())
        .then(data =>{
            obj = [...data].filter((el) =>{
            return el.gerencia === optionSelected;
        })
        obj.forEach(el => {
            let modal;
            if(el.statusChamado == 'Aberto'){
                output += `
                            <tr>
                                <td>${el.numChamado}</td>
                                <td>${el.processo}</td>
                                <td>${el.gerencia}</td>
                                <td>${el.sla} Horas</td>
                                <td>${el.dataVencimento}</td>
                                <td class="statusNegativo">${el.statusChamado}</td>
                                <td><Button id="btnFecharChamado" onclick="fecharChamado()">Fechar Chamado</teste></td>
                                <td><Button id="btnDetalhes" onclick="openModal()">Ver Detalhes</teste></td>
                            </tr>`;
            }
            if(el.statusChamado == 'Fechado'){
                output += `
                            <tr>
                                <td>${el.numChamado}</td>
                                <td>${el.processo}</td>
                                <td>${el.gerencia}</td>
                                <td>${el.sla} Horas</td>
                                <td>${el.dataVencimento}</td>
                                <td class="statusPositivo">${el.statusChamado}</td>
                                <td></td>
                                <td><Button id="btnDetalhes" onclick="openModal()">Ver Detalhes</teste></td>
                            </tr>`;
            }
            /*modal = `
                <div id="abrirModal" class="modal">
                    <a href="#fechar" title="Fechar" class="fechar">x</a>
                    <h2>Detalhes do chamado</h2>
                    <p>Numero do chamado: ${el.numChamado}</p>
                    <p>Processo: ${el.processo}</p>
                    <p>Gerencia: ${el.gerencia}</p>
                    <p>SLA: ${el.sla} Horas</p>
                    <p>Data de abertura: ${el.dataAbertura}</p>
                    <p>Data de vencimento: ${el.dataAbertura}</p>
                    <p>Status do chamado: ${el.statusChamado}</p>
                    <p>Informações: ${el.detalhesAdicionais}</p>
                </div>
            `*/
            
            //console.log(output)
        }) 
        tb.innerHTML = output;
        //md.innerHTML = modal
        output = ''; 
    });
    //tb.innerHTML = output;
    
}
function mudarOrdem(){
    let optionSelected = cmbOrdem.options[cmbOrdem.selectedIndex].text
    console.log(optionSelected)
    return buscaGerenciaOrdem(optionSelected)
}


function mudarSelecao(){
    let optionSelected = cmbGerencia.options[cmbGerencia.selectedIndex].text
    //return console.log(cmbGerencia.options[cmbGerencia.selectedIndex].text);
    console.log(optionSelected)
    return buscaGerencia(optionSelected)
}

function mudarSelecaoStatus(){
    let optionSelected = cmbStatus.options[cmbStatus.selectedIndex].text
    console.log(optionSelected)
    return buscaStatus(optionSelected)
}