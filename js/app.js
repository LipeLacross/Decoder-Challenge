const encryptionKeys = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
const decryptionKeys = Object.fromEntries(Object.entries(encryptionKeys).map(([key, value]) => [value, key]));

function encrypt(text) {
  return text.replace(/[eioua]/g, match => encryptionKeys[match]);
}

function decrypt(text) {
  return text.replace(/(enter|imes|ai|ober|ufat)/g, match => decryptionKeys[match]);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

document.getElementById('encrypt-btn').addEventListener('click', () => {
  const inputText = document.getElementById('input-text').value;
  const encryptedText = encrypt(inputText);
  document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
  const inputText = document.getElementById('input-text').value;
  const decryptedText = decrypt(inputText);
  document.getElementById('output-text').value = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', () => {
  const outputText = document.getElementById('output-text').value;
  copyToClipboard(outputText);
});
