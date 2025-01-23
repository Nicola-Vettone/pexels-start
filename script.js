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
  })
  .then((photosObj) => {
    console.log(photosObj); 
  })
  .catch((error) => console.error("Errore:", error));
