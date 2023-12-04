'use strict';

function convertToLinks() {
  const inputText = document.getElementById('inputText').value;
  const outputLinks = document.getElementById('outputLinks');

  const lines = inputText.split('\n');
  const savedLinks = [];

  outputLinks.innerHTML = '';

  lines.forEach(function (line, index) {
    const trimmedLine = line.trim();
    if (trimmedLine !== '') {
      const linkElement = document.createElement('a');
      linkElement.href = trimmedLine;
      linkElement.textContent = `LINK H&M №: ${index + 1}`;
      outputLinks.appendChild(linkElement);

      const lineBreak = document.createElement('br');
      outputLinks.appendChild(lineBreak);

      savedLinks.push(trimmedLine);
    }
  });

  localStorage.setItem('savedLinks', JSON.stringify(savedLinks));
}

function deleteAllLinks() {
  const inputText = document.getElementById('inputText');
  const outputLinks = document.getElementById('outputLinks');
  inputText.value = '';
  outputLinks.remove();

  localStorage.removeItem('savedLinks');
}

window.addEventListener('load', function () {
  const savedLinks = JSON.parse(localStorage.getItem('savedLinks'));
  if (savedLinks && savedLinks.length > 0) {
    const inputText = document.getElementById('inputText');
    inputText.value = savedLinks.join('\n');
    convertToLinks();
  }
});
