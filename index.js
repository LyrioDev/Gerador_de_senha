let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@-_.*";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let pass = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;

  // Reseta a mensagem do tooltip para o formato padrão
  resetTooltip();
}

function copyPassword() {
  navigator.clipboard.writeText(novaSenha);
}

function changeTooltip() {
  let tooltip = document.querySelector("#tooltip");
  tooltip.innerHTML = "Copiado para a área transferência";
}

function resetTooltip() {
  let tooltip = document.querySelector("#tooltip");
  tooltip.innerHTML = "Clique na senha para copiar";
}

buttonElement.addEventListener("Click", generatePassword);
password.addEventListener("Click", copyPassword);

passwordContainer.addEventListener("mouseenter", focusPassword);
passwordContainer.addEventListener("mouseleave", blurPassword);

function focusPassword() {
  password.classList.add("focused");
  tooltip.style.opacity = "1";
}

function blurPassword() {
  password.classList.remove("focused");
  tooltip.style.opacity = "0";
}
