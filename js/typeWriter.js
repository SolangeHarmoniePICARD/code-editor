var i = 0;
var j = 0;
var k = 0;
var txtName = '1  <h1 id="name"> Solange Harmonie PICARD </h1>';
var txtEmployment = '2  <h2 id="employment"> Développeuse web </h2>';
var txtObjectives = "3  <p id=\"objectives\"> Je suis développeuse d'application web et web mobile. Après une première formation en développement web et quelques mois d'activités professionnelles en freelance dans ce secteur, j'ai opéré en tant que médiatrice numérique un Centre de Ressources en Robotique à Nevers. Je compte à présent reprendre une formations en développement web afin de préparer ma ré-insertion professionnelle : mon objectif est de trouver un emploi salarié dans une agence web ou chez un éditeur de logiciels.</p>";
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeName() {
  if (i < txtName.length) {
    document.getElementById("name").innerHTML += txtName.charAt(i);
    i++;
    setTimeout(typeName, speed);
  }else{
    function typeEmployment() {
      if(j < txtEmployment.length){
        document.getElementById("employment").innerHTML += txtEmployment.charAt(j);
        j++;
        setTimeout(typeEmployment, speed);
      } else{
        function typeObjectives() {
          if(k < txtObjectives.length){
            document.getElementById("objectives").innerHTML += txtObjectives.charAt(k);
            k++;
            setTimeout(typeObjectives, speed);
          }
        }
        typeObjectives();
      }
    }
    typeEmployment();
  }
}

function typeWriter() {
  if (i < txtName.length) {
     typeName();
  }
}
