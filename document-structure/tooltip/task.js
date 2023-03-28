const tooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const body = document.querySelector('body');

tooltip.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    if (document.querySelector('.tooltip') === null) {
      addTooltip(e);
      e.preventDefault();
      return;
    } else if (document.querySelector('.tooltip') != null) {
      if (e.currentTarget.nextSibling != document.querySelector('.tooltip')) {
        document.querySelector('.tooltip').remove();
        addTooltip(e);
        e.preventDefault();
      } else if (
        Array.from(e.currentTarget.nextSibling.classList).includes(
          'tooltip_active'
        )
      ) {
        e.currentTarget.nextSibling.remove();
        e.preventDefault();
      }
    }
  });
});

window.addEventListener('scroll', () => {
  if (document.querySelector('.tooltip_active') != null) {
    coordinatTooltip(document.querySelector('.tooltip_active'));
  }
});

window.addEventListener('resize', () => {
  if (document.querySelector('.tooltip_active') != null) {
    coordinatTooltip(document.querySelector('.tooltip_active'));
  }
});

function addTooltip(element) {
  let textElement = document.createElement('div');

  textElement.innerText = element.currentTarget.title;

  textElement.classList.add('tooltip');
  textElement.dataset.position = 'bottom';

  element.currentTarget.insertAdjacentElement('afterEnd', textElement);
  textElement.classList.add('tooltip_active');

  coordinatTooltip(document.querySelector('.tooltip_active'));
}

function coordinatTooltip(toolTipElement) {
    let hasTooltip = toolTipElement.previousElementSibling;
    let windowWidt = document.documentElement.clientWidth;
    let windowHeight = document.documentElement.clientHeight;
    let coordinatX = hasTooltip.getBoundingClientRect().left;
    let coordinatY = hasTooltip.getBoundingClientRect().top;
    let coordinatRight = hasTooltip.getBoundingClientRect().right;
    let coordinatHeight = hasTooltip.getBoundingClientRect().height;
    let coordinatWIdth = hasTooltip.getBoundingClientRect().width;
    let widthtoolTipElement = toolTipElement.getBoundingClientRect().width;
    let heighttoolTipElement = toolTipElement.getBoundingClientRect().height;
  
    if (toolTipElement.dataset.position === 'top') {
      if (coordinatY <= heighttoolTipElement) {
        toolTipElement.style.left = coordinatX + 'px';
        toolTipElement.style.top = coordinatY + coordinatHeight + 'px';
      } else {
        toolTipElement.style.left = coordinatX + 'px';
        toolTipElement.style.top = coordinatY - heighttoolTipElement + 'px';
      }
    } else if (toolTipElement.dataset.position === 'bottom') {
      if (windowHeight - coordinatY <= heighttoolTipElement) {
        toolTipElement.style.left = coordinatX + 'px';
        toolTipElement.style.top = coordinatY - heighttoolTipElement + 'px';
      } else {
        toolTipElement.style.left = coordinatX + 'px';
        toolTipElement.style.top = coordinatHeight + coordinatY + 'px';
      }
    } else if (toolTipElement.dataset.position === 'right') {
      if (windowWidt - coordinatRight <= widthtoolTipElement) {
        toolTipElement.style.left = coordinatX + 'px';
        toolTipElement.style.top = coordinatY + coordinatHeight + 'px';
      } else {
        toolTipElement.style.left = coordinatX + coordinatWIdth + 'px';
        toolTipElement.style.top = coordinatY + 'px';
      }
    } else if (toolTipElement.dataset.position === 'left') {
      if (coordinatX < widthtoolTipElement) {
        toolTipElement.style.left = coordinatX + 'px';
        toolTipElement.style.top = coordinatY + coordinatHeight + 'px';
      } else {
        toolTipElement.style.left = coordinatX - widthtoolTipElement + 'px';
        toolTipElement.style.top = coordinatY + 'px';
      }
    }
  }