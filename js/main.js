const modal = document.querySelector('.modal')
const LoginBtn = document.querySelector('.login-btn')
const CloseBtn = document.querySelector('.close')

LoginBtn.addEventListener('click', openModal)
CloseBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
    modal.style.display = 'block'
}
function closeModal() {
modal.style.display = 'none'
}
function outsideClick(e) {
    if (e.target == modal) {
        closeModal()
    }
}