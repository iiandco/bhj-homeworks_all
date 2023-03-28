const productQuantity = Array.from(
    document.querySelectorAll('.product__quantity')
  );
  const cartProducts = document.querySelector('.cart__products');
  const cartTitle = document.querySelector('.cart__title');
  
  for (let elem of productQuantity) {
    elem.addEventListener('click', (e) => {
      couterProduct(e);
      addBasket(e);
    });
  }
  
  function couterProduct(element) {
    const buttonProductAdd = element.currentTarget.querySelector(
      '.product__quantity-control_inc'
    );
    const buttonProductDelete = element.currentTarget.querySelector(
      '.product__quantity-control_dec'
    );
    const counterProduct = element.currentTarget.querySelector(
      '.product__quantity-value'
    );
  
    const productAdd = element.currentTarget.querySelector('.product__add');
  
    if (element.target === buttonProductDelete) {
      counterProduct.innerText = Number(counterProduct.innerText) - 1;
      Number(counterProduct.innerText) < 1 ? (counterProduct.innerText = 1) : counterProduct.innerText;
    } else if (element.target === buttonProductAdd) {
      counterProduct.innerText = Number(counterProduct.innerText) + 1;
    }
  
    if (
      cartProducts.dataset.products === 'true' &&
      element.target === productAdd
    ) {
      const cartProduct = Array.from(document.querySelectorAll('.cart__product'));
      for (let elem of cartProduct) {
        if (
          elem.dataset.id === element.currentTarget.closest('.product').dataset.id
        ) {
          elem.querySelector('.cart__product-count').innerText =
            Number(elem.querySelector('.cart__product-count').innerText) +
            Number(counterProduct.innerText);
        }
      }
    }
  }
  
  function addBasket(element) {
    if (element.target === element.currentTarget.querySelector('.product__add')) {
      if (cartProducts.dataset.products === 'true') {
        const cartProduct = Array.from(
          document.querySelectorAll('.cart__product')
        );
  
        for (let elem of cartProduct) {
          if (
            elem.dataset.id ===
            element.currentTarget.closest('.product').dataset.id
          ) {
            animation(
              element.currentTarget.closest('.product').querySelector('img'),
              elem.querySelector('img'),
              elem.querySelector('.cart__product-count')
            );
            return;
          }
        }
      }
  
      const cartProduct = document.createElement('div');
      const product = element.currentTarget.closest('.product');
      const srcImage = product.querySelector('img').src;
      const img = document.createElement('img');
      const counter = document.createElement('div');
  
      cartProducts.appendChild(cartProduct);
      cartProduct.classList.add('cart__product');
      cartProduct.dataset.id = product.dataset.id;
      cartProduct.appendChild(img);
      img.classList.add('cart__product-image');
      img.src = srcImage;
  
      counter.classList.add('cart__product-count');
      cartProduct.appendChild(counter);
  
      counter.innerHTML = element.currentTarget.querySelector(
        '.product__quantity-value'
      ).innerHTML;
  
      animation(product.querySelector('img'), img, cartProduct);
    }
  
    cartProducts.dataset.products = true;
  }
  
  function animation(elementTo, elementFrom, elementParent) {
    elementParent.style.opacity = 0;
  
    let distanceYTo = elementTo.getBoundingClientRect().y;
    let distanceXTo = elementTo.getBoundingClientRect().x;
  
    let distanceYFrom = elementFrom.getBoundingClientRect().y;
    let distanceXFrom = elementFrom.getBoundingClientRect().x;
  
    let referenceY = Math.abs(distanceYFrom - distanceYTo);
    let referenceX = Math.abs(distanceXFrom - distanceXTo);
  
    let divAnimation = document.createElement('div');
  
    document.querySelector('body').appendChild(divAnimation);
    divAnimation.appendChild(elementTo.cloneNode(true));
  
    divAnimation.style.position = 'absolute';
  
    divAnimation.style.top = distanceYTo + window.scrollY + 'px';
    divAnimation.style.left = distanceXTo + window.scrollX + 'px';
  
    let showTime = 20 / window.devicePixelRatio;
  
    let stepY = referenceY / showTime;
    let stepX = referenceX / showTime;
  
    let interval = setInterval(() => {
      if (
        Math.abs(divAnimation.getBoundingClientRect().x + stepX) >=
        Math.abs(distanceXFrom)
      ) {
        clearInterval(interval);
        divAnimation.remove();
        elementParent.style.opacity = 100;
        saveBasket(cartProducts);
        return;
      } else if (
        Math.abs(divAnimation.getBoundingClientRect().y) + stepY <=
        Math.abs(distanceYFrom)
      ) {
        divAnimation.remove();
        clearInterval(interval);
        elementParent.style.opacity = 100;
        saveBasket(cartProducts);
        return;
      } else {
        divAnimation.style.left =
          Number(divAnimation.style.left.replace('px', '')) + stepX + 'px';
        divAnimation.style.top =
          Number(divAnimation.style.top.replace('px', '')) - stepY + 'px';
      }
    }, showTime);
  }
  
  function saveBasket(elem) {
    let history = elem.innerHTML;
    localStorage.setItem('historyBasket', history);
  }
  
  function basket(elem) {
    let history = localStorage.getItem('historyBasket');
    elem.innerHTML = history;
    if (cartProducts.childNodes != null) {
      cartProducts.dataset.products = true;
    }
  }
  window.addEventListener('load', () => basket(cartProducts));