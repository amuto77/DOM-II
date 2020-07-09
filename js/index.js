// Your code goes here
const navLink = document.querySelectorAll('.nav-link')
const navLinkDefaultColor = navLink[0].style.color

navLink.forEach((item) =>{item.addEventListener('mouseover', () => {
    item.style.color = 'yellow' 
})})

navLink.forEach((item) =>{item.addEventListener('mouseout', () => {
    item.style.color = navLinkDefaultColor 
})})

const mainTitle = document.querySelector('.logo-heading')
    document.body.addEventListener('keydown', event => {
        console.log(event.code)
        if(event.code === 'Space'){
            mainTitle.style.color = 'red'
            console.log('key')
        }
    })

document.body.addEventListener('wheel', event => {
    console.log('wheelie')
})


window.addEventListener('resize', event => {
    console.log('bigger')
})

document.body.addEventListener('click', event => {
    console.log(event)
})

const h2 = document.querySelector('h2')

h2.addEventListener('dragstart', event => {
    h2.style.color = 'green'
})

h2.addEventListener('dragend', event => {
    h2.style.color = 'black'
})

const dropDiv = document.querySelector('.logo-heading')

dropDiv.addEventListener('drop', event =>{
    alert('Drop has occured!')
    console.log('dropped')
})

document.addEventListener('load', event => {
    alert("I have loaded!")
})

const input = document.querySelector('p')

let timerID = 0

input.addEventListener('focus', event => {
   setInterval(() => {
       event.target.value = event.target.value + "event"
   },1000)
})

input.addEventListener('blur', event => {
    event.target.value = ""
    clearInterval(timerID)
})