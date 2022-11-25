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
        new Audio('./assets/audios/Hollywood.mp3'),
        new Audio('./assets/audios/axe_90_graus.mp3'),
        new Audio('./assets/audios/Tarraxinha.mp3'),
        new Audio('./assets/audios/Tchubirabirom.mp3'),
        new Audio('./assets/audios/I_Got_The_Blues.mp3'),
        new Audio('./assets/audio/If_I_Had_Money.mp3'),
        new Audio('./assets/audio/In_Da_Club.mp3'),
        new Audio('./assets/audio/Livin_On_Love.mp3'),
        new Audio('./assets/audio/Alok_&_Bhaskar.mp3'),
        new Audio('./assets/audio/One_Horse_Town.mp3'),
        new Audio('./assets/audio/Money_Is_The_Name.mp3'),
        new Audio('./assets/audio/Elevator_To_Heaven.mp3'),
        new Audio('./assets/audio/E_so_um_lance.mp3'),
        new Audio('./assets/audio/Eu_ja_sofri_por_amor.mp3'),
        new Audio('./assets/audio/Fling_Waltz.mp3'),
        new Audio('./assets/audio/Amor_Virtual.mp3'),
        new Audio('./assets/audio/Deus_Provera.mp3'),
        new Audio('./assets/audio/Eu_naveguei.mp3'),
        new Audio('./assets/audio/The_Sky_is_Crying.mp3'),
        new Audio('./assets/audio/Hartbreaak.mp3'),
        new Audio('./assets/audio/A_noite.mp3'),
        new Audio('./assets/audio/Lembranças.mp3'),
        new Audio('./assets/audio/Stars.mp3'),
        new Audio('./assets/audio/Montagem_trava_nóia.mp3'),
        new Audio('./assets/audio/Pra_onde_eu_irei.mp3')

    ],  
    capas: [
        'https://upload.wikimedia.org/wikipedia/pt/a/a3/Capa_de_Blinding_Lights.png',
        'https://t2.genius.com/unsafe/272x272/https%3A%2F%2Fimages.genius.com%2F90193af5bc6467a05fdf6a2d8d0c97b7.300x300x1.jpg',
        'https://i.redd.it/fzjftrfu5mdz.png',
        'https://images.pristineauction.com/166/1661904/share_1603219804-Travis-Scott-Signed-Birds-in-the-Trap-Sing-McKnight-Vinyl-Record-Album-Inscribed-Hi-Ebay-PSA-Hologram-PristineAuction.com.jpg',
        'https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02',
        'https://i.scdn.co/image/ab67616d0000b2732060c90b6bdd4e14305f73eb',
        'https://i.scdn.co/image/ab67616d0000b273c798dc4e4a862dfb7b193ead',
        'https://i.scdn.co/image/ab67616d00001e02e4f74ec482f886d8d61a9bae',
        'https://i.scdn.co/image/ab67616d0000b2732fe0f4701aa01f6ef2110eb4',
        'https://i.scdn.co/image/ab67616d0000b273017161233742995b53f25422',
        'https://i.scdn.co/image/ab67616d0000b273f7f74100d5cc850e01172cbf',
        'https://i.scdn.co/image/ab67616d0000b2738f288904206cea14a750130f',
        'https://i.scdn.co/image/ab67616d0000b27323aadddba5e96a7390d1669f',
        'https://i.scdn.co/image/ab67616d0000b27383ee9f5ae568f5c7c550eda6',
        'https://i.scdn.co/image/ab67616d00001e0204f969300f8937154a728e52',
        'https://i.scdn.co/image/ab67616d0000b273462d88b134df24afff50aba3',
        'https://i.scdn.co/image/ab67616d0000b27393b4216c335036cdadb0132a',
        'https://i.scdn.co/image/ab67616d0000b273a5e0442376d3ca17c33ad1f2',
        'https://i.scdn.co/image/ab67616d0000b273f52f0b3a51b5e6577cabdfeb',
        'https://i.scdn.co/image/ab67616d0000b2732041f69c0ff775273cc2f88c',
        'https://i.scdn.co/image/ab67616d0000b2732013ae4af0d69bfc85debcf5',
        'https://i.scdn.co/image/ab67616d0000b273bc88bbb9b5697fceda7e987c',
        'https://i.scdn.co/image/ab67616d0000b273f16f061c602c03d4da94f8f6',
        'https://i.scdn.co/image/ab67616d0000b273768edcdf4859c60d609055ee',
        'https://i.scdn.co/image/ab67616d0000b2731ec6f86404bd7bb83ee08878',
        'https://i.scdn.co/image/ab67616d0000b273b0aa52dd32faa11a5b4c2272',
        'https://i.scdn.co/image/ab67616d0000b2734b146ee90f8845b41ce2fc1d',
        'https://i.scdn.co/image/ab67616d0000b2731ba41a7a01cdd6dacea0cf8a',
        'https://i.scdn.co/image/ab67616d0000b2731dc15d86956d51f080aec0cf'
    ],
    nomes:[
        "Blinding Lights",
        "Lonely",
        "Goosebumps",
        "??",
        "Hollywood's Bleeding",
        "Axé 90 Graus",
        "Tarraxinha",
        "Tchubirabirom",
        "I Got The Blues",
        "If I Had Money",
        "In Da Club",
        "Livin On Love",
        "Fuego",
        "One Horse Town",
        "Money Is The Name",
        "Elevator To Heaven",
        "É só um lance",
        "Eu ja sofri por amor",
        "Fling Waltz",
        "Amor Virtual",
        "Deus Provera",
        "Eu naveguei",
        "The Sky is Crying",
        "Hartbreaak",
        "A noite",
        "Lembranças",
        "Stars",
        "Montagem trava nóia",
        "Pra onde eu irei"

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