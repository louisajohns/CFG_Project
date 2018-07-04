document.addEventListener('DOMContentLoaded', function(){

  $('#carousel-button').click(newParagraph);

  var element = document.createElement("p");
  element.setAttribute('id','pTag');
  var main = document.getElementById("main");
  var text = document.createTextNode("In her work one can see how her multicultural background of being born to her Chinese-Singapurian and French-Pakistani parents and being brought up in Australia has impacted her work and perception of the world.");

  main.appendChild(element);
  element.appendChild(text);
  $("#pTag").toggle();

  function newParagraph() {
    $("#pTag").toggle();
  }
  
})
