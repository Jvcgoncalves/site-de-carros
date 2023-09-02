import {startItensEvents,checkDataPage} from "./main.js"
const vehicleImages={
   bikes:'./imagens/conteudo-extra/Motos.jpg',
   cars:'./imagens/conteudo-extra/carros.jpg',
   pickUps:'./imagens/conteudo-extra/pick up.jpg',
   suvs:'./imagens/conteudo-extra/suv.jpg',
   hypercars:'./imagens/conteudo-extra/supercar.jpg'
} 
function changeScripts(witchScript){
   switch(witchScript){
      case 'hypercars': 
         document.querySelectorAll('.itens').forEach(ev=>{
            ev.removeEventListener('click',startItensEvents)
         })
         document.querySelectorAll('.itens').forEach(ev=>{
         startItensEvents(ev)
         })
         checkDataPage()
      break;
      case 'pick-ups':
         document.querySelectorAll('.itens').forEach(ev=>{
            ev.removeEventListener('click',startItensEvents)
         })
         document.querySelectorAll('.itens').forEach(ev=>{
           startItensEvents(ev)
         })
         checkDataPage()
      break;
      case 'suvs':
         document.querySelectorAll('.itens').forEach(ev=>{
            ev.removeEventListener('click',startItensEvents)
         })
         document.querySelectorAll('.itens').forEach(ev=>{
           startItensEvents(ev)
         })
         checkDataPage()
      break;
      case 'bikes':
         document.querySelectorAll('.itens').forEach(ev=>{
            ev.removeEventListener('click',startItensEvents)
         })
         document.querySelectorAll('.itens').forEach(ev=>{
           startItensEvents(ev)
         })
         checkDataPage()
      break;
      case 'cars':
         document.querySelectorAll('.itens').forEach(ev=>{
            ev.removeEventListener('click',startItensEvents)
         })
         document.querySelectorAll('.itens').forEach(ev=>{
           startItensEvents(ev)
         })
         checkDataPage()
      break
      default:
   } 
}
// Pegar todos os elemento do aside e usar o data sett para trocar as imagens
function changePage(ev){
   const contentOffset = -200
   const content = document.querySelector('#back');
   const contentPosition = content.getBoundingClientRect().top + window.scrollY;
   
   window.scrollTo({
      top: contentPosition + contentOffset,
      behavior: 'instant'
   });
   let bodyContent=''  
   switch(ev){
      case 'hypercars':
         bodyContent=`
         <div class="itens" data-vehicle-model="mclaren f1 95">
            <img class="main-img"  src="../imagens/conteudo-hypercars/mclaren-f1-95.jpg" alt="BMW-1000RR">
            <h3>Mclaren f1 95</h3>
            <p>O McLaren F1 '95 é um marco na história dos carros esportivos, sendo um dos veículos mais cobiçados e lendários já produzidos.
            </p>
         </div>
         <div class="itens" data-vehicle-model="Ferrari F40">
            <img class="main-img"  src="../imagens/conteudo-hypercars/ferrari-f40.jpg" alt="CBR-1000RR-Fireblade">
            <h3>Ferrari F40</h3>
            <p>A Ferrari F40 é uma obra-prima da paixão italiana pela velocidade e design elegante. Representa a tradição da marca e a busca implacável pela perfeição automotiva.</p>
         </div>
         <div class="itens" data-vehicle-model="Lamborghini huracan 640-4">
            <img class="main-img"  src="../imagens/conteudo-hypercars/lamborghini-huracan.jpg" alt="Lamborghini huracan EVO LP 640-4">
            <h3>Lamborghini huracan 640-4</h3>
            <p>Unindo a estética ousada da marca italiana com tecnologia de última geração. O V10 central, fornece potência e agilidade de maneira absurda.</p>
         </div>
         <div class="itens" data-vehicle-model="Porsche 991 GT3">
            <img class="main-img"  src="../imagens/conteudo-hypercars/porsche-991-gt3-rs.jpg" alt="hornet-600">
            <h3>Porsche 991 GT3 RS</h3>
            <p>Destacando-se como um dos carros melhores esportivos. Possui um motor boxer de alta rotação, transmissão precisa e suspensão afinada.</p>
         </div>
         <div class="itens" data-vehicle-model="Mclaren Senna">
            <img class="main-img"  src="../imagens/conteudo-hypercars/mclaren-senna.jpg" alt="xj6">
            <h3>Mclaren Senna</h3>
            <p>O McLaren Senna é uma obra-prima de engenharia que homenageia o legado do lendário Ayrton Senna. Projetado para o máximo desempenho na pista.</p>
         </div>
         <div class="itens" data-vehicle-model="Lamborghini Aventador SVJ">
            <img class="main-img"  src="../imagens/conteudo-hypercars/lamborghini-aventador-svj.jpg" alt="xt-660">
            <h3>Lamborghini Aventador SVJ</h3>
            <p>impulsionado por um motor V12 de aspiração natural, o SVJ oferece uma sinfonia sonora emocionante e potência alucinante.</p>
         </div>
         <div class="itens" data-vehicle-model="Bugatti Chiron">
            <img class="main-img"  src="../imagens/conteudo-hypercars/bugatti-chiron.jpg" alt="Kawasaki-Ninja-H2R">
            <h3>Bugatti Chiron</h3>
            <p>Impulsionado por um motor W16 quadriturbo este carro redefiniu os limites do que é possível em um carro de produção.</p>
         </div>
         <div class="itens" data-vehicle-model="Porsche 918 spyder">
            <img class="main-img"  src="../imagens/conteudo-hypercars/porsche-918-spyder.jpg" alt="Kawasaki-Ninja-ZX-10R">
            <h3>Porsche 918 spyder</h3>
            <p>Com seu motor V8 de alta rotação e motores elétricos, oferece uma combinação de potência avassaladora e eficiência surpreendente.</p>
         </div>
         <div class="itens" data-vehicle-model="Audi R8 v10">
            <img class="main-img"  src="../imagens/conteudo-hypercars/audi-r8-v10.jpg" alt="Lightning-LS-218">
            <h3>Audi R8 v10</h3>
            <p>equipado com um motor V10 de alto desempenho posicionado centralmente, o R8 V10 oferece uma combinação arrebatadora de potência e controle.</p>
         </div>` 
         document.querySelector('div[class="container"]').dataset.page='hyperCarsPage'
         document.querySelector('.main-content').innerHTML=bodyContent 
      break;
      case 'pick-ups':
         bodyContent=`
         <div data-vehicle-model="dodge ram 2500" class="itens">
            <img class="main-img" src="../imagens/conteudo-pickUps/dodge-ram-2500.jpg"
            alt="dodge-ram-2500">
            <h3>Dodge Ram 2500</h3>
            <p>A Ram 2500 é uma picape robusta que combina força e versatilidade necessárias para enfrentar desafios pesados, vista como um ícone na categoria das pick-ups.</p>
         </div>
         <div data-vehicle-model="f150 raptor" class="itens">
            <img class="main-img" src="../imagens/conteudo-pickUps/f150-raptor.jpg"
            alt="f150-raptor">
            <h3>F150 Raptor</h3>
            <p>A Ford F-150 Raptor é uma picape de alto desempenho que personifica a combinação entre capacidade de trabalho pesado e aventuras todo-terreno emocionantes.</p>
         </div>
         <div data-vehicle-model="f250 2017" class="itens">
            <img class="main-img" src="../imagens/conteudo-pickUps/f250-2017.jpg" alt="f250-2017">
            <h3>F250 2017</h3>
            <p>O design imponente e detalhes práticos demonstram sua natureza utilitária, já seu interior espaçoso proporciona uma experiência agradável e confortável.</p>
         </div>
         <div data-vehicle-model="ford maverick 2022" class="itens">
            <img class="main-img" src="../imagens/conteudo-pickUps/ford-maverick-2022.jpg" alt="ford-maverick-2022">
            <h3>Ford Maverick 2022</h3>
            <p>A Ford Maverick 2022 personifica a tendência de se adaptar às necessidades contemporâneas, cativando aqueles que buscam uma picape versátil.</p>
         </div>
         <div data-vehicle-model="nissan titan" class="itens">
            <img class="main-img" src="../imagens/conteudo-pickUps/nissan-titan.jpg" alt="nissan-titan">
            <h3>Nissan Titan</h3>
            <p>A Nissan Titan personifica a mentalidade de resistência e confiança, se tornou popular entre aqueles que buscam uma picape para enfrentar desafios difíceis.</p>
         </div>
         <div data-vehicle-model="rezvani hercules 6x6" class="itens">
            <img class="main-img" src="../imagens/conteudo-pickUps/rezvani-hercules-6x6.jpg" alt="rezvani-hercules-6x6">
            <h3>Rezvani Hercules 6x6</h3>
            <p>Uma picape 6x6 que combina robustez, luxo e presença dominante; com seu layout de seis rodas e design militar-moderno.</p>
         </div>
         <div data-vehicle-model="silverado 2023" class="itens">
            <img class="main-img" src="../imagens/conteudo-pickUps/silverado-2023.jpg" alt="silverado-2023">
            <h3>Chevrolet Silverado 2023</h3>
            <p>Design robusto e imponente, a Silverado 2023 mantém a aparência tradicional, mas também incorpora toques modernos que melhoram a eficiência.</p>
         </div>
         <div data-vehicle-model="toyota tacoma" class="itens">
            <img class="main-img" src="../imagens/conteudo-pickUps/toyota-tacoma.jpg"
            alt="toyota-tacoma-photo">
            <h3>Toyota Tacoma</h3>
            <p>A Toyota Tacoma é uma picape média que se destaca por sua confiabilidade, versatilidade e capacidade off-road. Combinando design robusto e funcionalidade.</p>
         </div>
         <div data-vehicle-model="toyota tundra" class="itens">
            <img class="main-img" src="../imagens/conteudo-pickUps/toyota-tundra.jpg" alt="toyota-tundra">
            <h3>Toyota Tundra</h3>
            <p>A Toyota Tundra é uma picape de tamanho completo que combina confiabilidade, desempenho e capacidade. Seja para trabalho ou lazer, a Tundra é uma escolha sólida.</p>
         </div>`
         document.querySelector('div[class="container"]').dataset.page='pick-ups-page'
         document.querySelector('.main-content').innerHTML=bodyContent 
      break;
      case 'suvs':
         bodyContent=`
         <div data-vehicle-model="lamborghini urus" class="itens">
            <img class="main-img" src="../imagens/conteudo-suvs/lamborghini-urus.jpg"
            alt="lamborghini-urus">
            <h3>Lamborghini Urus</h3>
            <p>A lamborghini Urus é um SUV superesportivo que combina luxo, desempenho e beleza marcante de forma extraordinária.</p>
         </div>
         <div data-vehicle-model="bentley bentayga" class="itens">
            <img class="main-img" src="../imagens/conteudo-suvs/bentley-bentayga.jpg"
            alt="bentley-bentayga">
            <h3>Bentley Bentayga</h3>
            <p>O Bentley Bentayga é um SUV de alta luxosidade que equilibra sofisticação, desempenho e versatilidade.</p>
         </div>
         <div data-vehicle-model="maserati levante trofeo" class="itens">
            <img class="main-img" src="../imagens/conteudo-suvs/maserati-levante-trofeo.jpg" alt="maserati-levante-trofeo">
            <h3>Maserati Levante Trofeo</h3>
            <p>Com um motor V8 biturbo poderoso, o Levante Trofeo oferece uma aceleração emocionante,mas sem perder o luxo.</p>
         </div>
         <div data-vehicle-model="mercedes amg gle 63s" class="itens">
            <img class="main-img" src="../imagens/conteudo-suvs/mercedes-amg-gle-63s.jpg" alt="mercedes-amg-gle-63s">
            <h3>Mercedes AMG GLE 63S</h3>
            <p>O GLE 63 S é a fusão entre elegância e esportividade da Mercedes, cativando entusiastas de SUVs de alto desempenho.</p>
         </div>
         <div data-vehicle-model="range rover sport svr" class="itens">
            <img class="main-img" src="../imagens/conteudo-suvs/range-rover-sport-svr.jpg" alt="range-rover-sport-svr">
            <h3>Range Rover Sport SVR</h3>
            <p>Equipado com um motor V8 supercharged, oferece uma aceleração impressionante e uma luxuosidade de outro mundo.</p>
         </div>
         <div data-vehicle-model="bmw x6" class="itens">
            <img class="main-img" src="../imagens/conteudo-suvs/bmw-x6.jpg" alt="bmw-x6">
            <h3>BMW X6</h3>
            <p>Desempenho e interior extraordinário. Seu estilo distinto de "coupé SUV", o X6 apresenta uma silhueta esportiva e elegante.</p>
         </div>
         <div data-vehicle-model="rolls royce cullinan" class="itens">
            <img class="main-img" src="../imagens/conteudo-suvs/rolls-royce-cullinan.jpg" alt="rolls-royce-cullinan">
            <h3>Rolls Royce Cullinan</h3>
            <p>O Rolls-Royce Cullinan é um SUV de luxo que personifica opulência, artesanato excepcional e desempenho requintado.</p>
         </div>
         <div data-vehicle-model="porsche cayenne turbo s" class="itens">
            <img class="main-img" src="../imagens/conteudo-suvs/porsche-cayenne-turbo-s.jpg"
            alt="porsche-cayenne-turbo-s">
            <h3>Porsche Cayenne Turbo S</h3>
            <p>Com seu design dinâmico, esportivo e seu motor V8, o Cayenne Turbo S reflete a herança esportiva da Porsche.</p>
         </div>
         <div data-vehicle-model="toyota rav4" class="itens">
            <img class="main-img" src="../imagens/conteudo-suvs/toyota-rav4.jpg" alt="toyota-rav4">
            <h3>Toyota RAV4</h3>
            <p>O Toyota RAV4 personifica a abordagem prática e confiável da marca, atraindo aqueles que buscam um SUV para o dia a dia.</p>
         </div>` 
         document.querySelector('div[class="container"]').dataset.page='suvsPage'
         document.querySelector('.main-content').innerHTML=bodyContent
      break;
      case 'bikes':
         bodyContent=` 
         <div class="itens" data-vehicle-model="BMW 1000RR">
            <img class="main-img"  src="../imagens/conteudo-motos/BMW-1000RR.jpg" alt="BMW-1000RR">
            <h3>BMW 1000RR</h3>
            <p>A BMW S1000RR é uma moto esportiva desenvolvida para a corrida. proporcionando uma experiência emocionante para os amantes de motocicletas esportivas.</p>
         </div>
         <div class="itens" data-vehicle-model="CBR 1000RR Fireblade">
            <img class="main-img"  src="../imagens/conteudo-motos/CBR-1000RR-Fireblade.jpg" alt="CBR-1000RR-Fireblade">
            <h3>CBR 1000RR Fireblade</h3>
            <p>A Honda CBR1000RR, é uma clássica motocicleta esportiva da Honda. Feita para os amantes de velocidade e adrenalina sobre duas rodas.</p>
         </div>
         <div class="itens" data-vehicle-model="Ducati Panigale V4R">
            <img class="main-img"  src="../imagens/conteudo-motos/Ducati-Panigale-V4R.jpg" alt="Ducati-Panigale-V4R">
            <h3>Ducati Panigale V4R</h3>
            <p>A Ducati Panigale V4 é uma supermoto de alta performance que incorpora a essência da velocidade e precisão.</p>
         </div>
         <div class="itens" data-vehicle-model="hornet 600">
            <img class="main-img"  src="../imagens/conteudo-motos/hornet-600.jpg" alt="hornet-600">
            <h3>hornet 600 </h3>
            <p>A Honda Hornet 600 é uma motocicleta naked versátil e empolgante, reconhecida por seu desempenho esportivo e estilo agressivo.</p>
         </div>
         <div class="itens" data-vehicle-model="xj6">
            <img class="main-img"  src="../imagens/conteudo-motos/xj6.jpg" alt="xj6">
            <h3>Yamaha XJ6</h3>
            <p>A Yamaha XJ6 é uma motocicleta naked versátil e emocionante, conhecida por seu equilíbrio entre desempenho e conforto.</p>
         </div>
         <div class="itens" data-vehicle-model="xt 660">
            <img class="main-img"  src="../imagens/conteudo-motos/xt-660(meiota).jpg" alt="xt-660">
            <h3>xt-660</h3>
            <p>A Yamaha XT-660 é uma motocicleta aventureira que combina robustez e versatilidade. Com um desing mais off-road é perfeita para novas aventuras.</p>
         </div>
         <div class="itens" data-vehicle-model="Kawasaki Ninja H2R">
            <img class="main-img"  src="../imagens/conteudo-motos/Kawasaki-Ninja-H2R.jpg" alt="Kawasaki-Ninja-H2R">
            <h3>Kawasaki Ninja H2R</h3>
            <p>A Kawasaki Ninja H2R é uma motocicleta superesportiva conhecida por seu desempenho, velocidade e seu famoso motor supercharged.</p>
         </div>
         <div class="itens" data-vehicle-model="Kawasaki Ninja ZX 10R">
            <img class="main-img"  src="../imagens/conteudo-motos/Kawasaki-Ninja-ZX-10R.jpg" alt="Kawasaki-Ninja-ZX-10R">
            <h3>Kawasaki Ninja ZX 10R</h3>
            <p>A Kawasaki Ninja ZX 10R é uma motocicleta superesportiva de alto desempenho, reconhecida por sua potência e agilidade excepcionais.</p>
         </div>
         <div class="itens" data-vehicle-model="Lightning LS 218">
            <img class="main-img"  src="../imagens/conteudo-motos/Lightning-LS-218.jpg" alt="Lightning-LS-218">
            <h3>Lightning LS 218</h3>
            <p>A Lightning LS 218 é uma motocicleta alta performance, famosa por seu motor elétrico, sua velocidade surpreendente, potência impressionante. </p>
         </div>`  
         document.querySelector('div[class="container"]').dataset.page='bikesPage'
         document.querySelector('.main-content').innerHTML=bodyContent 
      break;
      case 'cars':
         bodyContent=`
         <div data-vehicle-model="civic hatch 1998" class="itens">
               <img class="main-img" src="imagens/conteudo-carros/Civic-antigo-hatch.jpg"
               alt="civic-antigo-hatch-photo">
               <h3>Civic hatch 1998</h3>
               <p>O Honda Civic 1998, conhecido pelo seu estilo icônico e confiabilidade, é um clássico que perdura no imaginário dos entusiastas de automóveis.</p>
            </div>
            <div data-vehicle-model="civic 2008 si" class="itens">
               <img class="main-img" src="imagens/conteudo-carros/Civic-antigo-sedan.jpg"
               alt="civic-antigo-sedan-photo">
               <h3>Civic 2008 SI</h3>
               <p>O Civic SI 2008 é uma versão esportiva do popular sedan compacto. Com sua transmissão manual, o Civic proporciona uma condução emocionante.</p>
            </div>
            <div data-vehicle-model="civic type R 2023" class="itens">
               <img class="main-img" src="imagens/conteudo-carros/civic-type-r.jpg" alt="civic-type-r-photo">
               <h3>Civic type R 2023</h3>
               <p>O Civic Type R é a mais recente versão do carro esportivo da Honda. Seu motor turboalimentado de alta potência oferece uma resposta rápida do acelerador.</p>
            </div>
            <div data-vehicle-model="golf mk4" class="itens">
               <img class="main-img" src="imagens/conteudo-carros/golf(sapão)-mk4-preto.jpg" alt="golf-mk4-photo">
               <h3>Golf mk4 </h3>
               <p>O Volkswagen Golf MK4, também conhecido como Golf IV ou golf "sapão" no Brasil, é a quarta geração do popular hatchback compacto da Volkswagen.</p>
            </div>
            <div data-vehicle-model="ford focus rs" class="itens">
               <img class="main-img" src="imagens/conteudo-carros/ford-focus-rs.jpg" alt="ford-focus-rs-photo">
               <h3>Ford Focus RS</h3>
               <p>equipado com um motor potente e tração nas quatro rodas, o Focus RS proporciona uma sensação de controle excepcional e adrenalina.</p>
            </div>
            <div data-vehicle-model="subaru impreza wrx sti" class="itens">
               <img class="main-img" src="imagens/conteudo-carros/subaru-impreza-wrx-sti.jpg" alt="subaru-wrx-sti-photo">
               <h3>Subaru impreza wrx sti</h3>
               <p>Com um motor turboalimentado, suspensão esportiva ajustada e tração integral o WRX STI oferece uma experiência de direção.</p>
            </div>
            <div data-vehicle-model="lancer evolution V" class="itens">
               <img class="main-img" src="imagens/conteudo-carros/Lancer-evolution-V.jpg" alt="Lancer-evolution-V">
               <h3>Lancer evolution V</h3>
               <p>O Lancer Evolution V é a quinta evolução de um ícone automotivo, fundindo elegância com potência turboalimentada e tração nas quatro rodas.</p>
            </div>
            <div data-vehicle-model="acura nsx 91" class="itens">
               <img class="main-img" src="imagens/conteudo-carros/acura-nsx.jpg"
               alt="acura-nsx-r">
               <h3>Acura nsx 91</h3>
               <p>Com um motor V6 de alta eficiência junto a motores elétricos e o sistema de tração integral SH-AWD. O nsx é uma ótima espericia para quem busca emoção.</p>
            </div>
            <div data-vehicle-model="mazda rx7" class="itens">
               <img class="main-img" src="imagens/conteudo-carros/mazda-rx7.jpg" alt="mazda-rx7-photo">
               <h3>Mazda rx7</h3>
               <p>O Mazda RX-7 é um ícone dos carros esportivos que se destaca pela sua configuração de motor rotativo, oferecendo muita potência e agilidade.</p>
            </div>
            <div data-vehicle-model="gtr r32" class="itens">
               <img class="main-img" src="imagens/conteudo-carros/gtr-r32.jpg" alt="gtr-r32-photo
               ">
               <h3>Gtr R32</h3>
               <p>Lançado em 1989, o GT-R R32 revolucionou o cenário automobilístico com seu desempenho excepcional e tecnologia inovadora.</p>
            </div>
            <div data-vehicle-model="Supra mk4" class="itens">
               <img class="main-img" src="imagens/conteudo-carros/supra-mk4.jpg" alt="Supra-mk4-photo">
               <h3>Supra mk4</h3>
               <p>Equipado com um motor turboalimentado de seis cilindros em linha e tração traseira, oferecendo uma experiência de condução emocionante.</p>
            </div>
            <div data-vehicle-model="gtr r34" class="itens">
               <img class="main-img" src="imagens/conteudo-carros/gtr-r34.jpg" alt="gtr-r34-photo">
               <h3>Gtr R34</h3>
               <p>O Nissan GT-R R34 é a quarta geração do lendário supercarro esportivo da Nissan, mantem a tradição como um dos veículos mais icônicosdo mundo automotivo.</p>
            </div>`
         document.querySelector('div[class="container"]').dataset.page='carsPage'
         document.querySelector('.main-content').innerHTML=bodyContent
      break;
   }
   let extraContent = document.getElementById('especificExtraInformation')
   if (extraContent.childNodes.length > 1) {
      extraContent.removeChild(document.getElementById('extraInformationItem'))
      extraContent.removeChild(document.getElementById('curiositiesItem'))
      extraContent.removeChild(document.getElementById('closeInformationsButton'))
   } 
}
// Config Aside
function configAside(){  
   let itemAside_1=document.createElement('img')
   let itemAside_2=document.createElement('img')
   let itemAside_3=document.createElement('img')
   let itemAside_4=document.createElement('img')
   itemAside_1.src=vehicleImages[document.querySelectorAll('.itens-aside')[0].dataset.actualImg]
   itemAside_1.className='aside-img'
   itemAside_2.src=vehicleImages[document.querySelectorAll('.itens-aside')[1].dataset.actualImg]
   itemAside_2.className='aside-img'
   itemAside_3.src=vehicleImages[document.querySelectorAll('.itens-aside')[2].dataset.actualImg]
   itemAside_3.className='aside-img'
   itemAside_4.src=vehicleImages[document.querySelectorAll('.itens-aside')[3].dataset.actualImg]
   itemAside_4.className='aside-img'
   let aside = document.querySelectorAll('div[class="itens-aside"]')
   aside[0].appendChild(itemAside_1)
   aside[1].appendChild(itemAside_2)
   aside[2].appendChild(itemAside_3)
   aside[3].appendChild(itemAside_4)
   return [aside[0],aside[1],aside[2],aside[3]]
} 
let divsAside =  configAside()
let dataActualImg= [divsAside[0].dataset.actualImg,divsAside[1].dataset.actualImg,divsAside[2].dataset.actualImg,divsAside[3].dataset.actualImg]
let dataTravelTo = [divsAside[0].dataset.travelTo,divsAside[1].dataset.travelTo,divsAside[2].dataset.travelTo,divsAside[3].dataset.travelTo]
let divsAsideP=[divsAside[0].childNodes[1],divsAside[1].childNodes[1],divsAside[2].childNodes[1],divsAside[3].childNodes[1]]
// Change Aside
function changeAside(asideItens){
   asideItens[0].setAttribute('data-actual-img',dataActualImg[0])
   asideItens[1].setAttribute('data-actual-img',dataActualImg[1])
   asideItens[2].setAttribute('data-actual-img',dataActualImg[2])
   asideItens[3].setAttribute('data-actual-img',dataActualImg[3])
   asideItens[0].setAttribute('data-travel-to',dataTravelTo[0])
   asideItens[1].setAttribute('data-travel-to',dataTravelTo[1])
   asideItens[2].setAttribute('data-travel-to',dataTravelTo[2])
   asideItens[3].setAttribute('data-travel-to',dataTravelTo[3])
   asideItens[0].childNodes[1].innerText=divsAsideP[0].innerText
   asideItens[1].childNodes[1].innerText=divsAsideP[1].innerText
   asideItens[2].childNodes[1].innerText=divsAsideP[2].innerText
   asideItens[3].childNodes[1].innerText=divsAsideP[3].innerText
   asideItens[0].childNodes[3].setAttribute('src',vehicleImages[dataActualImg[0]])
   asideItens[1].childNodes[3].setAttribute('src',vehicleImages[dataActualImg[1]])
   asideItens[2].childNodes[3].setAttribute('src',vehicleImages[dataActualImg[2]])
   asideItens[3].childNodes[3].setAttribute('src',vehicleImages[dataActualImg[3]])
}
function changeAsidePicture(n){
   changeScripts(dataTravelTo[n])
   let lastPage = localStorage.getItem('lastPage')
   switch(lastPage){
      case 'carsPage': 
         divsAside[n].setAttribute('data-actual-img','cars') 
         dataActualImg[n]='cars'
         dataTravelTo[n]='cars'
         divsAside = document.querySelectorAll('div[class="itens-aside"]')
         divsAsideP[n].innerText='Carros'
         changeAside(divsAside) 
      break;
      case 'suvsPage':
         divsAside[n].setAttribute('data-actual-img','suvs')  
         dataActualImg[n]='suvs'
         dataTravelTo[n]='suvs'
         divsAsideP[n].innerText='Suvs'
         divsAside = document.querySelectorAll('div[class="itens-aside"]')  
         changeAside(divsAside,divsAside[n])                         
      break;
      case 'pick-ups-page':
         divsAside[n].setAttribute('data-actual-img','pickUps')   
         dataActualImg[n]='pickUps'
         dataTravelTo[n]='pick-ups'
         divsAsideP[n].innerText='Pick ups'
         divsAside = document.querySelectorAll('div[class="itens-aside"]') 
         changeAside(divsAside,divsAside[n])                 
      break;
      case 'bikesPage':
         divsAside[n].setAttribute('data-actual-img','bikes') 
         dataActualImg[n]='bikes'
         dataTravelTo[n]='bikes'
         divsAsideP[n].innerText='Motos'
         divsAside = document.querySelectorAll('div[class="itens-aside"]')   
         changeAside(divsAside,divsAside[n])                
      break;
      case 'hyperCarsPage':
         divsAside[n].setAttribute('data-actual-img','hypercars')    
         dataActualImg[n]='hypercars'
         dataTravelTo[n]='hypercars'
         divsAsideP[n].innerText='Supercarros'
         divsAside = document.querySelectorAll('div[class="itens-aside"]')
         changeAside(divsAside,divsAside[n])         
      break;
   }
}
// Troca de paginas
localStorage.setItem('goTo','')
localStorage.setItem('lastPage',document.querySelector('div[class="container"]').dataset.page)

let asideItens = document.querySelectorAll('div[class="itens-aside"]')
   asideItens.forEach(ev=>{      
      ev.addEventListener('click', ()=>{            
      changePage(ev.dataset.travelTo);
      changeScripts(ev.dataset.travelTo) 
      changeAsidePicture(ev.dataset.number)    
      localStorage.setItem('lastPage',document.querySelector('div[class="container"]').dataset.page)
   })
})