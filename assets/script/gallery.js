function myFunction() {
  var x = document.getElementById("navigation");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// JavaScript for modal functionality
const images = document.querySelectorAll('.myImg');
const modals = document.querySelectorAll('.modal');

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    modals[index].style.display = 'block';
  });

  const closeModal = modals[index].querySelector('.close');
  closeModal.addEventListener('click', () => {
    modals[index].style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modals[index]) {
      modals[index].style.display = 'none';
    }
  });
});