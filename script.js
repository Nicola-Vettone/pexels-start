fetch("https://api.pexels.com/v1/search?query=hamsters", {
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

    photosObj.photos.forEach((photo) => {
      const col = document.createElement("div");
      col.classList.add("col-md-4");
      console.log(photo.src.large);

      col.innerHTML = ` <div class="card mb-4 shadow-sm">
                <img src=${photo.src.large} class="bd-placeholder-img card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
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
  })
  .catch((error) => console.error("Errore:", error));
