function bigger() {
  document.getElementById("area").style.fontSize = "24pt";
}

function fancy() {
  if (document.getElementById("fancyButton").checked == true) {
    document.getElementById("area").style.fontWeight = "bold";
    document.getElementById("area").style.color = "blue";
    document.getElementById("area").style.textDecoration = "underline";
  }
}

function boring() {
  if (document.getElementById("boringButton").checked == true) {
    document.getElementById("area").style.fontWeight = "normal";
    document.getElementById("area").style.color = "black";
    document.getElementById("area").style.textDecoration = "none";
  }
}

function moo() {
  var textarea = document.getElementById("area");
  textarea.style.textTransform = "uppercase";
  let str = textarea.value.split(".");
  let str2 = str.join("-Moo");
  textarea.value = str2;
}
