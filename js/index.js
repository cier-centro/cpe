

$( document ).ready(function() {
  	changeSquareHeight();
});

$( window ).resize(function() {
  	changeSquareHeight();
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
