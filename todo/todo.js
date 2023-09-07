


var mylist = document.getElementsByTagName("li");

for (var i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);

  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function addList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var listItem = document.createTextNode(inputValue);
  li.appendChild(listItem);

  if (inputValue === '') {
    alert("Write something!!");
  } else {
    var list = document.getElementsByClassName("list-container");
    list[0].appendChild(li);
  }

  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}


