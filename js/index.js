// var myString = "Hej,";
// var myArray = myString.split("");
// var loopTimer;
// function frameLooper() {
// 	if(myArray.length > 0) {
// 		document.getElementById("myTypingText").innerHTML += myArray.shift();
// 	} else {
// 		clearTimeout(loopTimer); 
//                 return false;
// 	}
// 	loopTimer = setTimeout('frameLooper()',1000);
// }
// frameLooper();

var phrases;
        function setPhrases(){
            phrases = {
                1: "Hi :)".split(""),
                2: "Hej :)".split(""),
                3: "Ciao :)".split(""),
                4: "Hola :)".split(""),
                5: "Привет:)".split(""),
            };
        }
        setPhrases();

        var element = document.getElementById("me-typing-text");
        var loopTimer;

        function frameLooper(phrase) {
            if(phrase.length > 0) {
                element.innerHTML += phrase.shift();
            } else {
                clearTimeout(loopTimer);
                return false;
            }
            loopTimer = setTimeout(function(){
                frameLooper(phrase);
            },100);
        }

        var c = 1;
        function loopLooper(){
            if (c <= 5) {
                setTimeout(function(){
                    element.innerHTML = "";
                    frameLooper(phrases[c++]);
                    loopLooper();
                },3000);
            }
            else {
                setPhrases();
                c=1;
                loopLooper();
            }
        }
        frameLooper(phrases[c++]);
    	loopLooper();


