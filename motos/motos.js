document.getElementById('cars').addEventListener('click',function(){
   window.location.href="../index.html"
})
let veiculos = document.querySelectorAll('.itens')
let extraContent = document.getElementById('especificExtraInformation')
let power;
let productionYears;
let index = 0;
let bikeStatus = [
   {engineModel:`4 tempos, 4 cilindros em linha, 16V, DOHC`,enginePower:`210 cv/999 cc`,torque:`11,52 Ngm`,transmission:`Caixa de 6 velocidades`,weight:`175,5 kg`,fuelTank:`17,5 L`,
   curiosities:['Design inspirado no "Predador": A BMW S1000RR possui um design agressivo e único, com luzes assimétricas em forma de "olhos" que lembram a criatura alienígena.','Controle de tração avançado: Equipada com um sistema eletrônico de controle de tração, a S1000RR ajusta a potência e o freio motor para otimizar a tração em diferentes condições de pilotagem.','Sucesso nas pistas: A S1000RR conquistou vitórias e títulos no Campeonato Mundial de Superbike, demonstrando seu domínio nas competições de superbike.','Tecnologia de ponta: Com recursos como painel digital, modos de pilotagem, quick-shifter bidirecional e suspensão eletrônica, a S1000RR oferece uma experiência de pilotagem avançada.',]},
   {engineModel:`DOHC, 4 cilindros`,enginePower:`216,2 cv/999 cc`,torque:`11,5 kgf.m`,transmission:`Caixa de Caixa de 6 velocidades com quickshifter`,weight:`189 kg`,fuelTank:`16,1 L`,
   curiosities:['Origem do nome: O nome "Fireblade" foi inspirado no conceito de uma "lâmina de fogo", representando a potência e velocidade impressionantes que a motocicleta oferece.','Desenvolvimento em parceria com pilotos: A Honda envolveu pilotos profissionais no processo de desenvolvimento da Fireblade para obter feedback valioso e garantir que a motocicleta atendesse às demandas e expectativas dos pilotos de alto nível.','Tecnologia de controle de deslizamento: A Fireblade introduziu o Sistema de Controle de Deslizamento (SLC), que atua durante reduções rápidas de marcha para evitar o bloqueio da roda traseira, proporcionando maior estabilidade e segurança em curvas e frenagens.','Conquistas nas corridas: A Fireblade acumulou inúmeras vitórias e títulos em competições de superbike e corridas de estrada ao redor do mundo.']},
   {engineModel:`V4 90° equipado com o Desmosedici Stradale`,enginePower:`215,5 cv/1.103 cc`,torque:`12,6 Ngm`,transmission:`Caixa de 6 velocidades`,weight:`174 kg`,fuelTank:`16 L`, 
   curiosities:['Motor deslumbrante: A Panigale V4R é equipada com um motor V4 de 998 cc, tornando-a a primeira motocicleta de produção em série da Ducati com um motor de quatro cilindros. Com sua configuração exclusiva','Sistema de asas aerodinâmicas: A V4R é a primeira motocicleta da Ducati a apresentar asas aerodinâmicas integradas na carenagem frontal, ajudando a gerar downforce.','Desempenho campeão: A Panigale V4R foi projetada para o Campeonato Mundial de Superbike (WSBK), com o objetivo de competir e vencer nas pistas.','Exclusividade e edição limitada: A Ducati Panigale V4R é uma motocicleta de edição limitada, destinada a colecionadores e entusiastas de motocicletas de alto desempenho.']},
   {engineModel:`4 tempos, 4 cilindros, 16V DOHC`,enginePower:`102 cv/599,3 cc`,torque:`6,53 Ngm`,transmission:`Caixa de 6 velocidades`,weight:`173/177 kg`,fuelTank:`18 L`,curiosities:['Estilo "naked" icônico: A Hornet 600 é conhecida por seu design "naked", que apresenta linhas limpas, sem carenagem, e uma aparência minimalista e agressiva.','Popularidade duradoura: A Hornet 600 conquistou uma base de fãs leais ao longo dos anos, graças à sua confiabilidade, desempenho sólido e manutenção acessível.','Personalização: A Hornet 600 oferece muitas opções de personalização, permitindo que os proprietários adicionem acessórios e façam ajustes para adequar a motocicleta ao seu estilo e preferências individuais.','Comunidade de entusiastas: A Hornet 600 tem uma comunidade ativa de entusiastas ao redor do mundo, que compartilham informações, dicas e experiências sobre essa motocicleta.']},
   {engineModel:`4 tempos, 4 cilindros, 16V DOHC`,enginePower:`77,5 cv/600 cc`,torque:`6,08 Ngm`,transmission:`Caixa de 6 velocidades`,weight:`205 kg`,fuelTank:`17 L`,curiosities:['Estilo naked moderno: A XJ6 apresenta um estilo naked contemporâneo, com linhas limpas e uma aparência esportiva.','Versatilidade urbana: A Yamaha XJ6 é uma motocicleta projetada para uso urbano e viagens diárias. Seu design ágil e compacto permite manobras fáceis em áreas urbanas congestionadas.','Acessibilidade e manutenção: A XJ6 é valorizada por sua acessibilidade e facilidade de manutenção. Peças de reposição são amplamente disponíveis e o custo de manutenção é relativamente baixo.','Conforto e facilidade de condução: A XJ6 é conhecida por sua ergonomia amigável ao piloto. O assento confortável e a posição de pilotagem relaxada permitem longos períodos de condução sem desconforto.']},
   {engineModel:`4 tempos, 1 cilindro vertical, 2 válvulas, OHC/SOHC`,enginePower:`48 cv/660 cc`,torque:`5,95 Ngm`,transmission:`Caixa de 5 velocidades`,weight:`165 kg`,fuelTank:`15 L`,curiosities:['aventuras fora de estrada. Com sua suspensão robusta, pneus de perfil misto e altura elevada do solo.','Potência confiável: Equipada com um motor de 660 cc, a XT660 oferece uma potência confiável para lidar com diversas situações off-road. Seu torque e resposta do acelerador garantem bom desempenho tanto em subidas íngremes quanto em terrenos mais acidentados.','Design durável: A XT660 possui um design robusto e resistente, com proteções de motor e carenagens que ajudam a proteger a motocicleta contra impactos e respingos de lama durante aventuras off-road.','Meiota: no Brasil ficou popularmente conhecinda como meiota, isso ocorreu por conta da musica "meiota" do MC Kekel. Com o sucesso da música a XT660 se transformou na famosa "meiota" por muitos fãs do funk.']},
   {engineModel:`4 tempos, 4 cilindros, 16 válvulas, supercharger, DOHC`,enginePower:`310 cv/998 cc`,torque:` 16,6 Ngm`,transmission:`Caixa de 6 velocidades`,weight:`216 kg`,fuelTank:`17 L`,curiosities:['Supercarregada: A Kawasaki Ninja H2R é a única motocicleta de produção em série com um sistema de sobrealimentação (supercharger).','Design aerodinâmico: A Ninja H2R possui um design altamente aerodinâmico, com carenagem e asas integradas para maximizar a pressão aerodinâmica e a estabilidade em altas velocidades.','Tecnologia de ponta: A Ninja H2R é repleta de tecnologia avançada, incluindo um sistema de controle de tração, freios ABS, painel de instrumentos TFT e modos de pilotagem ajustáveis.','Edição limitada: A Kawasaki Ninja H2R é produzida em uma quantidade limitada e numerada, tornando-a uma moto altamente exclusiva e desejada por colecionadores e entusiastas.']}, 
   {engineModel:`4 tempos, 4 cilindros em linha, 16 válvulas, DOHC`,enginePower:`203 cv/998 cc`,torque:` 11,7 Ngm`,transmission:`Caixa de 6 velocidades`,weight:`207 kg`,fuelTank:`17 L`,curiosities:['Dominação nas pistas: A Kawasaki Ninja ZX 10R tem um histórico impressionante de sucesso nas competições de superbike. É uma das motocicletas mais vitoriosas nas corridas do Campeonato Mundial de Superbike.','Tecnologia de corrida: A Ninja ZX 10R incorpora tecnologia de ponta desenvolvida a partir das competições de corrida, como o sistema de gerenciamento de tração Kawasaki Intelligent anti-lock Brake System (KIBS) e o sistema de controle de largada (launch control).','Eletrônica avançada: A Ninja ZX 10R possui uma variedade de recursos eletrônicos, como modos de pilotagem ajustáveis, controle de tração, quick-shifter (trocas de marcha sem embreagem) e controle de freio motor.','Renovação contínua: A Kawasaki continua a aprimorar a ZX 10R, lançando atualizações e versões aprimoradas ao longo dos anos.']},
   {engineModel:`IPM, motor elétrico`,enginePower:`200 cv`,torque:` 23.1 Ngm`,transmission:`Única marcha por ser elétrica`,weight:`206 kg`,fuelTank:`113-161 km aproximadamente por ser elétrico`, curiosities: ['Velocidade surprendente: A Lightning LS 218 é uma das motocicletas mais rápidas do mundo. Seu nome "LS 218" se refere à sua velocidade máxima de 218 milhas por hora (350 km/h), tornando-a uma das mais rápidas em produção.','Inovação tecnológica: A Lightning LS 218 é equipada com tecnologia avançada, incluindo sistemas de gerenciamento eletrônico, controle de tração ajustável, freios de alto desempenho e conectividade.','Motor elétrico poderoso: A LS 218 é uma motocicleta elétrica que apresenta um motor elétrico potente. Combinando torque instantâneo e aceleração impressionante.','Exclusividade e artesanato: A Lightning LS 218 é produzida em pequenas quantidades, com foco em qualidade e artesanato. Cada motocicleta é montada manualmente, garantindo atenção aos detalhes e proporcionando uma experiência única para os proprietários.']}]
