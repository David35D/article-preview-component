let shareButton = document.querySelector('.card-body__bottom');
let socialsBox = document.querySelector('.card-socials');

let open = false;

function share() {
  open = !open;
  if (open) {
    shareButton.classList.remove("off");
    shareButton.classList.add("open");
    socialsBox.classList.add('card-socials__fade-in');
    socialsBox.classList.remove('card-socials__fade-out');
  } else {
    socialsBox.classList.remove('card-socials__fade-in');
    socialsBox.classList.add('card-socials__fade-out');
    setTimeout(function() {
      shareButton.classList.add("off");
      shareButton.classList.remove("open");
    }, 210);
  }
}
