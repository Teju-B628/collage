var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    if (content == "cheese"){
        speak(); 
        console.log ("taking your selfie");
    }
}

function speak(){
    var TTS = window.speechSynthesis;
    var Store = "taking your selfie in 5 seconds";
    var Connect = new SpeechSynthesisUtterance(Store);
    TTS.speak(Connect);
    Webcam.attach(camera);
    setTimeout(function(){
        imageId="selfie1";
        Store="taking your next selfie in 5 seconds";
        Connect=new SpeechSynthesisUtterance(Store);
        TTS.speak(Connect);
        picture();
    },5000);
    setTimeout(function(){
        imageId="selfie2";
        Store="taking your next selfie in 5 seconds";
        Connect=new SpeechSynthesisUtterance(Store);
        TTS.speak(Connect);
        picture();
    },10000);
    setTimeout(function(){
        imageId="selfie3";
        picture();
    },15000);

}

Webcam.set({
    width: 350, height: 350, image_format:'jpg', jpg_quality: 90
});

var camera = document.getElementById("camera");

function picture(){
    Webcam.snap(function (data_uri){
        if(imageId=="selfie1"){
            document.getElementById("p1").innerHTML='<img id="selfie1" src="'+ data_uri +'">';
        }
        if(imageId=="selfie2"){
            document.getElementById("p2").innerHTML='<img id="selfie2" src="'+ data_uri +'">';
        }
        if(imageId=="selfie3"){
            document.getElementById("p3").innerHTML='<img id="selfie3" src="'+ data_uri +'">';
        }
    });

}
