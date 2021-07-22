let showTextBtn = document.querySelectorAll(".right-icon");

function toggler(obj) {
  let showTextInput = obj.previousElementSibling;
  if (showTextInput.type === "password") {
    obj.classList.replace("fa-eye-slash", "fa-eye");
    showTextInput.type = "text";
  } else {
    obj.classList.replace("fa-eye", "fa-eye-slash");
    showTextInput.type = "password";
  }
}

showTextBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    toggler(e.target);
  });
});

let rangeSlider = document.querySelectorAll("#rs-range-line");

rangeSlider.forEach((slider) => {
  slider.addEventListener("input", (e) => showSliderValue(e.target), false);

  function showSliderValue(obj) {
    let rangeBullet = obj.previousElementSibling;
    rangeBullet.innerHTML = slider.value;
    var bulletPosition = slider.value / slider.max;
    if (screen.width <= 376) {
      rangeBullet.style.left = bulletPosition * 237 + "px";
    } else {
      rangeBullet.style.left = bulletPosition * 487 + "px";
    }
  }
});

let currentTab = 0; // Current tab is set to be the first tab
showTab(currentTab); // Display the current tab

function showTab(n) {
  const x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}

function nextPrev(n) {
  const x = document.getElementsByClassName("tab");
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("main-form").submit();
    return false;
  }
  showTab(currentTab);
}
