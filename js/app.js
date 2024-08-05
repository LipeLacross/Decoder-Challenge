// Mapeamento das chaves de criptografia
const encryptionKeys = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

// Inverso das chaves de criptografia para descriptografia
const decryptionKeys = Object.fromEntries(
  Object.entries(encryptionKeys).map(([key, value]) => [value, key])
);

// Função para criptografar texto
function encrypt(text) {
  return text.replace(/[eioua]/g, match => encryptionKeys[match]);
}

// Função para descriptografar texto
function decrypt(text) {
  return text.replace(/(enter|imes|ai|ober|ufat)/g, match => decryptionKeys[match]);
}

// Função para copiar texto para a área de transferência
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
}

// Manipuladores de eventos para os botões
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
