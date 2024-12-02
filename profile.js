const profileNameHeader = document.querySelector('h2.profile-name');

if (profileNameHeader) {
  profileNameHeader.innerHTML += `
    <div class="pull-right button-actions margin-right-10">
      <a href="#" id="addFriendButton">
        <span class="icon fas fa-user-plus padding-3 padding-left-8 padding-right-8" 
              data-placement="bottom" 
              data-toggle="tooltip" 
              title="Ajouter un ami">
        </span>
      </a>
    </div>
  `;

  // Ajouter l'événement "click" après avoir ajouté le bouton au DOM
  const addFriendButton = document.getElementById('addFriendButton');
  if (addFriendButton) {
    addFriendButton.addEventListener('click', addFriendFunction);
  }
}

function addFriendFunction(event) {
  event.preventDefault();

  const userId = 'mdoumi';  // Par exemple, cela pourrait venir du contexte utilisateur
  const friendId = 'lforgion';  // Id de l'ami (dynamique dans ton code)

  fetch('http://localhost:3000/addFriend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: userId, friend: friendId })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message); // Afficher le message de confirmation
  })
  .catch(error => {
    console.error('Erreur:', error);
  });
}
