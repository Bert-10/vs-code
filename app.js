const button=document.querySelector('.pleaForm')
const textFieldName=document.querySelector('#textFieldName')
const textFieldEmail=document.querySelector('#textFieldEmail')
const textFieldPlea=document.querySelector('#text')
const email=document.querySelector('.emailList')
// button.onclick=()=>{
//     console.log('beaver')
// }
// blur
button.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkAllFeildsOnForm()
})
// input.blur=()=>{console.log('blur')}
let checkName=true
let checkEmail=true
let checkPlea=true

textFieldName.addEventListener('blur',(e)=>{
    // console.log(textFieldName.value)
    if(textFieldName.value===''&& checkName===true){
        incorrectField('Укажите имя',0,textFieldName,'erName')
        checkName=false
    }
})
textFieldEmail.addEventListener('blur',(e)=>{
    
    if(textFieldEmail.value===''&& checkEmail===true){
        incorrectField('Укажите email',1,textFieldEmail,'erEmail')
        checkEmail=false
    }
})
textFieldPlea.addEventListener('blur',(e)=>{
   
    if(textFieldPlea.value===''&& checkPlea===true){
        incorrectField('Укажите мольбу',2,textFieldPlea,'erPlea')
        checkPlea=false
    }
})

function incorrectField(text,i,node,id){
    node.style.border='1px solid red'
    const n=document.querySelectorAll('.form-group')
    let pName=document.createElement('p')
    pName.className = "incorrectInput"
    pName.id=id
    pName.innerHTML = text
    n[i].append(pName)
    if(i===1){
        
        email.style.paddingTop='9.2px'
        email.style.border='1px solid red'
        email.style.borderLeft='none'
        node.style.borderRight='none'
    }
}

textFieldName.addEventListener('input',(e)=>{
    if(textFieldName.style.border==='1px solid red'){
        setCasualStyle(textFieldName)
        document.querySelector('#erName').remove()
        checkName=true
    }
})
textFieldEmail.addEventListener('input',(e)=>{
    if(textFieldEmail.style.borderTop==='1px solid red'){
        setCasualStyle(textFieldEmail)
        setCasualStyle(email)
        document.querySelector('#erEmail').remove()
        checkEmail=true
    }
})
textFieldPlea.addEventListener('input',(e)=>{
    if(textFieldPlea.style.border==='1px solid red'){
        setCasualStyle(textFieldPlea)
        document.querySelector('#erPlea').remove()
        checkPlea=true
    }
})

function setCasualStyle(node){
    node.style.border='none'
    node.style.borderBottom='2px solid rgb(135, 216, 135)' 
}

function checkAllFeildsOnForm(){
    let check=true
    if(textFieldName.value==='' && checkName===true){
        // console.log('name field is empty')
        check=false 
        incorrectField('Укажите имя',0,textFieldName,'erName')
        checkName=false
    }
    if(textFieldEmail.value==='' && checkEmail===true){
        // console.log('email field is empty')
        check=false
        incorrectField('Укажите email',1,textFieldEmail,'erEmail')
        checkEmail=false
    }
    if(textFieldPlea.value==='' && checkPlea===true){
        // console.log('plea field is empty')
        check=false
        incorrectField('Укажите мольбу',2,textFieldPlea,'erPlea')
        checkPlea=false
    }
    return check
}


// function getElement(){
//     return document.querySelector('.incorrectInput')
// }


// //await работает только внутри асинхронных функций
// const getData = async(url)=>{
//     const res=await fetch(url)
//     const json=await res.json()
//     return json
// }

// getData('https://jsonplaceholder.typicode.com/todos/') 
//   .then(data => console.log(data)) //тут работаешь с полученными данными
//   .catch(error=>console.log(error.message)) //ловишь exeption
