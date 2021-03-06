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
const itemSelect = $$('.header__search-option-items')
const categoryItems = $$('.category-items')
const likeItem = $('.home-product-item__like')




for (i of itemSelect) {
    i.onclick = (e) => {
        e.currentTarget.classList.toggle('header__search-option-items--active')
    }
}

for (i of categoryItems) {
    i.onclick = (e) => {
        e.currentTarget.classList.toggle('category-items--active')
    }
}

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


// Like action
likeItem.onclick = () => {
    likeItem.classList.toggle('home-product-item__liked')
}