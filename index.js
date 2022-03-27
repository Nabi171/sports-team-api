const loadPlayers = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/lookupformerteams.php?id=34147178').then(res => res.json()).then(data => displayplayers(data.formerteams))
}
loadPlayers();

const displayplayers = players => {
    const divContainer = document.getElementById('div-container');
    players.forEach(player => {
        console.log(player);
        const div = document.createElement('div');
        div.classList.add = ('col');
        div.innerHTML = `
        <div class="card p-3 ">
                       <img src="${player.strTeamBadge}" class="card-img-top" alt="...">
                       <div class="card-body">
                         <h5 class="card-title">${player.strPlayer}</h5>
                         <p class="card-text fw-bold">
                         Joined:${player.strJoined}<br>
                         Formerteam:${player.strFormerTeam}<br>
                         Move:${player.strMoveType}<br>                             
                         </p>
                      </div>
                  </div>`;
        divContainer.appendChild(div);
    });

}



