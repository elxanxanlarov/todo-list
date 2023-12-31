// const form=document.querySelector('.head__from');
// const input=document.querySelector('.head__input--child');

// const newListContainer=document.querySelector('.new__list__container');
// const lastList=document.querySelector('.last__list');


// const listItems=[];



// let countOfTodos=0;
// form.addEventListener('submit',(e)=>{
// e.preventDefault();
// countOfTodos++;
// let listItem=getItem(input.value,countOfTodos);
// newListContainer.insertAdjacentHTML('afterbegin',listItem);
// listItems.push({id:countOfTodos,listItem});

// lastList.firstElementChild.firstElementChild.textContent=countOfTodos

// if(listItems.length !== 0){
// lastList.classList.remove('hidden')
// }else{
//   lastList.classList.add('hidden')

// }
// })


// function getElement(element){
// if(!(element.firstElementChild.classList.contains("checked"))){
// element.firstElementChild.classList.add("checked");


// let img =document.createElement('img')
//     img.src="./assets/images/select-img.svg"
//     img.alt='checked'
//     element.firstElementChild.appendChild(img)

// }
// else{
// element.firstElementChild.classList.remove("checked")
// element.firstElementChild.firstElementChild.classList.remove()

// }
// }
// function getItem(element,todoId){
// return `  <li onclick="getElement(this)" class="new__list" id=${todoId} >
// <div class="new__list__checked__box ">

// </div>
// <p class="new__list--text">${element}</p>
// </li>
// `
// }


// function filterSide(todos,todoslength){
// lastList.firstElementChild.firstElementChild.textContent=todoslength;
// if(todos.length!==0){
// lastList.classList.add('hidden');
// }else{
//   lastList.classList.remove('hidden');

// }
// }

const form = document.querySelector('.head__from');
const input = document.querySelector('.head__input__child');
const newTextBlock = document.querySelector('.new__list__container');
const lastList = document.querySelector('.last__list');
let lastListNum = document.querySelector('.last__list__first--num')
let count = 0

function checkImg(e) {
     let imgBLock = e.firstElementChild
     
     
     if(!(imgBLock.classList.contains('checked'))){
          imgBLock.classList.add('checked')
          let img = document.createElement('img')
          img.src = './assets/images/select-img.svg';
          img.alt='check';
          imgBLock.appendChild(img);
          
          e.lastElementChild.style.textDecoration='line-through';
          e.lastElementChild.style.color='grey';
          
     }else{
          imgBLock.classList.remove('checked');
          imgBLock.firstElementChild.remove();
          e.lastElementChild.style.textDecoration='none';
          e.lastElementChild.style.color='black';

     }

}
function allClearItem(){
let allClearButton=document.querySelector('.last__list--third')
allClearButton.addEventListener('click',(e)=>{
newTextBlock.remove()
lastList.classList.add('hidden')
count=0
})
}
allClearItem()
form.addEventListener('submit', (e) => {
     e.preventDefault();
     let inputValue = input.value;
     if (inputValue == "") {
          alert('Yazi yazin')
     } else {
          getNewText(inputValue, count)
          lastList.classList.remove('hidden')
          count++
          lastListNum.innerHTML = count
     }
     input.value = ""
})

function getNewText(inputValue, itemId) {
     let dataHtml = '';
     dataHtml = `<li onclick='checkImg(this)' id="${itemId + 1}" class="new__list">
<div class="new__list__checked__box">

</div>
<p class="new__list--text">${inputValue}</p>
</li>`
     newTextBlock.innerHTML += dataHtml
}



