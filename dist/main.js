(()=>{"use strict";function t(t,e){const a=document.createElement("img");a.classList.add("menu-img"),a.src=e,a.alt="Image of Menu",t.appendChild(a)}function e(t,e){const a=document.createElement("p");a.classList.add("intro"),a.textContent=e,t.appendChild(a)}const a={paraText1:"lorem ipsum dolor sit amet, consectet",paraText2:"lorem ipsum dolor sit amet, consectet",paraText3:"lorem ipsum dolor sit amet, consectet"};function n(){const t=document.querySelector("#content");t.replaceChildren();const n=document.createElement("h1");n.textContent="Welcome to Luxurious Restaurant :)",n.classList.add("landing-title"),t.appendChild(n);const s=document.createElement("img");s.classList.add("top-img"),s.src="https://images.jdmagicbox.com/comp/kanpur/g6/0512px512.x512.180514200244.e4g6/catalogue/vessel-restaurant-anwarganj-kanpur-home-delivery-restaurants-2cn0s.jpg?clr=#334125",s.alt="Image of Restaurant",t.appendChild(s),e(t,a.paraText1),e(t,a.paraText2),e(t,a.paraText3)}const s={srcLink1:"./dist/assests/menu-img.jpg",srcLink2:"./dist/assests/pizza-img.jpg",srcLink3:"./dist/assests/burger-img.jpg",srcLink4:"./dist/assests/pasta-img.jpg",paraText1:"1. Pizza",paraText2:"2. Burger",paraText3:"3. Pasta"};function c(){const a=document.querySelector("#content");a.replaceChildren();const n=document.createElement("h1");n.textContent="Menu :)",n.classList.add("landing-title"),a.appendChild(n),t(a,s.srcLink1),e(a,s.paraText1),t(a,s.srcLink2),e(a,s.paraText2),t(a,s.srcLink3),e(a,s.paraText3),t(a,s.srcLink4)}const r={srcLink1:"./dist/assests/contact-img.jpg",srcLink2:"./dist/assests/map-img.jpg",srcLink3:"./dist/assests/email-img.png",srcLink4:"./dist/assests/phone-img.png",paraText1:"1. Location ( Kanpur )",paraText2:"2. Email ( aatiqafzal1443@gmail.com)",paraText3:"3. Phone ( +91 9140678627 )"};function i(){const a=document.querySelector("#content");a.replaceChildren();const n=document.createElement("h1");n.textContent="Contact :)",n.classList.add("landing-title"),a.appendChild(n),t(a,r.srcLink1),e(a,r.paraText1),t(a,r.srcLink2),e(a,r.paraText2),t(a,r.srcLink3),e(a,r.paraText3),t(a,r.srcLink4)}n(),document.querySelector(".home").addEventListener("click",n),document.querySelector(".menu").addEventListener("click",c),document.querySelector(".contact").addEventListener("click",i)})();