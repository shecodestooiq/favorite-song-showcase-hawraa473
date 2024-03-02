function displaySongInfo() {
  let songName = document.getElementById("songName").value;
  let songLink = document.getElementById("Link").value;
  let Description = document.getElementById("description").value;
  let Year = document.getElementById("Year").value;
  //

  // convert normal link to emb
  function createYouTubeEmbedLink(link) {
    let links = String(link).replace("/watch?v=", "/embed/");
    console.log(link);
    return links;
  }
  let container = document.getElementById("songContainer");
  //
  document.getElementById("iframe").src = createYouTubeEmbedLink(songLink);
  container.innerHTML = `
  <h1>song name: ${songName}</h1>
  <h1>description: ${description}</h1>
  <h1>song year: ${Year}</h1>
  `;
}
