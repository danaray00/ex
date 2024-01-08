document.getElementById('button_toggle').addEventListener("click", function() {
    if(document.querySelector('body').classList.contains("darkmode")){
        document.body.classList.remove("darkmode");
    }else{
        document.body.classList.add("darkmode");
    }
},false);