import $ from 'jquery';

export function playerStats(currentGame) {
  currentGame.limitPlayerStats();
  $('#player-class').html(`<strong>Class:</strong> ${currentGame.playerCharacter.archetype}`);
  $('#sleep-level').html(`<strong>Sleep:</strong> ${currentGame.playerCharacter.sleep}`);
  $('#sanity-level').html(`<strong>Sanity:</strong> ${currentGame.playerCharacter.sanity}`);
  $('#player-items').html(`<strong>Items:</strong> ${currentGame.playerCharacter.items}`);
  currentGame.playerCharacter.items.forEach(function(item){
    $('#player-options').append(`<option value="use ${item.product}">Use ${item.product}</option>`);
  });
}

export function enemyStats(currentGame) {
  $('#enemy-title').html(`<strong>Title:</strong> ${currentGame.enemy.title}`);
  $('#enemy-power').html(`<strong>Power:</strong> ${currentGame.enemy.power}`);
}

export function shopItems(currentGame) {
  currentGame.shopItems.forEach(function(item){
    $('#store-options').append(`<option value="${item.product}"> ${item.product}, $${item.price} (sleep ${item.sleepEffect}, sanity ${item.sanityEffect}, enemy power ${item.powerEffect})</option>`);
  });
}
