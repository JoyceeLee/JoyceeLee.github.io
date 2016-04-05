$(document).ready(function() {
	var r = ["Hi.", 
    "I'm Li, Yang",
    "You can also call me Joyce.", 
    "I major in Computer Science and now study at USC.",
    "I enjoy coding with Java, Python, C/C++,",
    "as well as playing with HTML, CSS & JavaScript.",
    "This is an on-going blog where I record my study and drawings.",
    "Hope you like it :)"]; 
    var intro = $("#intro");
    var idx = 0;

    intro.html(r[idx]);
    ++idx;

    var f = function() {
        setTimeout(function() {
            intro.attr("class","hide");
        }, 700)
        setTimeout(function() {
            intro.html(r[idx]);
            ++idx;
        }, 1400)
        setTimeout(function() {
            intro.attr("class","");
        }, 2100)
        if(idx == r.length) idx = 0;
        setTimeout(f, 3500);
    }

    setTimeout(f, 4200);
});

var fixedScrollLayout = (function(){
    var config = {
        $sections : $(".contents>section"),
        $navlinks : $("nav>a"),
        $body : $(".contents"),
        currentLink : 0,
        animspeed : 650,
        animeasing : 'easeInOutExpo'
    };

    function init() {
        config.$navlinks.on('click', function() {
            alert("go to scroll anim");
            scrollAnim( config.$sections.eq( $( this ).index() ).offset().top );
            return false;
        } );

        config.$sections.waypoint( function( direction ) {
                if( direction === 'down' ) { changeNav( $( this ) ); }
            }, 
            { offset: '30%' } 
        )
        .waypoint( function( direction ) {
                if( direction === 'up' ) { changeNav( $( this ) ); }
            }, 
            { offset: '-30%' } 
        );
    }

    function changeNav( $section ) {
        config.$navlinks.eq( config.currentLink ).removeClass( "navlink" );
        config.currentLink = $section.index( "section" );
        config.$navlinks.eq( config.currentLink ).addClass( "navlink" );
    }

    function scrollAnim( top ) {
        alert("scrollanim");
        config.$body.stop().animate( { scrollTop : top }, config.animspeed, config.animeasing );
    }
 
    return init();
})();
