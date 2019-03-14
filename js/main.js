var myTBody = document.getElementById("tbody");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    //On récuperer l'attribut user de l'objet récuperer en JSON.
    clients = (JSON.parse(this.responseText)).user;
    //On boucle sur le tableau d'objet stocké dans clients.
    for (let i = 0; i < clients.length; i++) {
      var myTr = document.createElement('tr');
      //On ajoute la cellule a la ligne correspondante
      myTBody.appendChild(myTr);
      //On boucle sur l'objet client actuel grace à [i].
      for (var infos in clients[i]) {
        //On crée une cellule pour chaque attribut
        var myTd = document.createElement('td');
        //On ajoute la valeur de l'attribut dans la cellule
        myTd.innerHTML = clients[i][infos];
        //On ajoute la cellule a la ligne correspondante
        myTr.appendChild(myTd);
      }
    }
  } 
};
xhttp.open("GET", "clients.json", true);
xhttp.send(); 



