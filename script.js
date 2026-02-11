document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase())
})

document.querySelector('.composer button',).addEventListener('click', ()=>{
    let song = document.getElementById('input').value

    if(song !== ''){
        songArray = song.split('')
        playComposition(songArray)
    }

    console.log(song)
})





function playSound(sound){
    let audio = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`[data-key="${sound}"]`)
    
    if(keyElement){
        keyElement.classList.add('active')

        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 100)
    }

    if(audio){
        audio.currentTime = 0
        audio.play()
    }else{
        console.log('Tecla inválida')
    }
}

function playComposition(songArray){
    let wait = 0 

    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait);
        wait += 220
        
            
    }
}