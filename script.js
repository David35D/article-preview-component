let shareButton = document.querySelector('.card-body__bottom');

let open = false;

function share() {
  open = !open;
  if (open) {
    shareButton.classList.remove("off");
    shareButton.classList.add("open");
  } else {
    shareButton.classList.add("off");
    shareButton.classList.remove("open");
  }
}
