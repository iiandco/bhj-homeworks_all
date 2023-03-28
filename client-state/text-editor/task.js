const textArea = document.querySelector('#editor');
const savedText = localStorage.getItem('text');

const updateStorage = () => {
  textArea.addEventListener('input', () => {
    localStorage.setItem('text', textArea.value);
  });
};

if (savedText) {
  textArea.value = savedText;
  updateStorage();
} else {
  updateStorage();
}