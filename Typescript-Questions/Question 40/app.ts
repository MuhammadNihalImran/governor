type Album = {
    artist: string;
    title: string;
    tracks?: number;
};


function make_album(artist: string, title: string, tracks?: number){
    const album: Album = {
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