const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const results = document.getElementById('results');

function encrypt(text) {
  const substitutions = {
    '.': '1',
    ':': '2',
    ';': '3',
    '@': '4',
    '#': '%',
    ',': '5',
  };

  return Array.from(text, (character) => {
    if (character in substitutions) {
      return substitutions[character];
    }
    if (character >= 'A' && character <= 'Z') {
      return String.fromCharCode(((character.charCodeAt(0) - 65 + 1) % 26) + 65);
    }
    if (character >= 'a' && character <= 'z') {
      return String.fromCharCode(((character.charCodeAt(0) - 97 + 1) % 26) + 97);
    }
    return character;
  }).join('');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const original = passwordInput.value;
  document.getElementById('original').textContent = original;
  document.getElementById('encrypted').textContent = encrypt(original);
  results.hidden = false;
});
