/*
    Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>.
    При пропажі фокусу - <div> так само пропадає.
 */

const input = document.querySelector('#text');
const div = document.querySelector('#ghost');

input.addEventListener('focus', () => {
    div.classList.remove('hide');
});

input.addEventListener('blur', () => {
    div.classList.add('hide');
});