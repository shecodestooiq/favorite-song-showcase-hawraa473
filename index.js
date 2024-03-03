 function displaysonginfo(){
let fromSong =document.getElementById("fromSong");
let songContainer =document.getElementById("songContainer");
let songName=document.getElementById("songName").Value;
let link =document.getElementById("link").Value;
let iframe =document.getElementById("iframe");
let Description =document.getElementById("Description").Value;
let year =document.getElementById("year");
iframe.src = link
displaysonginfo.style.visibility = "visible";
document.getElementById(songName).innerHTML = songName;
document.getElementById(textSpace).innerHTML = Description;
document.getElementById(year).innerHTML = year;
fromSong.style.visibility = "hidden"
}
document.getElementById("song").addEventListener("submit" , function(event){
    event.preventDefault();
    displaysonginfo();
})
    module.exports = {
        displaySongInfo: displaySongInfo,
    };