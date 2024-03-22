"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("The Beatles", "Abbey Road");
const album2 = make_album("Michael Jackson", "Thriller");
const album3 = make_album("Ed Sheeran", "Divide", 16);
console.log(album1);
console.log(album2);
console.log(album3);
