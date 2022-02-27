let myFun = new webkitSpeechRecognition();
myFun.onresult = (e)=>{
    let text = e.results[0][0].transcript;
    document.getElementById('text').innerText=text;
    read(text)
}
function read(text){
    let speak = new SpeechSynthesisUtterance();
    speak.text = text;
    if (text=='hello') {
        speak.text ='bye'
    }else if(text=='what is your name'){
        speak.text='My Name is programing hero. I am your Assignment'
    }else{
        speak.text='please try again'
    }
    document.getElementById('res').innerText=speak.text
    window.speechSynthesis.speak(speak);
}