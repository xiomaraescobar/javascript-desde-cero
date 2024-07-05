// methods that modify the array(mutable).

//shift() 

const colors = ['yellow', 'blue', 'red']
const removedColors = colors.shift() //shift remueve el primer valor del array en este caso removio el amarillo

console.log(colors)
console.log(removedColors)

//unshift //agrega valores al array

const newColors = colors.unshift('pink', 'purple')

console.log(colors)
console.log(newColors)

// Exercise: playlist //Ejercio playlist

function managePlaylist (playlist,newSong) {
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}
const initialPlaylist = ['Dame tus ojos', 'La niña de tus ojos', 'Si tu presencia conmigo no va']
console.log(initialPlaylist)
const newSongToAdd = 'Tu gracia'

const updatePlaylist = managePlaylist(initialPlaylist, newSongToAdd)

console.log('Initial playlist:', initialPlaylist)
console.log('New song to add: ', newSongToAdd)
console.log('Update playlist: ', updatePlaylist)