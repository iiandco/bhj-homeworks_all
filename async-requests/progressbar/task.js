const progressBar = document.querySelector('#progress');
const button = document.querySelector('#send');
const file = document.querySelector('#file');

button.addEventListener('click', (e) => {
  e.preventDefault();
  for (let i = 0; i < file.files.length; i += 1) {
    upload(
      file.files[i],
      'https://students.netoservices.ru/nestjs-backend/upload'
    );
  }
});

function upload(file, url) {
  let xhr = new XMLHttpRequest();

  xhr.upload.onprogress = (e) => (progressBar.value = e.loaded / e.total);
  xhr.upload.onload = () => alert('Загрузка успешно завершена');

  xhr.open('POST', url, true);
  xhr.send(file);
}