let panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click',() =>{
        
        panel.classList.toggle('active');

    })
})
// function removClassList(){
//     panels.forEach((panel) => {

//     })
// }