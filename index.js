function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()
let input = document.querySelector('input')
function retrieveEmployeeInformation() {
  return input.value
}

function addNewElementAsLi() {
 let value = retrieveEmployeeInformation()
 document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${value}</li>`)
}

function addNewLiOnClick() {
  
  let button = document.querySelector('input[type="submit"]')
}

function clearEmployeeListOnLinkClick() {
  
}