// function loadingPersons() {
//   for (let j = 1; j <= 87; j++) {
//     let f = i;
//     getPeople();
//   };
// };

let img = document.getElementById('actor-image');
console.log(img);

img.addEventListener('click', openModal);

function openModal(event) {
  console.log('click');
  console.log(event.target.alt);
  let actorName = event.target.alt;
  console.log(document.querySelector('.modal-content'));

  for (j = 1; j <= 87; j++) {
    numberPeople = j;
    var url = `https://swapi.co/api/people/${j}`;
    var actorModal = '';

    fetch(url)
      .then(function(response) {
        
        return response.json();
      }).then(function(data) {
        console.log(data);
        console.log(data.name);
        console.log(data.films);
        console.log(img);
        if (data.name === actorName) {
          actorModal += `
          <div class="modal-header">
          <button type="button" class="white close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">${data.name}</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <img class="col-xs-12 col-sm-6" src="">
            <div class="col-xs-12 col-sm-6">
              <p class="mod-subtitle">Actores Pincipales: <span class="mod-info"></span></p>
              <p class="mod-subtitle">Género: <span class="mod-info"></span></p>
              <p class="mod-subtitle">Director: <span class="mod-info"></span></p>
              <p class="mod-subtitle">Trama: <span class="mod-info"></span></p>
              <p class="mod-subtitle">Fecha de estreno: <span class="mod-info"></span></p>
              <p class="mod-subtitle">Duración: <span class="mod-info"></span></p>
            </div>
          </div>
        </div>
      <div class="modal-footer">
          `;
          document.querySelector('.modal-content').innerHTML = actorModal;
        };
      }).catch(function(error) {
        console.log('something went wrong');
      });
  }
}
  
// var url = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&gallery_id=72157692658085004&api_key=3823031f80a01564d3c4dd363c1108b2"
//  function getPhotos() {
//    const xhr = new XMLHttpRequest();
//    xhr.open('GET', "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&gallery_id=72157692658085004&api_key=3823031f80a01564d3c4dd363c1108b2");
//    xhr.onload = addPhotos;
//    xhr.send();
//  }

//  function addPhotos() {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
//  }
  

// let button = document.querySelector('#main-btn');
// let name = document.querySelector('#name');

// button.addEventListener('click', getInfo);

// function getInfo() {
//   axios.get('https://swapi.co/api/people/1')
//     .then(function(response) {
//       updateInfo(response.data);
//     });
// }

// function updateInfo(data) {
//   name.innerText = data.name;
// }