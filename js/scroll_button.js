var position = 0;
var button_background = document.getElementById("button_background");
var toggle_button = document.getElementById("button_toggle");


/* position 변수노트 %3

0
1   %3 = 1
          
*/


function ani_slide(){
    position++;
    if (position % 2 == 1){
        toggle_button.classList.add("open");
    }
        else {
            toggle_button.classList.remove("open");
        }
}
    toggle_button.addEventListener("click", ani_slide);
