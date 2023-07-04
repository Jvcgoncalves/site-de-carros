function goToPageMotos(){
   window.location.href="./motos/motos.html"
}
let motorbike = document.getElementById('motorbike')
motorbike.addEventListener('click', goToPageMotos)
let veiculos = document.querySelectorAll('.itens')
let extraContent = document.getElementById('especificExtraInformation')
let power;
let productionYears;
let index = 0;
let bikeStatus = [
   {engineModel:`4 tempos, 4 cilindros em linha, 16V, DOHC`,enginePower:`210 cv/999 cc`,torque:`11,52 Ngm`,transmission:`Caixa de 6 velocidades`,weight:`175,5 kg`,fuelTank:`17,5 L`,curiosities:[]},
   {engineModel:`DOHC, 4 cilindros`,enginePower:`216,2 cv/999 cc`,torque:`11,5 kgf.m`,transmission:`Caixa de Caixa de 6 velocidades com quickshifter`,weight:`189 kg`,fuelTank:`16,1 L`},
   {engineModel:`V4 90° equipado com o Desmosedici Stradale`,enginePower:`215,5 cv/1.103 cc`,torque:`12,6 Ngm`,transmission:`Caixa de 6 velocidades`,weight:`174 kg`,fuelTank:`16 L`},
   {engineModel:`4 tempos, 4 cilindros, 16V DOHC`,enginePower:`102 cv/599,3 cc`,torque:`6,53 Ngm`,transmission:`Caixa de 6 velocidades`,weight:`173/177 kg`,fuelTank:`18 L`},
   {engineModel:`4 tempos, 4 cilindros, 16V DOHC`,enginePower:`77,5 cv/600 cc`,torque:`6,08 Ngm`,transmission:`Caixa de 6 velocidades`,weight:`205 kg`,fuelTank:`17 L`},
   {engineModel:`4 tempos, 1 cilindro vertical, 2 válvulas, OHC/SOHC`,enginePower:`48 cv/660 cc`,torque:`5,95 Ngm`,transmission:`Caixa de 5 velocidades`,weight:`165 kg`,fuelTank:`15 L`},
   {engineModel:`4 tempos, 4 cilindros, 16 válvulas, supercharger, DOHC`,enginePower:`310 cv/998 cc`,torque:` 16,6 Ngm`,transmission:`Caixa de 6 velocidades`,weight:`216 kg`,fuelTank:`17 L`}, 
   {engineModel:`4 tempos, 4 cilindros em linha, 16 válvulas, DOHC`,enginePower:`203 cv/998 cc`,torque:` 11,7 Ngm`,transmission:`Caixa de 6 velocidades`,weight:`207 kg`,fuelTank:`17 L`},
   {engineModel:`IPM, motor elétrico`,enginePower:`200 cv`,torque:` 23.1 Ngm`,transmission:`Única marcha por ser elétrica`,weight:`206 kg`,fuelTank:`113-161 km aproximadamente por ser elétrico`}]
// Criar a div do conteúdo específico sobre a moto clicada
function createLeftDiv(mainBike,index){
   let div = document.createElement('div')
   let h3 = document.createElement('h3')
   let p = document.createElement('p')
   let photo = mainBike.childNodes[1].cloneNode(true)  // Pegar a mesma imagem da principal
   photo.className = 'informations-photo'
   h3.innerText= mainBike.dataset.bikeModel
   console.log(index)
   p.innerText=
   `Modelo do motor: ${bikeStatus[index].engineModel}
   Potência do motor: ${bikeStatus[index].enginePower}
   Torque: ${bikeStatus[index].torque}
   Transmissão: ${bikeStatus[index].transmission}
   Peso seco: ${bikeStatus[index].weight}
   Capacidade do tanque de combustível: ${bikeStatus[index].fuelTank}`
   div.id='extraInformationItem'
   div.append(photo,h3,p)
   let div2 = createRightDiv(index)
   extraContent.append(div,div2);
}
function createRightDiv(index) {
   let div = document.createElement('div');
   div.id = 'curiositiesItem';
   div.style.backgroundColor = 'red';
   let ul = document.createElement('ul');
   let li = document.createElement('li');
   li.innerText = 'vamo';
   ul.appendChild(li);
   div.appendChild(ul);
   return div;
}
   
// Pegar a div e o data-set para usar no switch
function getVehileInformations(ev){
   let div = ev.currentTarget
   let bikeModel = div.dataset.bikeModel
   let datasetAndDiv = [div,bikeModel]
   return datasetAndDiv
}
// Pegar a moto específica
function bikeInformation(bike){
   console.log(extraContent.childNodes)
   let div = bike[0].cloneNode(true)  
   switch (bike[1]){
      case 'civic-hatch-1998':
         console.log(div.childNodes[1])   
         index = 0       
         createLeftDiv(div, index)
         break;
      case 'CBR-1000RR-Fireblade':
         console.log(div.childNodes[1]) 
         index = 1
         createLeftDiv(div,index) 
      break;
      case 'Ducati-Panigale-V4R':
         console.log(div.childNodes[1]) 
         index = 2    
         createLeftDiv(div,index)  
      break;
      case 'hornet-600':
         console.log(div.childNodes[1]) 
         index = 3
         createLeftDiv(div,index)  
      break;
      case 'xj6':
         console.log(div.childNodes[1]) 
         index = 4
         createLeftDiv(div,index)  
      break;
      case 'xt-660':
         console.log(div.childNodes[1]) 
         index = 5
         createLeftDiv(div,index)  
      break;
      case 'Kawasaki-Ninja-H2R':
         console.log(div.childNodes[1]) 
         index = 6
         createLeftDiv(div,index)  
      break;
      case 'Kawasaki-Ninja-ZX-10R':
         console.log(div.childNodes[1]) 
         index = 7
         createLeftDiv(div,index)  
      break; 
      case 'Lightning-LS-218':
         console.log(div.childNodes[1]) 
         index = 8
         createLeftDiv(div,index)  
      break;
   }
   if (extraContent.childNodes.length>3){
      console.log(extraContent.childNodes)
      extraContent.removeChild(document.getElementById('extraInformationItem'))
      extraContent.removeChild(document.getElementById('curiositiesItem'))
   }
}

veiculos.forEach(function (ev){
   ev.addEventListener('click',function (ev){
      let bike = getVehileInformations(ev)
      bikeInformation(bike)
   })
})