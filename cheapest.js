const phones=[
    {   name:'iphone-13',
        network:'GSM',
        launch:2021,
        body:'glass front',
        display:'Super Retina XDR OLED',
        size:'6.7 inches',
        os:'iOS 15',
        memory:'128GB 6GB RAM',
        main_camera:'19 MP',
        sound:'Yes, with stereo speakers',
        price:22000
    },
        {
            name:'nokia',
            network:'GSM',
            launch:2021,
            body:'glass front',
            display:'Super Retina XDR OLED',
            size:'6.7 inches',
            os:'iOS 15',
            memory:'128GB 6GB RAM',
            main_camera:'12 MP',
            sound:'Yes, with stereo speakers',
            price:120000
        },
        {
            name:'Glaxy',
            network:'GSM',
            launch:2021,
            body:'glass front',
            display:'Super Retina XDR OLED',
            size:'6.7 inches',
            os:'iOS 15',
            memory:'128GB 6GB RAM',
            main_camera:'17 MP',
            sound:'Yes, with stereo speakers',
            price:30000
        },
        {
            name:'Vivo',
            network:'GSM',
            launch:2021,
            body:'glass front',
            display:'Super Retina XDR OLED',
            size:'6.7 inches',
            os:'iOS 15',
            memory:'128GB 6GB RAM',
            main_camera:'22 MP',
            sound:'Yes, with stereo speakers',
            price:13000
        }
        
];

// function cheapestphone(phones){
    
//     let cheapest =phones[0];
//     for(let i=0;i<phones.length;i++){
//         const phone=phones[i];
//         if(phone.price<cheapest.price){
//             cheapest=phone;
//         }
//     }
//     return cheapest;
// }

//  let myselction=cheapestphone(phones);
//  console.log(myselction);

function higestcamera(phones){
    let highest=phones[0];
    for(let i=0;i<phones.length;i++){
        let phone=phones[i];
        if(phone.main_camera>highest.main_camera){
            phone=highest;
        }
    }
    return phone;
}
let veiw=cheapestphone(phones);
console.log(veiw);