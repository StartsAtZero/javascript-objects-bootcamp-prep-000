var playlist = {Madonna : "Vogue"}

function updatePlaylist(playlist, artistName, songTitle){
 return Object.assign({},playlist, {[artistName]: songTitle})
}
updatePlaylist(playlist, "Beyonce","Mine")