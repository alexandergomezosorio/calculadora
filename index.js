const botonSumar = document.querySelector("#btnSumar");

botonSumar.addEventListener("click", function () {
  const numeroUno = document.getElementById("numeroUno").value;
  const numeroDos = document.getElementById("numeroDos").value;
  const mostrar = document.querySelector("#resultado");
  const resultado = parseInt(numeroUno)+parseInt(numeroDos);
  mostrar.textContent = "Su resultado es: "+(resultado);

  console.log(resultado);
});
const botonRestar = document.querySelector("#btnRestar");

botonRestar.addEventListener("click", function () {
  const numeroUno = document.getElementById("numeroUno").value;
  const numeroDos = document.getElementById("numeroDos").value;
  const mostrar = document.querySelector("#resultado");
  const resultado = parseInt(numeroUno)-parseInt(numeroDos);
  mostrar.textContent ="Su resultado es: " + resultado;

  console.log(resultado);
});
const botonMultiplicar = document.querySelector("#btnMultiplicar");

botonMultiplicar.addEventListener("click", function () {
  const numeroUno = document.getElementById("numeroUno").value;
  const numeroDos = document.getElementById("numeroDos").value;
  const mostrar = document.querySelector("#resultado");
  const resultado = parseInt(numeroUno) * parseInt(numeroDos);
  mostrar.textContent = "Su resultado es: " + resultado;

  console.log(resultado);
});
const botonDividir = document.querySelector("#btnDividir");

botonDividir.addEventListener("click", function () {
  const numeroUno = document.getElementById("numeroUno").value;
  const numeroDos = document.getElementById("numeroDos").value;
  const mostrar = document.querySelector("#resultado");

  if(parseInt(numeroDos)===0){
    mostrar.textContent = "Error nose puede dividir por 0";
    console.log('Error nose puede dividir por 0');
  }else{
      const resultado = parseInt(numeroUno) / parseInt(numeroDos);
      mostrar.textContent = "Su resultado es: " + resultado;
      console.log(resultado);
  }
});
