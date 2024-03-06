function displaySongInfo(){
    let formDisplay = document.getElementById("song");
    let display = document.getElementById('info');
    let Sname = document.getElementById("songName").value;
    let link = document.getElementById('youtubeLink').value;
    let iframe = document.getElementById("youtube");
    let Dicription = document.getElementById(dicription).value;
    let yr = document.getElementById(year).value;
    iframe.src = link
    display.style.visibility = 'visible';
    document.getElementById("sname").innerHTML = Sname;
    document.getElementById("dis").innerHTML = Dicription;
    document.getElementById("songyear").innerHTML = yr;
    formDisplaylay.style.visibility = 'hidden'
}
document.getElementById("song").addEventListener("submit" , function(event){
    event.preventDefault();
    displaySongInfo();
})
     module.exports = {
        displaySongInfo: displaySongInfo,
     };