const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];


// Milestone 1
/* creo ciclo for per prelevare elemento corrente(oject) 
   dall Array
*/


// for(let i = 0; i<images.length; i++) {
//   const curElem = images[i];
//   console.log("-------------------------");
//   console.log(curElem.title);
//   console.log(curElem.image);
//   console.log(curElem.text);
// }

// collego questa variabile all elemento dom tramite querySelector
const contCarouselImg = document.querySelector(".my-carousel-images");

images.forEach((curElem) => {
  console.log("-------------")
  console.log(curElem.title);
  console.log(curElem.image);
  console.log(curElem.text);
  curElem =
   ` 
   <div class="my-carousel-item active" carousel-item="1">
   <img
     class="img-fluid"
     src="${curElem.image}"
     alt="Marvel's Spiderman Miles Morale picture"
   />
   <div class="item-description px-3">
     <h2>${curElem.title}</h2>
     <p>${curElem.text}</p>
   </div>
 </div>
    
    `

  contCarouselImg.innerHTML += curElem; 
})




