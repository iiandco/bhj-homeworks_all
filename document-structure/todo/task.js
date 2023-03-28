const taskList = document.querySelector('#tasks__list');
const taskInput = document.querySelector('#task__input');
const button = document.querySelector('#tasks__add');
const taskRemove = document.querySelectorAll;

button.addEventListener('click', (e) => {
  enterTask(taskInput);
  memoryTask(taskList);
  e.preventDefault();
});

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    enterTask(taskInput);
    memoryTask(taskList);
  } else {
    return;
  }
  e.preventDefault();
});

taskList.addEventListener('click', (e) => {
  removeTask(e.target);
});

function enterTask(elem) {
  let task = elem.value.trim();
  if (task != '') {
    let conteinierTasks = document.createElement('div');
    conteinierTasks.classList.add('task');

    taskList.insertAdjacentElement('afterBegin', conteinierTasks);

    conteinierTasks.innerHTML = `<div class="task__title">
        ${task}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div> `;
  }
  elem.value = elem.defaultValue;
}

function removeTask(e) {
  if (e === e.parentNode.querySelector('.task__remove')) {
    e.parentNode.remove();
    memoryTask(taskList);
  }
}

function memoryTask(element) {
  let listTask = element.outerHTML;
  localStorage.setItem('listTask', listTask);
}

window.addEventListener('load', () => {
  if (localStorage.getItem('listTask') != undefined) {
    let memory = localStorage.getItem('listTask');
    taskList.innerHTML = memory;
  }
});