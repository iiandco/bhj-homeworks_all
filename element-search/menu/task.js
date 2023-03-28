const links = Array.from(document.querySelectorAll('.menu__link'));

for (let link of links) {
	link.onclick = function() {
		const parent = link.parentElement;
		const menu_sub = this.parentElement.querySelector('.menu_sub');

		if (!menu_sub) {
			return true;
		}

		if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
			parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
		} else {
			parent.querySelector('.menu_sub').className = 'menu menu_sub';
		}

		if (link.closest('.menu_main')) {
			return false;
		}
	}
}

// const menu_link = document.getElementsByClassName('menu__link');

// for (let i = 0; i < menu_link.length; i++)
//   menu_link[i].onclick = function() {
    
//     const menu_main = this.closest('ul');
//     const menu_sub = this.parentElement.querySelector('.menu_sub');
    
//     if (menu_main.className === 'menu menu_main') {
//       const menu_active = menu_main.querySelector('.menu_active');
//       if (menu_active && (menu_active !== menu_sub)) 
//         menu_active.className = 'menu menu_sub';
//     }

//     if (!menu_sub) 
//       return true;
    
//     if (menu_sub.className === 'menu menu_sub') 
//       menu_sub.className = 'menu menu_sub menu_active';
//     else
//       menu_sub.className = 'menu menu_sub';   
//     return false;
       
//   }