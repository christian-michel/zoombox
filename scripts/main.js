const ecranSombre = document.createElement("div");
const photo = document.createElement("div");
const fermer = document.createElement("div");
const img = document.createElement("img"); 

// image miniature
const imageMiniature = document.querySelector("#zoombox"); 
// imageMiniature.style.cursor = "pointer"; 
// imageMiniature.addEventListener("click", function(){ ouvrirZoombox(); }); 

// zoombox avec l'image en grand
function ouvrirZoombox(photoBig){
    ecranSombre.classList.add("zoombox");
    document.body.appendChild(ecranSombre);
    ecranSombre.animate([{opacity: 0}, {opacity: 1}], 20);

    photo.classList.add("photo");
    ecranSombre.appendChild(photo);
    photo.animate([{opacity: 0}, {opacity: 1}], 350);

    fermer.classList.add("fermer");
    fermer.textContent = "X";
    fermer.style.cursor = "pointer"; 
    photo.appendChild(fermer);
    fermer.addEventListener("click", function(){ fermerZoombox(); });

    img.classList.add("img");
    img.setAttribute("id","zoombox"); 
    img.src = "img/"+ photoBig +"";
    photo.appendChild(img); 
}

// animation d'ouverture et de fermeture 
function fermerZoombox(){
    ecranSombre.animate([{opacity: 1}, {opacity: 0}], 250);
    photo.animate([{opacity: 1}, {opacity: 0}], 20);
    ecranSombre.parentNode.removeChild(ecranSombre);
};