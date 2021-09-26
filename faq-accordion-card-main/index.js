
document.addEventListener("DOMContentLoaded", function(event){

    let accordion = document.getElementsByClassName('accordion');
    let panel = document.getElementsByClassName('panel');

    for(var i = 0; i < accordion.length; i++){

        accordion[i].onclick = function() {
            var setClasses = !this.classList.contains("active");
            setClass(accordion, 'active', 'remove');
            setClass(panel, 'show', 'remove');
             
            if(setClasses){
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
                
            }
        }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

});

