let modalArr = document.querySelectorAll('.show-modal')

let closeModal = () => {
      document.querySelector('.modal').classList.add("hidden")
    document.querySelector('.overlay').classList.add("hidden")
}

for(let i=0; i<modalArr.length; i++){
  modalArr[i].addEventListener('click',() => {
    document.querySelector('.modal').classList.remove("hidden")
    document.querySelector('.overlay').classList.remove("hidden")
  })
}

document.querySelector('.close-modal').addEventListener('click',closeModal)

document.querySelector('.overlay').addEventListener('click',  closeModal)

document.addEventListener('keyup',(event) => {
  if(event.key === "Escape"){
    closeModal()
  }
})

