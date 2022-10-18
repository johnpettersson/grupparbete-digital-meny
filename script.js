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
      div2.classList.add("card");
      div2.classList.add("bg-dark");
      div2.classList.add("text-light");
      div3.classList.add("card-body");
      div4.classList.add("h5");
      div4.classList.add("mb-3");
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
