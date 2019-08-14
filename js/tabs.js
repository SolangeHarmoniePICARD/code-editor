function openFolder(evt, folderName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(folderName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Close London
document.getElementById("closeLondon").addEventListener("click", closeLondon);
function closeLondon() {
  var london = document.getElementById("London") ;
  london.innerHTML = "";
  london.style.backgroundColor = "#21252B";
}

// Close Paris
document.getElementById("closeParis").addEventListener("click", closeParis);
function closeParis() {
  var paris = document.getElementById("Paris") ;
  paris.innerHTML = "";
  paris.style.backgroundColor = "#21252B";
  paris.style.height = "100%";
}

// Close Tokyo
document.getElementById("closeTokyo").addEventListener("click", closeTokyo);
function closeTokyo() {
  var tokyo = document.getElementById("Tokyo") ;
  tokyo.innerHTML = "";
  tokyo.style.backgroundColor = "#21252B";
}
