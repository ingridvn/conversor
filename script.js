function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico / 5.3;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Você vai levar US$ " + (valorEmReal.toFixed(2)) + " dólares na sua viagem!";
    elementoValorConvertido.innerHTML = valorConvertido;
  
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico / 5.8;
  
    var elementoValorConvertidoEuro = document.getElementById("valorConvertidoEuro");
    var valorConvertidoEuro = "Você vai levar € " + (valorEmReal.toFixed(2)) + " euros na sua viagem!";
    elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
  }

  function Dolar(){
    var valorElemento = document.getElementById("dolar");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5.3;
  
    var elementoValorConvertido = document.getElementById("valorConvertidoDolarReal");
    var valorConvertidoDolarReal = "Você vai precisar de R$ " + (valorEmReal.toFixed(2)) + " para sua viagem!";
    elementoValorConvertido.innerHTML = valorConvertidoDolarReal;

  }

  function Euro(){
    var valorElemento = document.getElementById("euro");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5.8;
  
    var elementoValorConvertido = document.getElementById("valorConvertidoEuroReal");
    var valorConvertidoEuroReal = "Você vai precisar de R$ " + (valorEmReal.toFixed(2)) + " para sua viagem!";
    elementoValorConvertido.innerHTML = valorConvertidoEuroReal;

  }