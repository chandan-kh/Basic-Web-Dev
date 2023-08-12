console.log("Welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Pasoori",filePath: "song/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "One Kiss",filePath: "song/2.mp3",coverPath:"covers/2.jpg"},
    {songName: "Maan Meri Jaan",filePath: "song/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "Puthiyoru Lokam",filePath: "song/4.mp3",coverPath:"covers/4.jpg"},
    {songName: "ChandraChooda",filePath: "song/5.mp3",coverPath:"covers/5.jpg"},
    {songName: "Gagana Nee",filePath: "song/6.mp3",coverPath:"covers/6.jpg"},
    {songName: "Changes",filePath: "song/7.mp3",coverPath:"covers/7.jpg"},
    {songName: "Chennai Express",filePath: "song/8.mp3",coverPath:"covers/8.jpg"},
    
]
songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("inContent")[0].innerText = songs[i].songName;
})
    

masterPlay.addEventListener('click',()=>
{
   if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;

   }
   else
   {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
   }
}
)

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress; 
})

progressbar.addEventListener("change",()=>{
    audioElement.currentTime = (progressbar.value*audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.addEventListener("click",(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
      })
}
)

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>8){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;   
    audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=8
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;   
    audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
})

