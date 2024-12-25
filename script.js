function afficherPopup() {
    var textarea = document.getElementById('message');
    var texte = textarea.value;

    var modal = document.getElementById('myModal');
    var modalText = document.getElementById('modal-text');

    const newTab = melangerTab(texte)
    if(newTab === 0){
        modalText.innerHTML += `<div><p><span class="">veuillez introduire votre liste de noms en respectant les consignes</span></p></div>`;
    }
    for(let i=0; i<newTab.length; i++){
        modalText.innerHTML += `<div><p><span class="modal-num">${i+1}.</span> <span class="names">${newTab[i].emeteur}</span> doit offrir a <span class="names">${newTab[i].destinataire}</span></p></div>`;
    }
    // modalText.innerText = texte;
    modal.style.display = "block";
    
}

function fermerPopup() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
   
    location.reload();

}
window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
        location.reload();
    }
    
}

function melangerTab(listStr) {
    let array = listStr. split(",")
    if(array.length<2){
        return 0
    }
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange les éléments
    }
    let arr2 = []
        for(let i=0, k=i+1; k<array.length; i++, k=i+1){
            arr2.push({emeteur:array[i], destinataire:array[k]})
            if(k===array.length-1){
                arr2.push({emeteur:array[k], destinataire:array[0]})
            }
        }
    return arr2;
}


