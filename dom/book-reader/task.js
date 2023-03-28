const book = document.getElementById('book');
const fontSizes = document.getElementsByClassName('font-size');
const textColors = document.querySelector('.book__control_color').getElementsByClassName('color');
const backgroundColors = document.querySelector('.book__control_background').getElementsByClassName('color');

for (const size of fontSizes) 
size.addEventListener('click', function(event) {
    event.preventDefault();

    const oldSize = this.parentElement.querySelector('.font-size_active');
   
    if (this === oldSize) {
      return;
    }

    oldSize.classList.remove('font-size_active');
    this.classList.add('font-size_active');    
    book.classList.remove('book_fs-' + oldSize.dataset.size);
    book.classList.add('book_fs-' + this.dataset.size);
});
  
for (const color of textColors) 
color.addEventListener('click', function(event) {
    event.preventDefault();

    const oldColor = this.parentElement.querySelector('.color_active');

    if (this === oldColor) {
      return;
    }

    oldColor.classList.remove('color_active');
    this.classList.add('color_active');    
    book.classList.remove('book_color-' + oldColor.dataset.color);
    book.classList.add('book_color-' + this.dataset.color);
});

for (const color of backgroundColors) 
color.addEventListener('click', function(event) {
    event.preventDefault();

    const oldColor = this.parentElement.querySelector('.color_active');

    if (this === oldColor) {
      return;
    }
    
    oldColor.classList.remove('color_active');
    this.classList.add('color_active');     
    book.classList.remove('book_bg-' + oldColor.dataset.color);
    book.classList.add('book_bg-' + this.dataset.color);
});