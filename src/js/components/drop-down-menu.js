// const dropDownMenu =() =>{
//   document.querySelectorAll('.drop-down__elem').forEach(dropDownFunc);
//   function dropDownFunc(dropDown) {
//     dropDown.addEventListener('click', function (e) {
//       e.preventDefault();
//       if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
//         this.parentElement.classList.remove('dropdown-open');
//         this.nextElementSibling.classList.remove('dropdown-active');
//       } else {
//         closeDropdown();
//         this.parentElement.classList.add('dropdown-open');
//         this.nextElementSibling.classList.add('dropdown-active');
//       }
//     });
//   }

//   function closeDropdown() {
//     document.querySelectorAll('.drop-down').forEach(function (container) {
//       container.classList.remove('dropdown-open');
//     });

//     document.querySelectorAll('.drop-down__container').forEach(function (menu) {
//       menu.classList.remove('dropdown-active');
//     });
//   }

//   window.addEventListener('click', function (e) {
//     if (!e.target.closest('.drop-down')) {
//       closeDropdown();
//     }
//   });
// };

const dropDownMenu =() =>{
  document.querySelectorAll('.drop-down').forEach(dropDownFunc);
  function dropDownFunc(dropDown) {
    dropDown.addEventListener('click', function (e) {
      const dropDownElem = dropDown.querySelector('.drop-down__elem');
      const dropDownList = dropDown.querySelector('.drop-down__container');
      if (dropDownList.classList.contains('dropdown-active') === true) {
        dropDown.classList.remove('dropdown-open');
        dropDownList.classList.remove('dropdown-active');
      } else {
        closeDropdown();
        dropDown.classList.add('dropdown-open');
        dropDownList.classList.add('dropdown-active');
      }
    });
  }

  function closeDropdown() {
    document.querySelectorAll('.drop-down').forEach(function (container) {
      container.classList.remove('dropdown-open');
    });

    document.querySelectorAll('.drop-down__container').forEach(function (menu) {
      menu.classList.remove('dropdown-active');
    });
  }

  window.addEventListener('click', function (e) {
    if (!e.target.closest('.drop-down')) {
      closeDropdown();
    }
  });
};

export {dropDownMenu};
