const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const block = document.querySelector('.block')
const ppp = document.querySelector('.xx')


// block.style.display = 'none'

btn1.addEventListener('click',()=>{
    if (input1.value === '' && input2.value === '' && input3.value === ''){
        alert(404)
    }else{
        block.innerHTML += `<div class="my-2">
<div class="group d-flex justify-content-between align-items-center ">
<img style="object-fit: cover" height="70" width="70" src="${input1.value}" alt="">
<div class="groupText">
<pre>name:${input2.value}</pre>
<pre>email:${input3.value}</pre>
</div>
<button class="del-btn btn btn-danger">delete</button>
</div>
</div>`
        input1.value = ''
        input2.value = ''
        input3.value = ''
        }
})
btn2.addEventListener('click',()=>{
    block.style.display = 'block'
})

block.addEventListener('click',(e)=>{
    if (e.target.classList.contains('del-btn')){
        e.target.closest('div').remove()
    }
})

ppp.addEventListener('click',()=>{
    block.style.display = 'none'
})