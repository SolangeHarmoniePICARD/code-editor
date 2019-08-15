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

// Close Index Page
document.getElementById("closeIndex").addEventListener("click", closeIndex);
function closeIndex() {
  var index = document.getElementById("indexPage") ;
  index.innerHTML = "";
  index.style.backgroundColor = "#21252B";
}

// Close Style Page
document.getElementById("closeStyle").addEventListener("click", closeStyle);
function closeStyle() {
  var style = document.getElementById("stylePage") ;
  style.innerHTML = "";
  style.style.backgroundColor = "#21252B";
}

// Close Script Page
document.getElementById("closeScript").addEventListener("click", closeScript);
function closeScript() {
  var script = document.getElementById("scriptPage") ;
  script.innerHTML = "";
  script.style.backgroundColor = "#21252B";
}
