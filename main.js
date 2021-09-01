//MINE
window.addEventListener('keydown',function (e) {
    var key = e.keyCode;
    console.log(`audio [data-key="${key}"]`);
    var sound = this.document.querySelector(`audio[data-key="${key}"]`);
    var box = this.document.querySelector(`div [data-key= "${key}"] > kbd`);  
    if(sound){
        sound.currentTime=0;
        sound.play();
        box.classList.add('playing');
        setTimeout(() => {
            box.classList.remove('playing');
        }, 300);
    }
});


