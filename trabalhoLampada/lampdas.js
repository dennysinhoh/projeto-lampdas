var lig = document.getElementById('lampadas')

function lampadaquebrada(){ 
    return lig.src.indexOf('quebrada') > -1  // função de negativa.  (indexOf) |procura palavara  solitada|  exemplo:(quebrada)
}                                            //                                |dentro de uma string      |

function ligar(){ 
    if(!lampadaquebrada()) { 
    lig.src = ('ligada.svg')}
}

function desligar(){
    if(!lampadaquebrada()) {     
    lig.src = ('desligada.svg')}
}

lig.addEventListener('click',quebrar)     // (addEventListener) cria eventos 
function quebrar(){
    lig.src = ('quebrada.svg')  

}