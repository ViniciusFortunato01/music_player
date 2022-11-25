var action = document.getElementById('action');
var capa = document.getElementById('capa');
var forward = document.getElementById('forward');
var backward = document.getElementById('backward');
var timer = document.getElementById('timer');
var fim = document.querySelector('.fim');
var inicio = document.querySelector('.inicio');
var mscName = document.getElementById('musicname');

var tocando = false;

var player = {
    atual:0,
    tocando:false,
    musicas: [
        new Audio('./assets/audios/weeknd.mp3'),
        new Audio('./assets/audios/lonely.mp3'),
        new Audio('./assets/audios/Goosebumps.mp3'),
        new Audio('./assets/audios/Drake_Type.mp3'),
        new Audio('./assets/audios/Hollywood.mp3')
    ],  
    capas: [
        'https://upload.wikimedia.org/wikipedia/pt/a/a3/Capa_de_Blinding_Lights.png',
        'https://t2.genius.com/unsafe/272x272/https%3A%2F%2Fimages.genius.com%2F90193af5bc6467a05fdf6a2d8d0c97b7.300x300x1.jpg',
        'https://i.redd.it/fzjftrfu5mdz.png',
        'https://images.pristineauction.com/166/1661904/share_1603219804-Travis-Scott-Signed-Birds-in-the-Trap-Sing-McKnight-Vinyl-Record-Album-Inscribed-Hi-Ebay-PSA-Hologram-PristineAuction.com.jpg',
        'https://th.bing.com/th/id/OIP.S-VwoTmP26Un6dLqryWdkgHaFk?pid=ImgDet&amp;rs'
    
    ],
    nomes:[
        "Blinding Lights",
        "Lonely",
        "Goosebumps",
        "??",
        "Hollywood's Bleeding"
    ],
    artistas:[
        "The Weeknd",
        "Akon",
        "Travis Scott",
        "??",
        "Post Malone"
    ],
    playPause(){
        if(!tocando){
            action.classList = "fa-solid fa-circle-play";
            action.addEventListener('click', ()=>{
                roll()
                this.musicas[this.atual].currentTime = timer.value;
                this.musicas[this.atual].play();
                tocando = true;
                action.classList = "fa-solid fa-circle-pause";
                var interval = setInterval(()=>{
                    if(tocando){
                        timer.value++
                        inicio.innerText = timer.value+"s"
                    }
                    else clearInterval(interval)
                }, 1000)
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
    backward(){
        if(tocando){
            var mudou = true;
            player.musicas[player.atual].pause();
            tocando = false;
            action.classList = "fa-solid fa-circle-play";
        }
        if(mudou){
            if(player.atual-1<0){
                player.atual = player.capas.length-1;
                player.playPause();
            }else{
                player.atual--;
                player.playPause();
            }      
        }else{
            if(player.atual-1<0){
                player.atual = player.capas.length-1;
            }else{
                player.atual--;
            }
        }
        roll();
        capa.src = player.capas[player.atual];
        mscName.innerText = player.nomes[player.atual];
        timer.value = 0;
    },
    forward(){
        var mudou = false;
        if(tocando){
            mudou = true;
            player.musicas[player.atual].pause();
            tocando = false;
            action.classList = "fa-solid fa-circle-play";
        }
        if(mudou){
            if(player.atual+1>player.capas.length-1){
                player.atual = 0;
                player.playPause()
            }else{
                player.atual++;
                player.playPause()
            }
        }        
        else{
            if(player.atual+1>player.capas.length-1){
                player.atual = 0;
            }else{
                player.atual++;
            }
        }
        roll();
        capa.src = player.capas[player.atual];
        mscName.innerText = player.nomes[player.atual];
        timer.value = 0;
    }
}

if(!tocando) player.playPause()
forward.addEventListener('click', player.forward);
backward.addEventListener('click', player.backward);

capa.src = player.capas[player.atual];
mscName.innerText = player.nomes[player.atual];
roll();

function roll(valor){
    player.musicas[player.atual].load()
    player.musicas[player.atual].setAttribute("preload", "metadata");
    player.musicas[player.atual].onloadedmetadata = function() {
        timer.max = player.musicas[player.atual].duration;
        fim.innerText = Math.round(player.musicas[player.atual].duration)+"s";

    };
}