var msg = document.getElementById('mes');
var button = document.getElementById('press');
var box = document.getElementById('box');


// console.log(list);
button.addEventListener("click",function(){
  var newMsg = document.createElement("li");
  newMsg.innerHTML =  box.value;

  newMsg.style.padding = "5px";
  newMsg.style.letterSpacing = "1px";
  newMsg.style.lineHeight = "1.6em";
  newMsg.style.fontSize = "18px";
  newMsg.style.borderBottom = "1px grey solid";

  msg.appendChild(newMsg);

  console.log(newMsg);
  box.value = "";
}
)
