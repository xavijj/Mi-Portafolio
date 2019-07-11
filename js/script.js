$(function(){
  $('.carousel').carousel({
    duration:2000
  });
})
function miFuncion(){
 /*Recoge el valor de cada elemento INPUT del fichero HTML */
 var input1 = document.getElementById("texto1").value.toLowerCase();
 var input2 = document.getElementById("texto2").value.toLowerCase();
 var input3 = document.getElementById("texto3").value.toLowerCase();
 var input4 = document.getElementById("texto4").value.toLowerCase();
 /*Recogida de cada uno de los parrafos para mostrar el resultado */
 var resultado1 = document.getElementById("resultado1");
 var resultado2 = document.getElementById("resultado2");
 var resultado3 = document.getElementById("resultado3");
 var resultado4 = document.getElementById("resultado4");

  /*Compara la primera adivinanza*/
 if (input1 === "sombra") {
   resultado1.innerHTML = "¡Acertaste!";
 }else{
   resultado1.innerHTML = "Vuelvelo a intentar!";
 }

  /*Compara la segunda adivinanza*/
 if (input2 === "mojado") {
   resultado2.innerHTML = "¡Acertaste!";
 }else{
   resultado2.innerHTML = "Vuelvelo a intentar!";
 }

  /*Compara la tercera adivinanza*/
 if (input3 === "estrella de mar") {
   resultado3.innerHTML = "¡Acertaste!";
 }else{
   resultado3.innerHTML = "Vuelvelo a intentar!";
 }
  /*Compara la cuarta adivinanza*/
 if (input4 === "radio") {
   resultado4.innerHTML = "¡Acertaste!";
 }else{
   resultado4.innerHTML = "Vuelvelo a intentar!";
 }

}
