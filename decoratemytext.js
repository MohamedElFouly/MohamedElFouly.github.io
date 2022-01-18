function start() {
  var biggerButton = document.getElementById("biggerButton");
  biggerButton.onclick = clickBig;

  var checkBoxModify = document.getElementById("bling");
  checkBoxModify.onclick = modifyStyle;

  var playButton = document.getElementById("igpayAtinlay");
  playhButton.onclick = clickIgpayAtinlay;

  var malkovitchButton = document.getElementById("malkovitch");
  malkovitchButton.onclick = clickMalkovitch;
}

function enlarge() {
  document.getElementById("text1").style.fontSize = parseInt(window.getComputedStyle(document.getElementById("text1")).fontSize) + 2 + "pt";
}

function clickBig() {
  setInterval(enlarge, 500);
}

function modifyStyle() {
  if (document.getElementById("bling").checked == true)
  {
      document.getElementById("text1").style.fontWeight = "bold";
      document.getElementById("text1").style.color = "green";
      document.getElementById("text1").style.textDecoration = "underline";
      document.getElementById("body").style.backgroundImage = "url('images/100.jpg')"
  } else {
    document.getElementById("text1").style.fontWeight = "normal";
    document.getElementById("text1").style.color = "black";
    document.getElementById("text1").style.textDecoration = "initial";
      document.getElementById("body").style.backgroundImage = "initial"
  }

}

function clickIgpayAtinlay() {
  var txtStr = document.getElementById("text1").value;
  var str = txtStr.trim().split(" ");
  var newStr = "";
  for(var i = 0; i < str.length; i++) {
      newStr += translateIgpayAtinlay(str[i]) + " ";
  }

  document.getElementById("text1").value = newStr;
}

function translateIgpayAtinlay(str) {
    return str.replace(/\b(\w)(\w+)\b/g, function (a, b, c) {
        if (/[A-Z]/.test(b)) {
          c = c.replace(/^\w/, function (x) {
                return x.toUpperCase()
            });
        }
        return c + b.toLowerCase() + (/[aeiou]/i.test(b) ? 'way' : 'ay');
    });
}


function clickMalkovitch() {
  var txtStr = document.getElementById("text1").value;
  var str = txtStr.trim().split(" ");
  var newStr = "";
  for(var i = 0; i < str.length; i++) {
      if(str[i].length >= 5) {
        newStr += "Malkovitch ";
      } else {
          newStr += str[i] + " ";
      }
  }
  document.getElementById("text1").value = newStr;
}

window.onload = start;
