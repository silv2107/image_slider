
// var imageElement = document.querySelector(".image");
// var buttonLeft = document.querySelector('#buttonLeft');
// var buttonRight = document.querySelector('#buttonRight');

function slideShow(imageElement, array, time, mouseEvent = true, clickEvent = false){
    
    let run = true;
    let index = 0;
    function showImage(imageIndex) {
        imageElement.src = array[imageIndex];                       
    }

    imageElement.src = array[0];

    if(mouseEvent){
        imageElement.addEventListener("mouseenter", function(){
            run = false;
        })

        imageElement.addEventListener("mouseleave", function(){
                run = true;    
        })
    }

//button functionalitet----------------------------------------
    if(clickEvent) {
        buttonLeft.addEventListener('click', ()=> {
            index--;
            if(index < 0) {
                index = array.length - 1;
            }
            showImage(index);
        });

        buttonRight.addEventListener('click', ()=> {
            index++;
            if(index > array.length - 1) {
                index = 0;
            }
            showImage(index);
        });
    }


    setInterval(()=> {
        if(!run){
            return;
        }
    
        index++;
        if(index > array.length - 1) {
              index = 0;
        }
        showImage(index)
    }, time)
}

export default slideShow;



