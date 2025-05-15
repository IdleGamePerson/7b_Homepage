function zeigeInfo(id) {
    const infoElement = document.getElementById("info-" + id);
    infoElement.classList.toggle("versteckt");
}

function spieleSpiel(url) {
    window.open(url, '_blank');
}
