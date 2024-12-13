document.querySelector('.add').addEventListener('click',() => {
  const li = document.createElement("li")
  const div = document.createElement("div")
  const btn = document.createElement("btn")
  li.setAttribute("class", "list-group-item")
  div.setAttribute("class", "input-group mb-2")
  btn.setAttribute("class","remove btn btn-danger")
  if(document.querySelector('.form-control').value){

    const node = document.createTextNode(document.querySelector('.form-control').value)
    li.appendChild(node)
    const btnNode = document.createTextNode("Remove")
    btn.appendChild(btnNode)
    div.appendChild(li)
    div.appendChild(btn)

    const parent = document.querySelector('.list-group')
    parent.appendChild(div)
  }
})

document.querySelector('.remove').addEventListener('click', () => {
  console.log("Remove")
})
