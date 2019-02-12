    // Listen for a keyDown Event
    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; //stop the function for running
        audio.currentTime = 0; //rewind audio to the start
        audio.play();
        
        key.classList.add("isPlaying");
    }

    function removeTransition(e) {
        if(e.propertyName !== 'transform') return;
        // console.log(e.propertyName);
        this.classList.remove("isPlaying");
    }

    // Listen for an end of transition from each key, then remove the transition
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    // Listen for a KeyDown Event and then call playSound Function
    window.addEventListener('keydown', playSound);