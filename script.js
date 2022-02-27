let myFun = new webkitSpeechRecognition();
myFun.onresult = (e) => {
  let text = e.results[0][0].transcript;
  document.getElementById("text").innerText = text;
  read(text);
};
function read(text) {
  let speak = new SpeechSynthesisUtterance();
  speak.text = text;
  if (text == "hello") {
    speak.text = "I am fuck you baby";
  } else if (text == "what is your name") {
    speak.text = "My Name is programing hero. I am your Assistants";
  } else if (text == "what is your father name") {
    speak.text = "My Father Name is Swapon Saha";
  } else if (text == "what is your best language") {
    speak.text = "Javascript is my favorite language";
  } else if (text == "what is your favorite Player") {
    speak.text = "My favorite Player Name is CR7";
  } else {
    speak.text = "please try again";
  }
  document.getElementById("res").innerText = speak.text;
  window.speechSynthesis.speak(speak);
}
