const modalButton = document.querySelector('.more')
const modal = document.querySelector('.modal')
const overlay = modal.querySelector('.overlay')
const closeButton = modal.querySelector('.modal__close')

modalButton.addEventListener('click', ()=> {
    modal.classList.remove('hidden')
})

overlay.addEventListener('click', ()=> {
    modal.classList.add('hidden')
})

closeButton.addEventListener('click', ()=> {
    modal.classList.add('hidden')
})