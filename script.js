const activeLightMode = document.querySelector('.lightMode')
const activeDarkMode = document.querySelector('.darkMode')

function viewLightMode() {
  activeLightMode.classList.remove('none')
}

function lightMode() {
  document.body.style.setProperty('--headerForm-fc', '#2E2312');
  document.body.style.setProperty('--headerForm-subtitle', '#574C3A');
  document.body.style.setProperty('--headerForm-subtitle', '#574C3A');

  document.body.style.setProperty('--label-fc', '#574C3A');

  document.body.style.setProperty('--checkbox-fc', '#574C3A');
  document.body.style.setProperty('--a-fc', '#574C3A');
  document.body.style.setProperty('--button-fc', '#FFFFFF');

  document.body.style.setProperty('--bg-button', '#574C3A');
  document.body.style.setProperty('--bg-form', '#F1EADD');
  document.body.style.setProperty('--bg-page', '#E4DBCD');

}

function darkMode() {
  document.body.style.setProperty('--headerForm-fc', 'hsla(44, 26%, 77%, 1)');
  document.body.style.setProperty('--headerForm-subtitle', 'hsla(218, 14%, 72%, 1)');

  document.body.style.setProperty('--label-fc', 'hsla(218, 13%, 72%, 1)');

  document.body.style.setProperty('--checkbox-fc', 'hsla(218, 10%, 69%, 1)');
  document.body.style.setProperty('--a-fc', 'hsla(43, 100%, 60%, 1)');
  document.body.style.setProperty('--button-fc', 'hsla(43, 90%, 15%, 1)');

  document.body.style.setProperty('--bg-button', 'hsla(43, 100%, 60%, 1)');
  document.body.style.setProperty('--bg-form', 'hsla(40, 7%, 13%, 1)');
  document.body.style.setProperty('--bg-page', 'hsla(40, 6%, 9%, 1)');
}


activeLightMode.addEventListener('click',() => {
  lightMode()
  activeLightMode.classList.add('none')
  activeDarkMode.classList.remove('none')
})


activeDarkMode.addEventListener('click', () => {
  darkMode()
  activeLightMode.classList.remove('none')
  activeDarkMode.classList.add('none')
})