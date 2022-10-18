const app = {
    menuItems: document.getElementById("menu-items"),
};

function fillMenu(post) {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    app.menuItems.append(div1);
    //app.menuItems.append(div1);
    div1.append(div2);
    //div2.classList.add("menu-head");
    //div2.insertAdjacentHTML("beforeend", `<h3>${post.name} ${post.price} kr</h3>`);
    div2.insertAdjacentHTML("beforeend", `<h3>${post.name}</h3>`);
    div2.insertAdjacentHTML("beforeend", `<h3>${post.price} kr</h3>`);
    div1.insertAdjacentHTML("beforeend", `<p>${post.descriptionSe}</p>`);
    div1.insertAdjacentHTML("beforeend", `<p>${post.descriptionEn}</p>`);
}

fetch("menu.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((post) => {
      fillMenu(post);
    });
  });
