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
        const col = document.createElement("div");
        col.classList.add("col-md-4");
        console.log(photo.src.large);

        col.innerHTML = ` <div class="card mb-4 shadow-sm">
                  <img src=${photo.src.large} class="bd-placeholder-img card-img-top" />
                  <div class="card-body">
                    <h5 class="card-title">${photo.photographer}</h5>
                    <p class="card-text">
                    ${photo.alt}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>`;

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
        const col = document.createElement("div");
        col.classList.add("col-md-4");
        console.log(photo.src.large);

        col.innerHTML = ` <div class="card mb-4 shadow-sm">
                    <img src=${photo.src.large} class="bd-placeholder-img card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title">${photo.photographer}</h5>
                      <p class="card-text">
                      ${photo.alt}
                      </p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>`;

        row.appendChild(col);
      });
    }
  })
  .catch((error) => console.error("Errore:", error));
