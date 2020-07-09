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
    console.log(event.code)
    console.log('wheelie')
})


    window.addEventListener('resize', event => {
            console.log('bigger')
        }
    )
    document.body.addEventListener('click', event => {
        console.log(event.code)
        if(event.code==='click'){
         console.log('you clicked!')
        }
    })