loaderGet('https://students.netoservices.ru/nestjs-backend/poll', requestHandler);
const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');
const buttonNext = document.querySelector('.button-next_active');

buttonNext.addEventListener('click', (e) => {
  loaderGet(
    'https://students.netoservices.ru/nestjs-backend/poll',
    requestHandler
  );
});

function requestHandler(response) {
  if (pollAnswers.firstChild != null) {
    while (pollAnswers.firstChild) {
      pollAnswers.removeChild(pollAnswers.firstChild);
    }

    if (response.data) {
      pollTitle.textContent = response.data.title;
      pollAnswers.dataset.id = response.id;
      for (let i = 0; i < response.data.answers.length; i += 1) {
        const button = document.createElement('button');
        button.textContent = response.data.answers[i];
        button.dataset.index = i;
        pollAnswers.appendChild(button);
      }
    } else if (response.stat) {
      for (let i = 0; i < response.stat.length; i += 1) {
        const div = document.createElement('div');
        div.innerText = `${response.stat[i].answer} : ${response.stat[i].votes}`;
        pollAnswers.appendChild(div);
      }
    }
  }
}

pollAnswers.addEventListener('click', (e) => {
  if (e.target.parentNode === pollAnswers) {
    alert('Спасибо, зачли!');
  }
  loaderPost(
    'https://students.netoservices.ru/nestjs-backend/poll',
    requestHandler,
    `vote=${e.currentTarget.dataset.id}&answer=${e.target.dataset.index}`
  );
});

function loaderGet(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  xhr.responseType = '';

  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      return callback(JSON.parse(xhr.response));
    }
  };
}

function loaderPost(url, callback, post) {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', url, true);

  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(post);
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      return callback(JSON.parse(xhr.response));
    }
  };
}