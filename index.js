// Hamburger Menu

let hamburgerIcon = document.querySelector('.hamburger-icon');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let mask = document.querySelector('.mask');
let closeIcon = document.querySelector('.close-icon');

hamburgerIcon.addEventListener('click',() => {
  toggleElementVisibility(hamburgerMenu);
  toggleElementVisibility(mask);
})

hamburgerIcon.addEventListener('focus',() => {
  toggleElementVisibility(hamburgerMenu);
  toggleElementVisibility(mask);
})

mask.addEventListener('click',() => {
  toggleElementVisibility(hamburgerMenu);
  toggleElementVisibility(mask);
})

closeIcon.addEventListener('click',() => {
  toggleElementVisibility(hamburgerMenu);
  toggleElementVisibility(mask);
})

// For tabbing and hitting enter key accessibility
closeIcon.addEventListener('keypress',(e) => {
  var key = e.which || e.keyCode;
    if (key === 13) {
      toggleElementVisibility(hamburgerMenu);
      toggleElementVisibility(mask);
    }

})

const toggleElementVisibility = (el) => {
  if (el.classList.contains('hidden')){
    el.classList.remove('hidden');
    el.style.opacity = 1;
    el.style.visibility ='visible';
  } else {
    el.classList.add('hidden');
    el.style.opacity = 0;
    el.style.visibility ='hidden';
  }
}

// Password Visibility
let visibilityIcon = document.querySelector('.password-toggle-icon');
let passwordInput = document.querySelector('input[name="password"]');

visibilityIcon.addEventListener('click',() => {
  togglePasswordVisibility();
})

const togglePasswordVisibility = () => {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
