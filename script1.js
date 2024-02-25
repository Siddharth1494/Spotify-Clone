console.log("Welcome to spotify");

//Initialasation the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementsByClassName('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq 2", filePath:"songs/2.mp3" , coverPath:"covers/2.jpg"},
    {songName: "Salam-e-Ishq 3", filePath:"songs/3.mp3" , coverPath:"covers/3.jpg"},
    {songName: "Salam-e-Ishq 4", filePath:"songs/4.mp3" , coverPath:"covers/4.jpg"},
    {songName: "Salam-e-Ishq 5", filePath:"songs/5.mp3" , coverPath:"covers/5.jpg"},
    {songName: "Salam-e-Ishq 6 ", filePath:"songs/6.mp3" , coverPath:"covers/6.jpg"},
    {songName: "Salam-e-Ishq 7", filePath:"songs/7.mp3" , coverPath:"covers/7.jpg"},
    {songName: "Salam-e-Ishq 8", filePath:"songs/8.mp3" , coverPath:"covers/8.jpg"},
    {songName: "Salam-e-Ishq 9", filePath:"songs/9.mp3" , coverPath:"covers/9.jpg"},
    {songName: "Salam-e-Ishq 10", filePath:"songs/10.mp3" , coverPath:"covers/10.jpg"},
    
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("song")[0].innerText = songs[i].songName;
})

//Handle play/pause click
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('ri-play-circle-fill');
        masterPlay.classList.add('ri-pause-circle-fill');
        gif.style.opacity = 1;
    }
    else{

        audioElement.pause();
        masterPlay.classList.remove('ri-pause-circle-fill');
        masterPlay.classList.add('ri-play-circle-fill');
        gif.style.opacity = 0;

    }
});

//listen to events
audioElement.addEventListener('timeupdate', ()=> {
    //Update SeekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
});

const  makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.add('ri-play-circle-fill')
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>
{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('ri-play-circle-fill');
        e.target.classList.add('ri-pause-circle-fill');
        audioElement.src = 'songs/${index+1}.mp3';
        audioElement.currentTime =  0;
        audioElement.play();
        masterPlay.classList.remove('ri-play-circle-fill');
        masterPlay.classList.add('ri-pause-circle-fill');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})




  