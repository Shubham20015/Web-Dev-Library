let checkbox = document.querySelector("input[name=theme]");
let switchText = document.querySelector(".mode p");

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

checkbox.addEventListener("change", function () {
  trans();
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    switchText.innerText = "Dark Mode";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    switchText.innerText = "Light Mode";
  }
});
