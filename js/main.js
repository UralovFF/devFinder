let mode = document.querySelector(".dark__mode"),
    modeText = document.querySelector(".mode__text"),
    text = document.querySelectorAll("p, a"),
    darkBgFirst = document.querySelectorAll("body, .account__status"),
    darkBgSecond = document.querySelectorAll(
    ".search__body, .main-form__body, .search__input > input"
  ),
    svg = document.querySelectorAll("path"),
    moonIcon = document.querySelector(".moon"),
    sunIcon = document.querySelector(".sun"),
    moonIconPath = document.querySelectorAll('#moon__icon'),
    sunIconPath = document.querySelectorAll('#sun__icon')

if (modeText.innerText == "Dark".toUpperCase()) {
  sunIcon.style.display = "none";
}

mode.addEventListener("click", () => {

  if (modeText.innerText == "Dark".toUpperCase()) {
    modeText.innerText = "Light";
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
  } else {
    modeText.innerText = "Dark";
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  }

  text.forEach((item) => {
    item.classList.toggle("light__text");
  });

  darkBgFirst.forEach((item) => {
    item.classList.toggle("dark__bg__first");
  });

  darkBgSecond.forEach((item) => {
    item.classList.toggle("dark__bg__second");
  });

  svg.forEach((item) => {
    item.classList.toggle("light__svg");
  });
});

mode.onmouseover = () => {
  if(modeText.innerText == 'Dark'.toUpperCase()){
    modeText.style.color = '#222731'
    moonIconPath.forEach(item => item.style.fill = '#222731')
  } else {
    modeText.style.color = '#90A4D4'
    sunIconPath.forEach(item => item.style.fill = '#90A4D4')
  }
};

mode.onmouseout = () => {
  if(modeText.innerText == 'Dark'.toUpperCase()){
    modeText.style.color = ''
    moonIconPath.forEach(item => item.style.fill = '')
  } else {
    modeText.style.color = ''
    sunIconPath.forEach(item => item.style.fill = '')
  }
};
