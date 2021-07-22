const openPopup = document.querySelector('.rules__btn');
const closePopup = document.querySelector('.pop-up__close');

const body = document.querySelector('body');

const popup = document.querySelector('.popup__wrapper');

openPopup.addEventListener('click', () => {
    popup.style.visibility = 'visible';
});

closePopup.addEventListener('click', () => {
    popup.style.visibility = 'hidden';
})
