var playlist = {Madonna : "Vogue"}

function updatePlaylist(playlist, artistName, songTitle){
 return Object.assign({},playlist, {[artistName]: songTitle})
}
updatePlaylist(playlist, "Beyonce","Mine")

function removeFromPlaylist(playlist, artistName){
 delete playlist.artistName;
 return playlist
}
removeFromPlaylist(playlist, "Madonna");