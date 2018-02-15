let img = document.querySelector('.actor-image');
console.log(img);

img.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
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
