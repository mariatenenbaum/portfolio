var myString = "Hej! I'm Maria! I love beautiful skys, coffee, dancing and coding. I'm a frontend developer and a big fan of technology.";
var myArray = myString.split("");
var loopTimer;
function frameLooper() {
	if(myArray.length > 0) {
		document.getElementById("myTypingText").innerHTML += myArray.shift();
	} else {
		clearTimeout(loopTimer); 
                return false;
	}
	loopTimer = setTimeout('frameLooper()',70);
}
frameLooper();
// var myString = "Place your string data here, and as much as you like.";
// var myArray = myString.split("");
// var loopTimer;
// function frameLooper() {
//   if(myArray.length > 0) {
//     document.getElementById("myTypingText").innerHTML += myArray.shift();
//   } else {
//     clearTimeout(loopTimer); 
//                 return false;
//   }
//   loopTimer = setTimeout('frameLooper()',70);
// }
// frameLooper();