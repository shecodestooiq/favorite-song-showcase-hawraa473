 function displaysonginfo(){
let fSong =document.getElementById("fromSong");
let sContainer =document.getElementById("songContainer");
let sgName=document.getElementById("songName").value ;
//console.log(sgName);
let ylink =document.getElementById("link").Value;
let yiframe =document.getElementById("iframe");
let Description =document.getElementById("Description").Value;
let syr =document.getElementById("year");
yiframe.src = ylink
sContainer.style.visibility = 'visible';
document.getElementById("sName").innerHTML = sgName;
document.getElementById("textSpace").innerHTML = Description;
document.getElementById("year").innerHTML = syr;
fSong.style.visibility = 'hidden'
}
document.getElementById("formSong").addEventListener("submit" , function(event){
    event.preventDefault();
    displaysonginfo();
});
    module.exports = {
        displaySongInfo: displaySongInfo,
    };