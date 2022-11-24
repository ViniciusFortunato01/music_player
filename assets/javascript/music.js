var action = document.getElementById('action');
var capa = document.getElementById('capa');
var forward = document.getElementById('forward');
var backward = document.getElementById('backward');
var tocando = false;

var player = {
    atual:0,
    tocando:false,
    musicas: [
        new Audio('./assets/audios/weeknd.mp3'),
        new Audio('./assets/audios/lonely.mp3')
    ],
    capas: [
        'https://upload.wikimedia.org/wikipedia/pt/a/a3/Capa_de_Blinding_Lights.png',
        'https://t2.genius.com/unsafe/272x272/https%3A%2F%2Fimages.genius.com%2F90193af5bc6467a05fdf6a2d8d0c97b7.300x300x1.jpg'
    ],
    playPause(){
        if(!tocando){
            action.classList = "fa-solid fa-circle-play";
            action.addEventListener('click', ()=>{
                this.musicas[this.atual].play();
                tocando = true;
                action.classList = "fa-solid fa-circle-pause";
                if(tocando){
                    action.addEventListener('click', ()=>{
                       this.musicas[this.atual].pause();
                        tocando = false;
                        this.playPause();
                    })
                }
            });
        }
    },
}

if(!tocando) player.playPause()
forward.addEventListener('click', ()=> {
    player.atual++;
    capa.src = player.capas[player.atual];
});
backward.addEventListener('click', ()=>{
    player.atual--;
    capa.src = player.capas[player.atual];
});

capa.src = player.capas[player.atual];