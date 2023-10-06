//filter able project gallery

window.addEventListener('load', ()=>{
    let alltab = document.querySelectorAll('.tab');
    let allproject = document.querySelectorAll('.projects');
  
    //revome-tabActive
    const removeActive=()=> alltab.forEach(tab=>{
        tab.classList.remove('tab-active')
    })
    alltab.forEach(tab=>{
        tab.addEventListener('click', (event)=>{
            removeActive();
            tab.classList.add('tab-active');

        let filterName = event.target.getAttribute('data-name'); 
            
        allproject.forEach(project=>{
                let projectName = project.getAttribute('data-name');
                if((projectName === filterName) || filterName == 'All'){
                    project.style.display = 'block';
                }else{
                    project.style.display = 'none';
                }
                
            })
        });
    })
})
//
window.addEventListener('scroll', () => {
    let nav = document.querySelector('nav');
    
    nav.classList.toggle('nav-scroll', window.scrollY>0);
});
