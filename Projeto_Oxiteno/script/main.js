// //transpõe formulários para manipulação e visualização
// const divForm = document.querySelector('.form--display');
// const divOptions = document.querySelector('.servicos--display');

//gera o código de id randomicamente
function gerarId(codOperacao){
    let id;
    switch(codOperacao){
        case 1: id = 'RES-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 2: id = 'LIM-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 3: id = 'JAR-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 4: id = 'SEG-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 5: id = 'REC-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 6: id = 'MCO-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 7: id = 'CPR-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 8: id = 'MSN-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 9: id = 'MBQ-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 10: id = 'EST-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 11: id = 'TRT-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 12: id = 'TRA-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 13: id = 'FRV-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 14: id = 'PAB-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
        case 15: id = 'EPD-' + Math.floor(Math.random() * Math.pow(10,5));
            break;
    }
    return id;
}

//console.log('teste')

//Ao click de cada área distinta
// $('.linkOption').on('click', function(e){
//     e.preventDefault();
//     console.log($(this).data('value'));

//     //Troca visibilidade das divs
//     if(divForm.style.display === 'none'){
//         divForm.style.display = 'block';
//         divOptions.style.display = 'none';
//     }
//     else{
//         divForm.style.display = 'none';
//         divOptions.style.display = 'block';
//     }
//     console.log(gerarId($(this).data('value')));
// })

// $('#voltar').on('click', function(){
//     if(divForm.style.display === 'block'){
//         divForm.style.display = 'none';
//         divOptions.style.display = 'block';
//     }
//     else{
//         divForm.style.display = 'block';
//         divOptions.style.display = 'none';
//     }
// })

function validador(){
    let email = form.email.value;
    let titulo = form.titulo.value;
    let localizacao = form.localicao.value;
    let andar = form.andar.value;
    let textarea = form.chamado.value;


    if(email == ''){
        alert("Digite seu email");
    }else if(titulo == ''){
        alert("Escolha o titulo para realizar o chamado");
    }else if(localizacao == ''){
        alert("Escolha o localização para realizar o chamado");
    }else if(andar == ''){
        alert("Escolha o andar para realizar o chamado");
    }else if(textarea == ''){
        alert("Digite seu chamado");
    }
}



// Abre e fecha modal
const Modal = {
    open(){
        document
            .querySelector('.modal-form')
            .classList
            .add('active')
    },
    close(){
        document
            .querySelector('.modal-form')
            .classList
            .remove('active')
    }
}


// Muda o título do modal

function setTitle(title){
    const modalName = document.getElementById('nomeModal')
    modalName.innerHTML = title
}





