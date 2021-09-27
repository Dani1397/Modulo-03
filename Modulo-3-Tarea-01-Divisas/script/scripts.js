var moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
var conversion = [0, 1, 0.050, 0.00026, 1.18, 1.38];

moneda.forEach ((e)=>{
    var option= document.createElement ('option') 
    option.innerHTML=e; 
    document.getElementById ('choose-1').appendChild (option)
    var option2= document.createElement ('option')
    option2.innerHTML=e;
    document.getElementById ('choose-2').appendChild (option2)
})
var alerta= document.createDocumentFragment()
var error=document.createElement('span')
alerta.appendChild(error)
    document.getElementsByClassName ('form-section').item(0).appendChild(alerta)

document.getElementById ('submit').addEventListener('click', ()=>{
    var money=document.getElementById('cantidad-dinero').value;
    var money1=document.getElementById('choose-1').value;
    var money2=document.getElementById('choose-2').value;

    if(isNaN(money) || money < 1 || money1===moneda[0] || money2===moneda[0]) {
        error.setAttribute('class','error') 
        error.innerHTML='Formulario inválido';
    } else{
        error.setAttribute('class','')
        error.innerHTML='';
        var valorEnUSD = money * conversion[moneda.indexOf(money1)];
        var valor = valorEnUSD / conversion[moneda.indexOf(money2)];
        alert('Su valor es ' + valor); 
    }


})