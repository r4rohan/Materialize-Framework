//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
nlp = window.nlp_compromise;

var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Arya Chatbot', //name of the chatbot
  talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused"; //the default message

  if (lastUserMessage === 'hey' || lastUserMessage =='hello'||lastUserMessage =='hii'||lastUserMessage =='hi'||lastUserMessage =='howdy'||lastUserMessage =='hey bro'||lastUserMessage =='pranam'||lastUserMessage =='namaste') {
    const hi = ['hii dear','Pranam','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }
    if (lastUserMessage === 'Virtual Travellers' || lastUserMessage =='Arya'||lastUserMessage =='geetika'||lastUserMessage =='rohan'||lastUserMessage =='prateek'||lastUserMessage =='anonymous'||lastUserMessage =='meghana'||lastUserMessage =='nikhita'||lastUserMessage =='pateswar'||lastUserMessage =='gurpreet'||lastUserMessage =='adarsh'||lastUserMessage =='deven'||lastUserMessage =='aishwarya'||lastUserMessage =='ishiqa'||lastUserMessage =='vishnu'||lastUserMessage =='aman'||lastUserMessage =='sukhi') {
    const hi = ['hi','howdy','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }
      if (lastUserMessage === 'rajasthan' || lastUserMessage =='india') {
    const hi = ['Khama Ghani','Padharo mare desh','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }
        if (lastUserMessage === 'will you help me?' || lastUserMessage =='help?'||lastUserMessage =='can you help me?') {
    const hi = ['Yes, sure how may I help u?','okk, what kind of help?','Help of what kind?']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }
          if (lastUserMessage =='how to learn more?'||lastUserMessage =='effective ways to study in exams?'||lastUserMessage =='how to study?'||lastUserMessage =='how to score more?') {
    const hi = ['by working hard','by putting your best efforts and working hard','Here are the results>>>Work Hard']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
            //document.write("<p>Link: " + txt.link("http://tourism.rajasthan.gov.in/") + "</p>");
         
              
  }
            if (lastUserMessage === 'Are you ready to talk to me?' || lastUserMessage =='Ready?') {
    const hi = ['yupp, always','Ever ready,hahahha','yupp, ask me what you have got>>>']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
         
         
              
  }
            if (lastUserMessage === 'I love you' || lastUserMessage =='Thank You') {
    const hi = ['Thats so sweet of you','So sweet','You are always welcome']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
            
         
              
  }
            if (lastUserMessage === 'why have you been designed?' || lastUserMessage =='Aim of your designing?'||lastUserMessage =='why were you designed?'||lastUserMessage =='why are you designed?') {
    const hi = ['To help the people for their betterment and to uplift the society providing them a better future.','For helping the people and serving their cause.','In order to help the people to find the way for their betterment & to uplift the society serving the cause and thus, providing a better future to all of them.']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
            
         
              
  }
       

  


  if (lastUserMessage === 'what is your name?'||lastUserMessage =='name?'||lastUserMessage =='whats your name?') {
    botMessage = 'My name is ' + botName;
  }
}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}