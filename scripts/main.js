import { carStatus,bikeStatus,hypercarsStatus,pickUpsStatus,suvsStatus } from "./arrays/infoArrays.js";
import { responsiveMenu } from "./travelOnPage.js";

let vehicleStatus;

// menu responsivo 

document.querySelector('button[class="mobile-icon"]').addEventListener('click', responsiveMenu)
document.querySelector('button[class="mobile-icon"]').addEventListener('touchstart', responsiveMenu)

// Referencias

const refPart = (event)=>{
   if(event.type ==='touchstart') event.preventDefault()
   document.querySelector('#referencesLinks').classList.toggle('active')
   const arrow = document.querySelector('#arrow > img')
   if(document.querySelector('#referencesLinks.active')){
      arrow.style.transform = `rotate(${180}deg)`
   } else{
      arrow.style.transform = `rotate(${0}deg)`
   }
}

document.querySelector('#refDiv').addEventListener('click',refPart)
document.querySelector('#refDiv').addEventListener('touchstart',refPart)

export function checkDataPage(){
   switch(document.querySelector('div[class="container"]').dataset.page){
      case 'carsPage':
         vehicleStatus = carStatus
      break;
      case 'bikesPage':
         vehicleStatus = bikeStatus 
      break;
      case 'hyperCarsPage':
         vehicleStatus = hypercarsStatus
      break;
      case 'pick-ups-page':
         vehicleStatus =   pickUpsStatus
      break;
      case 'suvsPage':
         vehicleStatus = suvsStatus
      break;
   }
}
checkDataPage()
let veiculos = document.querySelectorAll('.itens')
let extraContent = document.getElementById('especificExtraInformation')
let index = 0;
// Criar a div do conteúdo específico sobre a moto clicada
function createLeftDiv(mainVehicle, index) {
   let div = document.createElement('div')
   let h3 = document.createElement('h3')
   let ul = document.createElement('ul')
   let li_1 = document.createElement('li')
   let li_2 = document.createElement('li')
   let li_3 = document.createElement('li')
   let li_4 = document.createElement('li')
   let li_5 = document.createElement('li')
   let li_6 = document.createElement('li')
   let li_7 = document.createElement('li')
   let photo = mainVehicle.childNodes[1].cloneNode(true)  // Pegar a mesma imagem da principal
   photo.className = 'informations-photo'
   li_1.innerText= `Modelo do motor: ${vehicleStatus[index].engineModel}`
   li_2.innerText= `Potência do motor: ${vehicleStatus[index].enginePower}`
   li_3.innerText= `Torque: ${vehicleStatus[index].torque}`
   li_4.innerText= `Transmissão: ${vehicleStatus[index].transmission}`
   li_5.innerText= `Peso: ${vehicleStatus[index].weight}`
   li_6.innerText= `Capacidade do tanque de combustível: ${vehicleStatus[index].fuelTank}`
   li_5.innerText= `Preço: R$ ${vehicleStatus[index].price}`
   ul.append(li_1,li_2,li_3,li_4,li_5,li_6,li_7)
   h3.innerText = mainVehicle.dataset.vehicleModel
   div.id = 'extraInformationItem'
   div.append(photo, h3, ul)
   let button = createButton()
   let div2 = createRightDiv(index)
   extraContent.append(div, div2, button);
}
function createRightDiv(index) {
   let div = document.createElement('div')
   div.id = 'curiositiesItem'
   let h3 = document.createElement('h3')
   h3.innerText = 'Curiosidades adicionais'
   let ul = document.createElement('ul')
   for (let i = 0; i < 4; i++) {
      let li = document.createElement('li')
      li.innerText = vehicleStatus[index].curiosities[i]
      ul.appendChild(li)
   }
   div.append(h3, ul)
   return div
}
// button para fechar as informações
let createButton = () => {
   let button = document.createElement('button')
   button.innerText = 'Fechar'
   button.id = 'closeInformationsButton'
   button.addEventListener('click', () => {
      button.remove()
      extraContent.removeChild(document.getElementById('extraInformationItem'))
      extraContent.removeChild(document.getElementById('curiositiesItem'))
   })
   return button
}
// Pegar a div e o data-set para usar no switch
function getVehileInformations(ev) {
   let div = ev.currentTarget
   let vehicleModel = div.dataset.vehicleModel
   let datasetAndDiv = [div, vehicleModel]
   return datasetAndDiv
}
// Pegar a moto específica
function vehicleInformation(vehicle) {
   let div = vehicle[0].cloneNode(true)
   switch (vehicle[1]) {
      case 'civic hatch 1998':
         index = 0
         createLeftDiv(div, index)
         break;
      case 'civic 2008 si':
         index = 1
         createLeftDiv(div, index)
         break;
      case 'civic type R 2023':
         index = 2
         createLeftDiv(div, index)
         break;
      case 'golf mk4':
         index = 3
         createLeftDiv(div, index)
         break;
      case 'ford focus rs':
         index = 4
         createLeftDiv(div, index)
         break;
      case 'subaru impreza wrx sti':
         index = 5
         createLeftDiv(div, index)
         break;
      case 'lancer evolution V':
         index = 6
         createLeftDiv(div, index)
         break;
      case 'acura nsx 91':
         index = 7
         createLeftDiv(div, index)
         break;
      case 'mazda rx7':
         index = 8
         createLeftDiv(div, index)
      break;
      case 'gtr r32':
         index = 9
         createLeftDiv(div, index)
      break;
      case 'Supra mk4':
         index = 10
         createLeftDiv(div, index)
      break;
      case 'gtr r34':
         index = 11
         createLeftDiv(div, index)
      break;
      case 'BMW 1000RR':   
         index = 0       
         createLeftDiv(div, index)
         break;
      case 'CBR 1000RR Fireblade': 
         index = 1
         createLeftDiv(div,index) 
      break;
      case 'Ducati Panigale V4R': 
         index = 2    
         createLeftDiv(div,index)  
      break;
      case 'hornet 600': 
         index = 3
         createLeftDiv(div,index)  
      break;
      case 'xj6': 
         index = 4
         createLeftDiv(div,index)  
      break;
      case 'xt 660': 
         index = 5
         createLeftDiv(div,index)  
      break;
      case 'Kawasaki Ninja H2R': 
         index = 6
         createLeftDiv(div,index)  
      break;
      case 'Kawasaki Ninja ZX 10R': 
         index = 7
         createLeftDiv(div,index)  
      break; 
      case 'Lightning LS 218': 
         index = 8
         createLeftDiv(div,index)  
      break;
      case 'mclaren f1 95':
         index=0
         createLeftDiv(div,index)  
      break;
      case 'Ferrari F40':
         index=1
         createLeftDiv(div,index) 
      break;
      case 'Lamborghini huracan 640-4':
         index=2
         createLeftDiv(div,index) 
      break;
      case 'Porsche 991 GT3':
         index=3
         createLeftDiv(div,index) 
      break;
      case 'Mclaren Senna':
         index=4
         createLeftDiv(div,index) 
      break;
      case 'Lamborghini Aventador SVJ':
         index=5
         createLeftDiv(div,index) 
      break;
      case 'Bugatti Chiron':
         index=6
         createLeftDiv(div,index) 
      break;
      case 'Porsche 918 spyder':
         index=7
         createLeftDiv(div,index) 
      break;
      case 'Audi R8 v10':
         index=8
         createLeftDiv(div,index) 
      break;
      case 'dodge ram 2500':
         index=0
         createLeftDiv(div,index)  
      break;
      case 'f150 raptor':
         index=1
         createLeftDiv(div,index) 
      break;
      case 'f250 2017':
         index=2
         createLeftDiv(div,index) 
      break;
      case 'ford maverick 2022':
         index=3
         createLeftDiv(div,index) 
      break;
      case 'nissan titan':
         index=4
         createLeftDiv(div,index) 
      break;
      case 'rezvani hercules 6x6':
         index=5
         createLeftDiv(div,index) 
      break;
      case 'silverado 2023':
         index=6
         createLeftDiv(div,index) 
      break;
      case 'toyota tacoma':
         index=7
         createLeftDiv(div,index) 
      break;
      case 'toyota tundra':
         index=8
         createLeftDiv(div,index) 
      break;
      case 'lamborghini urus':
         index=0
         createLeftDiv(div,index)  
      break;
      case 'bentley bentayga':
         index=1
         createLeftDiv(div,index) 
      break;
      case 'maserati levante trofeo':
         index=2
         createLeftDiv(div,index) 
      break;
      case 'mercedes amg gle 63s':
         index=3
         createLeftDiv(div,index) 
      break;
      case 'range rover sport svr':
         index=4
         createLeftDiv(div,index) 
      break;
      case 'bmw x6':
         index=5
         createLeftDiv(div,index) 
      break;
      case 'rolls royce cullinan':
         index=6
         createLeftDiv(div,index) 
      break;
      case 'porsche cayenne turbo s':
         index=7
         createLeftDiv(div,index) 
      break;
      case 'toyota rav4':
         index=8
         createLeftDiv(div,index) 
      break;
      
   }
   if (extraContent.childNodes.length > 4) {
      extraContent.removeChild(document.getElementById('extraInformationItem'))
      extraContent.removeChild(document.getElementById('curiositiesItem'))
      extraContent.removeChild(document.getElementById('closeInformationsButton'))
   } 
}
export function startItensEvents(ev){
   ev.addEventListener('click', function (ev) {
      let vehicle = getVehileInformations(ev)
      vehicleInformation(vehicle)
      const extraInformationOffset = -100
      const extraInformation = document.querySelector('#especificExtraInformation')
      const extraInformationPosition = extraInformation.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
         top: extraInformationPosition + extraInformationOffset,
         behavior: 'smooth'
      });
   })
}
veiculos.forEach(ev => startItensEvents(ev))
localStorage.setItem('lastPage','')