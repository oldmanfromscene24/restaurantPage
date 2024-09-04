import pizzaImage from "../diMatteo.jpg";   

export function createHome() {
const divContent = document.createElement("div");
divContent.id = "content";
document.body.appendChild(divContent);

const h1Title = document.createElement("h1");
h1Title.id = "title";
h1Title.className = "main";
h1Title.textContent = "Bestest Pizza!!!"
divContent.appendChild(h1Title);

const divLogo = document.createElement("div");
divLogo.id = "logo";
divLogo.className = "main";
divContent.appendChild(divLogo);

const image = document.createElement("img");
image.src = pizzaImage;
image.width=500;
image.height=281;
divLogo.appendChild(image);

const pAds = document.createElement("p");
pAds.id = "ads";
pAds.className = "main";
pAds.textContent = "Do you want a pizza like that? Go no further!";
divContent.appendChild(pAds);

const ul = document.createElement("ul");
ul.className = "main";
divContent.appendChild(ul);

const h2 = document.createElement("h2");
h2.textContent = "Hours"
ul.appendChild(h2);

const li1 = document.createElement("li");
li1.textContent = "Monday: closed"
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "Tuesday: closed<"
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "Wednesday: 7pm - 11pm"
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.textContent = "Thursday: 7pm - 11pm"
ul.appendChild(li4);

const li5 = document.createElement("li");
li5.textContent = "Friday: 7pm - 11pm"
ul.appendChild(li5);

const li6 = document.createElement("li");
li6.textContent = "Saturday: 11:30am - 2:30pm / 6pm - 12pm"
ul.appendChild(li6);

const li7 = document.createElement("li");
li7.textContent = "Monday: closed"
ul.appendChild(li7);

}

