const categories = document.querySelector('.category');
const etc_work = document.querySelectorAll('.etc_work');

categories.addEventListener('click', function(event) {
    console.log(event);

    const filter = event.target.dataset.category;
    console.log(filter);

    etc_work.forEach((etc_work)=>{
        /*console.log(project.dataset.type);*/

        if (filter === 'all' || filter === etc_work.dataset.type){
            etc_work.style.display = 'block';
        }
        else{
            etc_work.style.display = 'none';
        }

        if(filter == null) {
            return;
        }
    })
    
    const active_button = document.querySelector('.category_selected');
    active_button.classList.remove('category_selected');
    event.target.classList.add('category_selected');
    console.log(event.target); 
})

