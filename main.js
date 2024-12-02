// Sélectionner la div contenant les blocks
const row = document.querySelector('.container-fullsize .row');

// Créer un nouveau div avec la structure souhaitée
const newDiv = document.createElement('div');
newDiv.classList.add('col-lg-4', 'col-md-6', 'col-xs-12', 'fixed-height');

// Ajouter le contenu HTML à ce div
newDiv.innerHTML = `
  <div class="container-inner-item boxed" data-turbolinks-scaffold="inside">
  </div>
`;

// Insérer ce div à la fin de la div .row
if (row) {
  row.appendChild(newDiv);
}
