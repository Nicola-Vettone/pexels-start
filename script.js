const URL = "https://api.pexels.com/v1/search?query=";
const query = ["hamsters", "tigers"];

fetch(URL + query[0], {
  headers: {
    Authorization: "Kk3phZEnBMs8AxnxcGTt1CYW4Ij70jyy7oyNe1lIHpy0xaXp077DcCKO",
  },
})
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nella richiesta: " + response.status);
    }
  })
  .then((photosObj) => {
    console.log(photosObj);
    const row = document.querySelector("#row");
    console.log(photosObj.photos);

    const loadImages = document.querySelector("#load");

    loadImages.onclick = function () {
      loadPhoto();
    };

    function loadPhoto() {
      photosObj.photos.forEach((photo) => {
        // Creazione della colonna
        const col = document.createElement("div");
        col.classList.add("col-md-4");

        // Creazione della card
        const card = document.createElement("div");
        card.classList.add("card", "mb-4", "shadow-sm");
        col.appendChild(card);

        // Aggiunta dell'immagine
        const img = document.createElement("img");
        img.classList.add("bd-placeholder-img", "card-img-top");
        img.src = photo.src.large; // Imposta il percorso dell'immagine
        img.alt = photo.alt; // Imposta l'alt
        card.appendChild(img);

        // Creazione del body della card
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        // Aggiunta del titolo (fotografo)
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerHTML = photo.photographer;
        cardBody.appendChild(title);

        // Aggiunta della descrizione
        const descr = document.createElement("p");
        descr.classList.add("card-text");
        descr.innerHTML = photo.alt;
        cardBody.appendChild(descr);

        // Creazione del contenitore per i pulsanti
        const dFlex = document.createElement("div");
        dFlex.classList.add("d-flex", "justify-content-between", "align-items-center");
        cardBody.appendChild(dFlex);

        // Creazione del gruppo di pulsanti
        const divBtn = document.createElement("div");
        divBtn.classList.add("btn-group");
        dFlex.appendChild(divBtn);

        // Aggiunta del pulsante "View"
        const button = document.createElement("a");
        button.innerText = "View";
        button.classList.add("btn", "btn-sm", "btn-outline-secondary");
        divBtn.appendChild(button);

        // Aggiunta del pulsante "Hide"
        const button2 = document.createElement("a");
        button2.innerText = "Hide";
        button2.classList.add("btn", "btn-sm", "btn-outline-secondary");
        divBtn.appendChild(button2);

        function elimina() {
          col.classList.add("d-none");
        }
        button2.onclick = function () {
          elimina();
        };

        // Appendi la colonna alla riga
        row.appendChild(col);
      });
    }
  })
  .catch((error) => console.error("Errore:", error));

fetch(URL + query[1], {
  headers: {
    Authorization: "Kk3phZEnBMs8AxnxcGTt1CYW4Ij70jyy7oyNe1lIHpy0xaXp077DcCKO",
  },
})
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nella richiesta: " + response.status);
    }
  })
  .then((photosObj) => {
    console.log(photosObj);
    const row = document.querySelector("#row");
    console.log(photosObj.photos);

    const loadImages = document.querySelector("#load2");

    loadImages.onclick = function () {
      loadPhoto();
    };

    function loadPhoto() {
      photosObj.photos.forEach((photo) => {
        // Creazione della colonna
        const col = document.createElement("div");
        col.classList.add("col-md-4");

        // Creazione della card
        const card = document.createElement("div");
        card.classList.add("card", "mb-4", "shadow-sm");
        col.appendChild(card);

        // Aggiunta dell'immagine
        const img = document.createElement("img");
        img.classList.add("bd-placeholder-img", "card-img-top");
        img.src = photo.src.large; // Imposta il percorso dell'immagine
        img.alt = photo.alt; // Imposta l'alt
        card.appendChild(img);

        // Creazione del body della card
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        // Aggiunta del titolo (fotografo)
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerHTML = photo.photographer;
        cardBody.appendChild(title);

        // Aggiunta della descrizione
        const descr = document.createElement("p");
        descr.classList.add("card-text");
        descr.innerHTML = photo.alt;
        cardBody.appendChild(descr);

        // Creazione del contenitore per i pulsanti
        const dFlex = document.createElement("div");
        dFlex.classList.add("d-flex", "justify-content-between", "align-items-center");
        cardBody.appendChild(dFlex);

        // Creazione del gruppo di pulsanti
        const divBtn = document.createElement("div");
        divBtn.classList.add("btn-group");
        dFlex.appendChild(divBtn);

        // Aggiunta del pulsante "View"
        const button = document.createElement("a");
        button.innerText = "View";
        button.classList.add("btn", "btn-sm", "btn-outline-secondary");
        divBtn.appendChild(button);

        // Aggiunta del pulsante "Hide"
        const button2 = document.createElement("a");
        button2.innerText = "Hide";
        button2.classList.add("btn", "btn-sm", "btn-outline-secondary");
        divBtn.appendChild(button2);

        function elimina() {
          col.classList.add("d-none");
        }
        button2.onclick = function () {
          elimina();
        };

        // Appendi la colonna alla riga
        row.appendChild(col);
      });
    }
  })
  .catch((error) => console.error("Errore:", error));
