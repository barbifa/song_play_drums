// drum kit: press a key to play the sound. use JavaScript to retrieve the data-key attribute and then use that as a selector to find the matching audio file and play it!

(() => {
    console.log('music player script file');
    let thekeys = document.querySelectorAll(".key");


    function removeHighlight(event){
        this.classList.remove('playing');

    }


    function logKeyboardKeyCode(event){
        // event is an object that gets generated wherener the user presses a keyboard key -> it has a lot of info inside of it
        
        //find the audio element that matches the keyboard keycode

        // query selector can take any valid css selector, inclusind attributes
        
        
        let targetAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        let targetCircleDiv = document.querySelector(`div[data-key="${event.keyCode}"]`);


        if(targetAudio && targetCircleDiv){
            targetCircleDiv.classList.add('playing');
            targetAudio.currentTime = 0;
            targetAudio.play();
            
        }else{
            return;
        }


        debugger;
    }
    


    //add some event handling for keyboard events

    window.addEventListener('keyup', logKeyboardKeyCode);

    thekeys.forEach(key => key.addEventListener('transitionend',removeHighlight));

})();
