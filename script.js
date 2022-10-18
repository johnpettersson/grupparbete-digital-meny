const app = {
    menuItems: document.getElementById("menu-items"),
};

fetch("menu.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((post) => {
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            let div3 = document.createElement("div");
            let div4 = document.createElement("div");
            app.menuItems.append(div1);
            div1.append(div2);
            div2.append(div3);
            div3.append(div4);
            div1.classList.add("col-sm-6");
            div2.classList.add("card", "bg-dark", "text-light");
            div3.classList.add("card-body");
            div4.classList.add("h5", "mb-3");
            if (post.halfPrice) {
                div4.insertAdjacentHTML("beforeend", `<h3>${post.nameSE}</h3>`);
                div4.insertAdjacentHTML("beforeend", `<h3>Halv ${post.halfPrice}kr / Hel ${post.price}kr</h3>`);
            } else {
                div4.insertAdjacentHTML("beforeend", `<h3>${post.nameSE} ${post.price}kr</h3>`);
            }
            div3.insertAdjacentHTML("beforeend", `<p>${post.descSE}</p>`);
            div3.insertAdjacentHTML("beforeend", `<h3>${post.nameEN}</h3>`);
            div3.insertAdjacentHTML("beforeend", `<p>${post.descEN}</p>`);
            post.element = div1;
            app.data = data;
        });
    });

const lowestPriceBtn = document.getElementById("lowestPrice");
lowestPriceBtn.addEventListener('change', function () {
    if (lowestPriceBtn.checked)
    app.data.sort((a, b) => a.price - b.price).forEach((priceOrderLowest, index) => priceOrderLowest.element.style.order = index)
    else
    app.data.forEach((priceOrderHighest, index) => priceOrderHighest.element.style.order = 0)
})

const highestPriceBtn = document.getElementById("highestPrice");
highestPriceBtn.addEventListener('change', function () {
    if (highestPriceBtn.checked)
        app.data.sort((a, b) => b.price - a.price).forEach((priceOrderHighest, index) => priceOrderHighest.element.style.order = index)
    else
        app.data.forEach((priceOrderHighest, index) => priceOrderHighest.element.style.order = 0)
})

let checkboxGluten = document.getElementById("gluten");
let checkboxLactose = document.getElementById("lactose");
let checkBoxEgg = document.getElementById("egg");
let checkboxNuts = document.getElementById("nuts");

checkboxGluten.addEventListener("change", onAllergyCheckboxChange)
checkboxLactose.addEventListener("change", onAllergyCheckboxChange);
checkBoxEgg.addEventListener("change", onAllergyCheckboxChange);
checkboxNuts.addEventListener("change", onAllergyCheckboxChange);

function onAllergyCheckboxChange() {	

	// visar alla element
	app.data.forEach(item => item.element.classList.remove("allergy"));


	// kollar vilka checkboxar som är checkade
	let allergies = [];
	if(checkboxGluten.checked)
		allergies.push("gluten");
	if(checkboxLactose.checked)
		allergies.push("dairy");
	if(checkBoxEgg.checked)
		allergies.push("egg");
	if(checkboxNuts.checked)
		allergies.push("nuts");

	// filtrerar och gömmer items som innehåller det som checkats för
	app.data.filter(item => item.allergies && item.allergies.some(a => allergies.includes(a)))
	.forEach(item => {
		item.element.classList.add("allergy")
	})
}
  function checkboxChange () {
  app.data.forEach(item => item.element.classList.add("hidden"));
  if (meatBtn.checked)
  app.data.filter(menuItems => menuItems.type === "meat").forEach((noMeat) => noMeat.element.classList.remove("hidden"))
  if(vegBtn.checked)
  app.data.filter(menuItems => menuItems.type === "veg").forEach((noVeg) => noVeg.element.classList.remove("hidden"))
  if(fishBtn.checked)
  app.data.filter(menuItems => menuItems.type === "fish").forEach((noFish) => noFish.element.classList.remove("hidden"))
  }

  const meatBtn = document.getElementById("meat");
  const vegBtn = document.getElementById("veg");
  const fishBtn = document.getElementById("fish");

  meatBtn.addEventListener('change',checkboxChange) 
  vegBtn.addEventListener('change',checkboxChange)
  fishBtn.addEventListener('change',checkboxChange)
