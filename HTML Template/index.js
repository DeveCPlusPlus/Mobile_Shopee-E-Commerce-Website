$(document).ready(function(){

    let slideIndex = 0;
    let slider = document.querySelector(".slider");
    let slides = document.querySelector(".slides");
    let slide = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dots span")
    
    showslide();
    
    function plusslide(position) {
        slideIndex += position;
    
        if (slideIndex > slide.length) {
            slideIndex = 1;
        }
        else if (slideIndex < 1) {
            slideIndex = slide.length;
        }
    
        // Defaultly active class is removed from all dots
        for (let i = 0; i < dots.length; i++) {
            const element = dots[i];
            element.classList.remove("dot-active");
        }
    
        slides.style.left = `-${slideIndex - 1}00%`;
        dots[slideIndex - 1].classList.add("dot-active");
    }
    
    function currentslide(index) {
        if (index > slide.length) {
            index = 1;
        }
        else if (index < 1) {
            index = slide.length;
        }
    
        // Defaultly active class is removed from all dots
        for (let i = 0; i < dots.length; i++) {
            const element = dots[i];
            element.classList.remove("dot-active");
        }
    
        slides.style.left = `-${index - 1}00%`;
        dots[index - 1].classList.add("dot-active");
    
        slideIndex = index;
    }
    
    function showslide() {
        slideIndex++;
    
        if (slideIndex > slide.length) {
            slideIndex = 1;
        }
        else if (slideIndex < 1) {
            slideIndex = slide.length;
        }
    
        // Defaultly active class is removed from all dots
        for (let i = 0; i < dots.length; i++) {
            const element = dots[i];
            element.classList.remove("dot-active");
        }
    
        slides.style.left = `-${slideIndex - 1}00%`;
        dots[slideIndex - 1].classList.add("dot-active");
    }
    
    
  /*  let interval = setInterval(()=> {
        showslide();
    } , 3000);   // Change every image after 3 seconds*/
    
    slider.addEventListener("mouseover" , ()=> {
        clearInterval(interval);     // onHover Stop Changing every image after 3 seconds 
    });
    
    slider.addEventListener("mouseout" , ()=> {
        interval = setInterval(()=> {
            showslide();   
        } , 3000);    // on mouseout from slide then again start Changing every image after 3  seconds 
    });

    // top sale owl carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });

    // isotope filter
    var $grid = $(".grid").isotope({
        itemSelector : '.grid-item',
        layoutMode : 'fitRows'
    });

    // filter items on button click
    $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue});
    })


    // new phones owl carousel
    $("#new-phones .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });

    // blogs owl carousel
    $("#blogs .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    })


    // product qty section
    let $qty_up = $(".qty .qty-up");
    let $qty_down = $(".qty .qty-down");
    // let $input = $(".qty .qty_input");

    // click on qty up button
    $qty_up.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() >= 1 && $input.val() <= 9){
            $input.val(function(i, oldval){
                return ++oldval;
            });
        }
    });

       // click on qty down button
       $qty_down.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() > 1 && $input.val() <= 10){
            $input.val(function(i, oldval){
                return --oldval;
            });
        }
    });


});