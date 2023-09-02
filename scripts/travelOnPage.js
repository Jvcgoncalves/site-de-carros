const travelIntoPage = () =>{
   
   const buttons = document.querySelectorAll('.btn-menu')

   buttons.forEach(ev=>{
      ev.addEventListener('click',()=>{
        switch(ev.textContent){
         case 'Outros tópicos':
            const asideOffset = -90
            const aside = document.querySelector('#asideItens');
            const asidePosition = aside.getBoundingClientRect().top + window.scrollY;
            
            window.scrollTo({
               top: asidePosition + asideOffset,
               behavior: 'smooth'
            });
            responsiveMenu(EventTarget)
         break;
         case 'Voltar para o topo':
            const contentOffset = -200
            const content = document.querySelector('#back');
            const contentPosition = content.getBoundingClientRect().top + window.scrollY;
            
            window.scrollTo({
               top: contentPosition + contentOffset,
               behavior: 'instant'
            });
            responsiveMenu(EventTarget)
         break
         default:
            responsiveMenu(EventTarget)
         break;
        }
      })
   })
}

const responsiveMenu = (event)=>{
   if(event.type ==='touchstart') event.preventDefault()
   document.getElementById('mobile-menu').classList.toggle('active')
   travelIntoPage()
}

export {responsiveMenu}