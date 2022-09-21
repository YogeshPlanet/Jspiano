const pianoKeys = document.querySelectorAll('.key')

function playSound() {
    new Audio('media/key12.mp3').play()
}

pianoKeys.forEach(pianokey => {
    pianokey.addEventListener('click', playSound)
})