$(document).ready(function(){
// Start Navbar 

// for navbutton 
$('.anvbuttons').click(function(){
    $('.anvbuttons').toggleClass('changes');
});

// End Navbutton


// for navbar 
$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();

    if(getscrolly >= 200){
        $('.navbar').addClass('navmenus');
    }else{
        $('.navbar').removeClass('navmenus');
    }
});
// end nabvbar

// Start Missiion section
    $(window).scroll(function(){
        let getscrolly = $(this).scrollTop();
        if(getscrolly >= 650){
            $('.cameraimgs').addClass('fromlefts');
            $('.missiontexts').addClass('formrights');
        }else{
            $('.cameraimgs').removeClass('fromlefts');
            $('.missiontexts').removeClass('formrights');
        }
    });    


// End Mission Section 


// Start Gallary section 
    $('.gallerylist').click(function(){
        let datafilter =  $(this).attr('data-filter');
        if(datafilter === "all"){
            $('.filter').show(400);
        }else{
            $('.filter').not("."+datafilter).hide(400);

            $('.filter').filter('.'+datafilter).show(400)

        }
    });

       
    // for ul actiove 
    $('.gallerylist').click(function(){
        $(this).addClass('activeitems').siblings().removeClass('activeitems');



    });



// End Gallary section 

// Start Pricing Section 
$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();

    if(getscrolly >= 4300){
        $('.cardones').addClass('movefromlefts');
        $('.cardtwos').addClass('movefrombottoms');
        $('.cardthrees').addClass('movefromrights');

    }else{
        $('.cardones').removeClass('movefromlefts');
        $('.cardtwos').removeClass('movefrombottoms');
        $('.cardthrees').removeClass('movefromrights');
    }
    
});

// End Pricing Section 

// Start Footer section 


const showyear = document.getElementById('showyear');
const getfullyear = new Date().getUTCFullYear();
showyear.textContent = getfullyear;

// End Footer section 

});