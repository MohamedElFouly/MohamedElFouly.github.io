var rudyTimer = (function() {
  var timer = null;
  if (timer === null) {
    return function x() {
      setInterval(temp, 1000);
    }
  } else {
    clearInterval(timer);
    timer = null;
  }

  function temp() {
    document.getElementById("result").innerHTML += "Rudy!";
  }

})();