// Criar a div do conteúdo específico sobre a moto clicada
function createLeftDiv(mainBike,index){
   let div = document.createElement('div')
   let h3 = document.createElement('h3')
   let p = document.createElement('p')
   let photo = mainBike.childNodes[1].cloneNode(true)  // Pegar a mesma imagem da principal
   photo.className = 'informations-photo'
   h3.innerText= mainBike.dataset.bikeModel
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
   let div = document.createElement('div')
   div.id = 'curiositiesItem'
   let h3 = document.createElement('h3')
   h3.innerText='Curiosidades adicionais'
   let ul = document.createElement('ul')
   for(i = 0;i<4;i++){
      let li = document.createElement('li')
      li.innerText = bikeStatus[index].curiosities[i]
      ul.appendChild(li)
   }
   div.append(h3,ul)
   return div
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
   let div = bike[0].cloneNode(true)  
   switch (bike[1]){
      case 'BMW-1000RR':   
         index = 0       
         createLeftDiv(div, index)
         break;
      case 'CBR-1000RR-Fireblade': 
         index = 1
         createLeftDiv(div,index) 
      break;
      case 'Ducati-Panigale-V4R': 
         index = 2    
         createLeftDiv(div,index)  
      break;
      case 'hornet-600': 
         index = 3
         createLeftDiv(div,index)  
      break;
      case 'xj6': 
         index = 4
         createLeftDiv(div,index)  
      break;
      case 'xt-660': 
         index = 5
         createLeftDiv(div,index)  
      break;
      case 'Kawasaki-Ninja-H2R': 
         index = 6
         createLeftDiv(div,index)  
      break;
      case 'Kawasaki-Ninja-ZX-10R': 
         index = 7
         createLeftDiv(div,index)  
      break; 
      case 'Lightning-LS-218': 
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