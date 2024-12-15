// document.querySelector('.add').addEventListener('click', () => {
//   let task = document.querySelector('.input').value
//   if(task){
//     // document.querySelector('.list-item-3').textContent = task
//     let li = document.createElement('li')
//     // <li>Thos is parag</li>
//     li.setAttribute("class","list-item-4")
//     let node = document.createTextNode(task)
//     li.appendChild(node)

//     let ul = document.querySelector('.list')
//     ul.appendChild(li)
//   }

// })

//  const li = document.createElement('li')
//  // <li></li>
//  const node = document.createTextNode("this is paragrap")
//  // This is paragraph
//  li.appendChild(node)
//  // <li>This is paragraph</li>

//  const parent = document.querySelector('.container')
//  parent.appendChild(li)


let str = document.querySelector('.list-item-2')
console.log(str.textContent)
str.innerHTML = "Buy <strong>eat</strong>"
