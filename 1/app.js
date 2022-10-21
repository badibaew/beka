const email = document.querySelector(".email");
const form = document.querySelector(".form");

form.addEventListener("submit", (i) => {
  i.preventDefault();
  FormInput();
});

function FormInput() {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    errorFor(email, "Entered incorrectly!");
  } else if (!formEmail(emailValue)) {
    errorFor(email, "Entered incorrectly!");
  } else {
    succesFor(email, alert("Successfully registered!"));
  }
}

function errorFor(input, message) {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = message;
  formControl.className = "item error";
}
function succesFor(input) {
  const formControl = input.parentElement;
  formControl.className = "item success";
}

function formEmail(email) {
  return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(
    email
  );
}
