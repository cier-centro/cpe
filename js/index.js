

$( document ).ready(function() {
  	//changeSquareHeight(); --SE ELIMINAN PARA QUITAR LOS ERRORES DE YESID
});

$( window ).resize(function() {
  	//changeSquareHeight(); --SE ELIMINAN PARA QUITAR LOS ERRORES DE YESID
});

function changeSquareHeight() {
		var heightSquare = $( ".square" ).outerWidth();
		$(".square").outerHeight(heightSquare);
}


function writeUserData() {

  // Get a reference to the database service
  var database = firebase.database().ref();
   email=document.getElementById('emailInput').value
   //Console.log("Correo guardado con éxito");
   database.child("emails").push(email);
 }
//comentario
