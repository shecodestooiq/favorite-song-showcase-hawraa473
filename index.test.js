// // // Import your JavaScript file
// const { TextEncoder, TextDecoder } = require('util');
// global.TextEncoder = TextEncoder;
// global.TextDecoder = TextDecoder;

// // Import necessary modules
// const fs = require('fs');
// const { JSDOM } = require('jsdom');

// // Function to load HTML file and return DOM
// function loadHtmlFile(filePath) {
//     const html = fs.readFileSync(filePath, 'utf-8');
//     return new JSDOM(html).window.document;
// }

// // Test case
// test('Check if input and label are available', () => {
//     // Load the HTML file
//     const document = loadHtmlFile('index.html'); // Replace 'your_html_file.html' with the path to your HTML file

//     // Check if input element exists
//     const inputElement = document.querySelector('input');
//     expect(inputElement).toBeTruthy(); // Assert that input element exists

//     const inputElements = document.querySelectorAll('input');
//     expect(inputElements.length).toBeGreaterThanOrEqual(3);

//     const isRequired = inputElement.hasAttribute('required');
//     expect(isRequired).toBe(true);

//     // Check if label element exists
//     const labelElement = document.querySelector('label');
//     expect(labelElement).toBeTruthy(); // Assert that label element exists

//     const labelElements = document.querySelectorAll('label');
//     expect(labelElements.length).toBeGreaterThanOrEqual(3);

//     // Check if label is associated with input using 'for' attribute
//     const labelForAttribute = labelElement.getAttribute('for');
//     const inputId = inputElement.getAttribute('id');
//     expect(labelForAttribute).toBe(inputId); // Assert that label is associated with input

//     const iframeElement = document.querySelector('iframe');
//     expect(iframeElement).toBeTruthy(); // Assert that label element exists

// }); 

function displaySongInfo() {
    let songName = document.getElementById("songName").value;
    let songLink = document.getElementById("Link").value;
    let Description = document.getElementById("Description").value;
    let Year = document.getElementById("Year").value;
    //
    let container = document.getElementById("songContainer");
  
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
    <iframe id="iframe" width="560" height="315" src="${createYouTubeEmbedLink(
      songLink
    )}" frameborder="0" allowfullscreen></iframe>
    `;
  }