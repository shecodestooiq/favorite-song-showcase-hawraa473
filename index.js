
function displaySongInfo() {
    let songName = document.getElementById("songName").value;
    let songLink = document.getElementById("Link").value;
    let Description = document.getElementById("Description").value;
    let Year = document.getElementById("Year").value;
    //
    let displayArea = document.getElementById("displayArea");
  
    // convert normal link to emb
    function createYouTubeEmbedLink(link) {
      let links = String(link).replace("/watch?v=", "/embed/");
      console.log(link);
      return links;
    }
    //
    container.innerHTML = `
    <h1>song name: ${songName}</h1>
    <h1>description: ${Description}</h1>
    <h1>song year: ${Year}</h1>
    <iframe width="560" height="315" src="${createYouTubeEmbedLink(
      songLink
    )}" frameborder="0" allowfullscreen></iframe>
    `;
  }


 module.exports = {
     displaySongInfo: displaySongInfo,
 }; 