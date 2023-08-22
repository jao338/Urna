let seuVotoPara = document.querySelector('.d1-left1 span');
let cargo = document.querySelector('.d1-left2 span');
let descricao = document.querySelector('.d1-left4');
let aviso = document.querySelector('.d2');
let lateral = document.querySelector('.d1-right');
let numeros = document.querySelector('.d1-left3');

let etapaAtual = 0;
let numero = '';

function iniciarEtapa(){

    let etapa = etapas[etapaAtual];

    let numeroHTML = '';

    for (let index = 0; index < etapa.numeros; index++) {

        if(index === 0){
            numeroHTML += '<div class="numero pisca"></div>'
        }else{
            numeroHTML += '<div class="numero"></div>'
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none'
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML

}

function atualizaInterface(){

    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if(item.numero === numero){
            return true;
        }else{
            return false;
        }
    });

    if(candidato.length > 0){
        candidato = candidato[0];
    }
}

function clicou(n){

    let num = document.querySelector('.numero.pisca');

    if(num !== null){
        num.innerHTML = n;
        numero = `${numero}${n}`;

        num.classList.remove('pisca');

        if(num.nextElementSibling !== null){
            num.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterface();
        }
    }

}

function branco(){
    
}

function corrige(){
    
}
function confirma(){
    
}

iniciarEtapa();