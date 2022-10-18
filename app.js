const buttonTextShow = document.querySelector('#myBtn');
const spoilerText = document.querySelector('#spoiler');


buttonTextShow.addEventListener('click', () => spoilerText.classList != 0 ? spoilerText.classList.remove('closed') : spoilerText.classList.add('closed'));

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        spoilerText.classList.add('closed');
      }
});
