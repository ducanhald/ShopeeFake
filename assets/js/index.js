const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const btnLogin = $('.btn--login')
const btnRegister = $('.btn--register')
const modal = $('.modal')
const modalLogin = $('.modal--login')
const modalRegister = $('.modal--register')
const authSwitchBtn = $('.auth-form__switch-btn')
const authBackLogin = $('.auth-form__controls-back--login')
const authBackRegister = $('.auth-form__controls-back--register')


function showModal(e) {
    e.classList.add('active')
}

function hideModal(e) {
    e.classList.remove('active')
}
btnLogin.onclick = () => {
    showModal(modal)
    showModal(modalLogin)

}
btnRegister.onclick = () => {
    showModal(modal)
    showModal(modalRegister)

}
authBackRegister.onclick = () => {
    hideModal(modal)
    hideModal(modalRegister)
}
authBackLogin.onclick = () => {
    hideModal(modal)
    hideModal(modalLogin)
}