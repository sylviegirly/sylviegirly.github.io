const songsByStyle = window.songsByStyle || {
    // fallback default playlist
    Rock: [{ title: "Default Song", src: "path/to/default.mp3" }]
};

// Flatten for player logic
const songs = [];
const songIndexMap = [];
Object.entries(songsByStyle).forEach(([style, list]) => {
    list.forEach((song) => {
        songs.push({ ...song, style });
        songIndexMap.push({ style, index: songs.length - 1 });
    });
});

let currentSongIndex = 0;
let audio = new Audio(songs[currentSongIndex].src);
let isPlaying = false;

const playPauseButton = document.getElementById("play-pause");
const skipButton = document.getElementById("skip-song");
const rewindButton = document.getElementById("rewind");
const songDropdown = document.getElementById("song-dropdown");

function updatePlayPauseIcon() {
    const icon = playPauseButton.querySelector("i");
    if (isPlaying) {
        icon.className = "fa fa-pause";
    } else {
        icon.className = "fa fa-play";
    }
}

function loadSong(index) {
    audio.src = songs[index].src;
    // Update the marquee text
    const marquee = document.getElementById("current-song");
    if (marquee) {
        marquee.textContent = songs[index].title;
    }
    songDropdown.value = index;
}

function playSong() {
    audio.play();
    isPlaying = true;
    updatePlayPauseIcon();
}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    updatePlayPauseIcon();
}

function togglePlayPause() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function skipSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
        playSong();
    }
}

function rewindSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
        playSong();
    }
}

playPauseButton.addEventListener("click", togglePlayPause);
skipButton.addEventListener("click", skipSong);
rewindButton.addEventListener("click", rewindSong);

// Populate dropdown with optgroups
songDropdown.innerHTML = "";
Object.entries(songsByStyle).forEach(([style, list]) => {
    const group = document.createElement("optgroup");
    group.label = style;
    list.forEach((song, idx) => {
        // Find the index in the flat songs array
        const flatIndex = songs.findIndex((s) => s.title === song.title && s.style === style);
        const option = document.createElement("option");
        option.value = flatIndex;
        option.innerText = song.title;
        group.appendChild(option);
    });
    songDropdown.appendChild(group);
});

loadSong(currentSongIndex);
songDropdown.addEventListener("change", function () {
    currentSongIndex = parseInt(this.value, 10);
    loadSong(currentSongIndex);
    if (isPlaying) {
        playSong();
    }
});
