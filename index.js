// Write your code here!

main.remove();

const newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.textContent = "Philip is the champion";

document.body.append(newHeader);















/*
const element = document.createElement("div");

document.body.append(element);

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);
*/







/*
element.textContent = "You've changed what's on the screen!";

element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

element.className = "pet-listing dog";

<main id="main" class="pet-listing dog"></main>

element.classList.remove("dog");
element.classList.add("cat", "sale");

<main id="main" class="pet-listing cat sale"></main>
*/