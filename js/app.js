$(function() {
    // function for showing the dropdown menu with slideDown() method
    $(".dropdown").click(function() {
        $(this).parent().children("ul").fadeToggle(500);
    });

    // function for showing the modal window
    $(".btn-close").click(function() {
        $("div.modal").fadeIn("fast", function() {
            $("div.modal .content").fadeIn("fast");
            $("body").css({
                "height": "100vh",
                "overflow-y": "hidden"
            });
        });
    });
    $(".close-modal").click(function() {
        $("div.modal .content").fadeOut("fast", function() {
            $("div.modal").fadeOut("fast", function() {
                $("body").css({
                    "height": "auto",
                    "overflow-y": "scroll"
                });
            });
        });
    });

    // showing responsive menu when screen width is less than 768px
    let showButton = document.querySelector(".navbar nav .responsive-menu a");
    showButton.addEventListener("click", (e) => {
        e.preventDefault();
        $(".responsive-dropdown-menu").slideToggle();
    });

    // responsive sidebar
    $(".responsive-sidebar > ul > li:first-child a").click(function(e) {
        e.preventDefault();
        if ($(this).children()[0].className === "fas fa-bars") {
            $(this).children()[0].className = "fas fa-times";
        } else {
            $(this).children()[0].className = "fas fa-bars";
        }
        $(".responsive-sidebar").toggleClass("show-sidebar");
        $(this).parent().siblings().toggleClass("hide-menu");
    });
})