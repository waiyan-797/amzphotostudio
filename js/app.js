// UI 
// Start Navbar 
const navbuttions = document.querySelector('.anvbuttons');
navbuttions.addEventListener('click',()=>navbuttions.classList.toggle('changes'));

// for navbar 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    // console.log('hay');
    const getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly >= 200){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }



});
// End Navbar 


// Start Gallary section 
    const gallerylists = document.querySelectorAll('.gallerylist');
    const filternews = document.querySelectorAll('.filter.new'),
     filterfrees = document.querySelectorAll('.filter.free'),
     filterpros = document.querySelectorAll('.filter.pro');

     gallerylists.forEach(gallerylist=>{
    // console.log(gallerylist);
    
    // console.log(datafilter);

    gallerylist.addEventListener('click',(e)=>{
        // console.log('hay');
        let datafilter = gallerylist.getAttribute('data-filter');

        removeactiveitem();
        e.target.classList.add('activeitems');

        

        if(datafilter === "all"){
            

            
            filterpros.forEach(filterpro=>{
                filterpro.style.display = "inline-block";
            });

            filterfrees.forEach(filterfree=>{
                filterfree.style.display = "inline-block";
            });


            filternews.forEach(filternew=>{
                filternew.style.display = "inline-block";
            });

        }else if(datafilter === "new"){
          
            filternews.forEach(filternew=>{
                filternew.style.display = "inline-block";
            });

            filterfrees.forEach(filterfree=>{
                filterfree.style.display = "none";
            });

            filterpros.forEach(filterpro=>{
                filterpro.style.display = "none";
            });


        }else if(datafilter === "free"){
         

            filterfrees.forEach(filterfree=>{
                filterfree.style.display = "inline-block";
            });


            filternews.forEach(filternew=>{
                filternew.style.display = "none";
            });

           
            filterpros.forEach(filterpro=>{
                filterpro.style.display = "none";
            });

        }else{
         
            filterpros.forEach(filterpro=>{
                filterpro.style.display = "inline-block";
            });

            filterfrees.forEach(filterfree=>{
                filterfree.style.display = "none";
            });


            filternews.forEach(filternew=>{
                filternew.style.display = "none";
            });

           

        }

    });
});


// remove current active item 
function removeactiveitem(){
    gallerylists.forEach(gallerylist=>{
        gallerylist.classList.remove('activeitems')
    })
}


// End Gallary section 

// Start Footer section 

const showyear = document.getElementById('showyear');
const getfullyear = new Date().getUTCFullYear();
showyear.textContent = getfullyear;
// End Footer section 