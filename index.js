const openBtn = document.getElementById('sidebar-open-btn')
const closeBtn = document.getElementById('sidebar-close-btn')
const sideBarContainers = document.querySelectorAll('.nav')

openBtn.addEventListener('click',()=>{
    sideBarContainers.forEach((element)=>element.classList.add('visible'))
})

closeBtn.addEventListener('click',()=>{
    sideBarContainers.forEach((element)=>element.classList.remove('visible'))
    // sideBarContainer.classList.remove('visible')
})