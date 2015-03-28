$(document).ready( function() {

    $("#timebar").click( function() {
        var tl = new TimelineMax();
        tl.pause();

        var timelines = document.getElementsByClassName("timeline");
        tl.staggerTo(timelines, 5, {width:"100%"}, 0.5);
        tl.play();
    });

    $("#landscape").click( function() {

        var i, j, s, name, leftRandomPos, scaleSize, x, y, z, randomPos;

        var tl = new TimelineMax();
        tl.pause();
        // var g = document.getElementById("landscape");

        var hospitals = [];
        var positions = [
        {
            left: '12%',
            top: '7%',
            scale: 2.4
        },
        {
            left: '45%',
            top: '70%',
            scale: 4
        },
        {
            left: '70%',
            top: '30%',
            scale: 6
        }
    ];
        for ( i = 0; i < 3; i++ ) {
            name = "hospital_" + i;
            s = '<div class="pic" id="' + name + '"> <img class="bare" src="images/hospital2.svg"/> </div>';
            $( this ).append( s );
            x = document.getElementById(name);
            hospitals.push( x );
            randomPos = parseInt( Math.random() * 90, 10 ) + "%";
            tl.to( x, 0, {top: positions[i].top}, "zero" );
        }

        for ( i = 0; i < 3; i++ ) {
            leftRandomPos =  parseInt( Math.random() * 90, 10 ) + "%";
            scaleSize = 3 * (Math.random() + 1);
            tl.to( hospitals[i], 1, { scale: positions[i].scale, left: positions[i].left, opacity: 0.7 }, "one" );
        }

        /*
        var doctors = [];
        for ( j = 0; j < 4; j++ ) {
            name = "doctor_" + j;
            s = '<div class="pic" id="' + name + '"> <img class="bare" src="images/doctor.svg"/> </div>';
            $( this ).append( s );
            x = document.getElementById(name);
            doctors.push( x );
            randomPos = parseInt( Math.random() * 80, 10 ) + "%";
            tl.to( x, 0, {top: randomPos}, "zero" );
        }

        for ( j = 0; j < 4; j++ ) {
            leftRandomPos =  parseInt( Math.random() * 90, 10 ) + "%";
            scaleSize = 0.5 * (Math.random() + 1);
            tl.to( doctors[j], 3, { left: leftRandomPos, scale: scaleSize, opacity: 0.7 }, "two" );
        }
        */

        var clouds = [];
        for (j = 0; j < 20; j++ ) {
            name = "cloud_" + j;
            s = '<div class="pic" id="' + name + '"> <img class="bare" src="images/cloud.svg"/> </div>';
            $( this ).append( s );
            x = document.getElementById(name);
            clouds.push( x );
            randomPos = parseInt( Math.random() * 80, 10 ) + "%";
            leftRandomPos =  parseInt( Math.random() * 90, 10 ) + "%";
            tl.to( x, 0, {top: randomPos, left: leftRandomPos, opacity: 0}, "zero" );
        }

        var forums = [];
        svgs = [];
        var forumPositions = [
        {
            left: '16%',
            top: '66%'
        },
        {
            left: '76%',
            top: '70%'
        }
        ];
        for ( j = 0; j < 2; j++ ) {
            name = "forum_" + j;
            var backName =  "back_" + name;
            s = '<div class="back_pic" id="' + backName + '"> <object id="' + backName + '_svg" class="bare" type="image/svg+xml" data="images/forum.svg"></object> </div>';
            s += '<div class="pic" id="' + name + '"> <img class="bare" src="images/cloud.svg"/> </div>';
            $( this ).append( s );
            x = document.getElementById(name);
            y = document.getElementById(backName);
            z = document.getElementById(backName + "_svg");
            clouds.push( x );
            forums.push( y );
            svgs.push( z );
            tl.to( x, 0, {top: forumPositions[j].top, left: forumPositions[j].left, opacity: 0}, "zero" );
            tl.to( y, 0, {top: forumPositions[j].top, left: forumPositions[j].left, opacity: 0}, "zero" );
        }

        tl.staggerTo(clouds, 3, {opacity: 1}, 0.2);
        tl.to(hospitals, 2, {rotation: 0 }, "start");
        tl.to(forums, 5, {opacity: 0.7, scale: 2}, "end");

        window.setTimeout(function(){
            svgs = svgs.map( function(svg) {
                var o = svg.getSVGDocument();
                return o.getElementsByTagName("path")[0];
            });
            console.log(svgs);
            tl.to(svgs, 5, {fill: "rgb(0, 80, 200)"}, "end");
            tl.to(clouds, 5, {opacity:0}, "end");
            tl.play();
        }, 1000);

    });

});
