characters = [
  {
    name: "Colorie",
    img_src: "assets/characters/colorie.png",
    alt: "colorie_img",
    details:
      "Colorie is a little colorful radiant hummingbird who is not aware of a secret about himself. He lives with the Mendez family. He loves Santiago and Sebastian because they take good care of him.",
  },
  {
    name: "Ricco",
    img_src: "assets/characters/ricco.jpeg",
    alt: "rico_img",
    details:
      "Rico is a resplendant quetzal and one of Colorie's best friends. He is wise and smart.",
  },
  {
    name: "Piccolo",
    img_src: "assets/characters/piccolo.jpeg",
    alt: "piccolo_img",
    details:
      "Piccolo is a red summer tanager and Colorie's friend too. He has a sense of humor and likes to sing a lot.",
  },
  {
    name: "Fal",
    img_src: "assets/characters/fal.jpg",
    alt: "fal_img",
    details:
      "Fal is an American Kestrel. He is desperate to catch Colorie and eat him.",
  },
  {
    name: "Santiago",
    img_src: "assets/characters/santiago.jpeg",
    alt: "santiago_img",
    details:
      "Santiago is a thirteen year old boy who loves painting and taking care of animals.",
  },
  {
    name: "Sebastian",
    img_src: "assets/characters/sebastian.jpeg",
    alt: "sebastian_img",
    details:
      "Sebastian is Santiago's twin brother. He loves science and experiments.",
  },
  {
    name: "Alba",
    img_src: "assets/characters/alba.jpeg",
    alt: "alba_img",
    details:
      "Mrs Alba is Santiago's and Sebastian's grandmother. She has been taking care of them since the death of their parents.",
  },
  {
    name: "Ramona",
    img_src: "assets/characters/ramona.jpeg",
    alt: "ramona_img",
    details:
      "Ramona is a friend of Mrs Alba. She loves collecting paintings and gardening.",
  },
];

function closeImage() {
  var mod = document.getElementById("character-details");
  mod.style.display = "none";
}

function expandImage(element) {
  var mod = document.getElementById("character-details");
  mod.style.display = "block";
  var id = element.id.toLowerCase();
  characters.forEach((element) => {
    if (id === element.name.toLowerCase()) {
      var name = element.name;
      var src = element.img_src;
      var alt_name = element.alt;
      var detail = element.details;
      var img = document.getElementById("img_1");
      img.setAttribute("src", src);
      img.setAttribute("alt", alt_name);
      var title = document.getElementById("title");
      console.log(name);
      if (name.toLowerCase() === "alba") {
        title.innerText = "Mrs " + name;
      } else {
        title.innerText = name;
      }
      var caption = document.getElementById("caption");
      caption.innerText = detail;
    }
  });
}
