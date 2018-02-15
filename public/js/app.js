window.addEventListener('load', function() {
  let img = document.querySelector('.actor-image');
  // console.log(img); 
  img.addEventListener('click', openModal);

  function openModal(event) {
    event.preventDefault();
    // console.log('click');
    // console.log(event.target.alt);
    let actorName = event.target.alt;
    // console.log(document.querySelector('.modal-content'));

    for (j = 1; j <= 87; j++) {
      numberPeople = j;
      var url = `https://swapi.co/api/people/${j}`;
      var actorModal = '';

      fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(data) {
          // console.log(data);
          // console.log(data.name);
          // console.log(data.films);
          // console.log(img);
          if (data.name === actorName) {
            actorModal += `
          <div class="modal-header">
            <h4 class="modal-title">${data.name}</h4>
            <button type="button" class="white close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            <div>
              <p class="mod-subtitle">Year of Birth: ${data.birth_year} <span class="mod-info"></span></p>
              <p class="mod-subtitle">Gender: ${data.gender} <span class="mod-info"></span></p>
              <p class="mod-subtitle">Height: ${data.height} <span class="mod-info"></span></p>
              <p class="mod-subtitle">Skin color: ${data.skin_color} </p>
            </div>
          </div>
          `;
            document.querySelector('.modal-content').innerHTML = actorModal;
          };
        }).catch(function(error) {
          console.log('something went wrong');
        });
    }
  }
});
