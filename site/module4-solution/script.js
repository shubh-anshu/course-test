var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0; i<names.length; i++) {

  if (names[i][0] === 'J') {
    GB.speak(names[i]);
  } else {
    // helloSpeaker.xxxx
    HL.speak(names[i]);
  }
}