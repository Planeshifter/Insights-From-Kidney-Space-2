function finishDisambiguationFull() {
    var math = MathJax.Hub.getAllJax("carDudeSimilarity")[0];
    MathJax.Hub.Queue(["Text",math,"\\sum \\max \\operatorname{sim}()=0.8"]);

    var tl = new TimelineMax();
    var lemonKidneySim = document.getElementById("lemonKidneySimilarity");
    var carDudeSim = document.getElementById("carDudeSimilarity");
    var lemonSim = document.getElementById("lemonSimilarity");

    var lemonTxt = document.getElementById("lemon");
    var beanTxt = document.getElementById("bean");
    var kidneyTxt = document.getElementById("kidney");

    tl.pause();

    var c3 = document.getElementById("c3");

    tl.to(lemonKidneySim, 3, {opacity: 0}, "zero");
    tl.to(c3, 3, {opacity:0}, "zero");

    var auto = document.getElementById("lemonCarPic");
    var lemon = document.getElementById("lemonFruitPic");

    var timeOne = 3;
    tl.to( lemon, timeOne, {opacity: 1} ,"one");
    tl.to( auto, timeOne, {opacity: 0.2} ,"one");
    tl.to( carDudeSim, timeOne, {background: "transparent"}, "one");

    var timeTwo = 3;
    tl.to( auto, timeTwo, {opacity: 0} ,"two");
    tl.to( lemonKidneySim, timeTwo, {opacity: 0} ,"two");
    tl.to( lemonSim, timeTwo, {opacity: 0} ,"two");
    tl.to( carDudeSim, timeTwo, {opacity: 0} ,"two");

    var timeThree = 3;
    var c2 = document.getElementById("c2");
    var bean = document.getElementById("beanFruitPic");
    tl.to( lemonTxt, 3, {color: "rgba(0, 80, 200, 0.7)"}, "twohalf");
    tl.to( beanTxt, 3, {color: "rgb(255, 128, 0)"},"twohalf");

    tl.to( c2, timeThree, {opacity: 1}, "three" );
    tl.to( bean, timeThree, {opacity: 1}, "three" );

    var timeFour = 3;
    tl.to( beanTxt, timeFour, {color: "rgba(0, 80, 200, 0.7)"}, "four");
    tl.to( kidneyTxt, timeFour, {color: "rgb(255, 128, 0)"}, "four");
    tl.to( c3, timeFour, {opacity: 1}, "four" );

    tl.play();
}

function continueDisambiguationFull() {
    var math = MathJax.Hub.getAllJax("lemonSimilarity")[0];
    MathJax.Hub.Queue(["Text",math,"\\sum \\max \\operatorname{sim}()=1.1"]);

    math = MathJax.Hub.getAllJax("lemonDudeSimilarity")[0];
    MathJax.Hub.Queue(["Text",math,"\\operatorname{sim}() = 0.1"]);

    var tl = new TimelineMax({onComplete: finishDisambiguationFull });
    tl.pause();
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var dude = document.getElementById("beanDudePic");
    var bean = document.getElementById("beanFruitPic");
    var auto = document.getElementById("lemonCarPic");
    var lemon = document.getElementById("lemonFruitPic");
    var lemonSim = document.getElementById("lemonSimilarity");
    var lemonDudeSim = document.getElementById("lemonDudeSimilarity");
    var lemonKidneySim = document.getElementById("lemonKidneySimilarity");
    var carDudeSim = document.getElementById("carDudeSimilarity");

    var timeOne = 3;
    tl.to( lemon, timeOne, {opacity: 0.25}, "zero" );
    tl.to( lemonKidneySim, timeOne, {opacity: 0}, "zero" );
    tl.to( c3, timeOne, {opacity: 0}, "zero");

    tl.to( lemonDudeSim, 0, {top: "40%"}, "pre");
    tl.to( auto, 3, {opacity: 1}, "pre" );

    var timeTwo = 3;
    tl.to( c2, timeTwo, {opacity: 1}, "two");
    tl.to( lemonDudeSim, timeTwo, {opacity: 1}, "two");
    tl.to( bean, timeTwo, {opacity: 1},"two" );

    var threeTime = 3;
    tl.to( bean, threeTime, {opacity: 0},"three" );
    tl.to( dude, threeTime, {opacity: 1}, "three");
    tl.to( carDudeSim, threeTime, {opacity: 1}, "three");
    tl.to( lemonKidneySim, threeTime, {top: "40%"}, "three" );

    var fourTime = 3;
    tl.to( carDudeSim, fourTime, {background: "orange"}, "four");
    tl.to( lemonDudeSim, fourTime, {opacity: 0, top: "40%"}, "four");
    tl.to( dude, fourTime, {opacity: 0}, "four");
    tl.to( c2, fourTime, {opacity: 0}, "four");

    var fiveTime = 3;
    tl.to( c3, fiveTime, {opacity: 1}, "five");
    tl.to( lemonKidneySim, fiveTime, {opacity: 1}, "five");

    tl.play();

}

function startDisambiguationFull() {
    var tl = new TimelineMax({onComplete: continueDisambiguationFull });
    tl.pause();
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var dude = document.getElementById("beanDudePic");
    var bean = document.getElementById("beanFruitPic");

    tl.to( c2, 1, {opacity: 0}, "zero" );
    tl.to( c3, 1, {opacity: 0}, "zero" );
    tl.to( dude, 1, {opacity: 0}, "zero");

    var auto = document.getElementById("lemonCarPic");
    var lemonSim = document.getElementById("lemonSimilarity");
    var lemonDudeSim = document.getElementById("lemonDudeSimilarity");
    var lemonKidneySim = document.getElementById("lemonKidneySimilarity");

    tl.to( auto, 1, {opacity: 0}, "one");

    var twoTime = 3;
    tl.to( c2, twoTime, {opacity: 1}, "two");
    tl.to( lemonSim, twoTime, {opacity: 1}, "two");

    var threeTime = 3;
    tl.to( bean, threeTime, {opacity: 0},"three" );
    tl.to( dude, threeTime, {opacity: 1}, "three");
    tl.to( lemonDudeSim, threeTime, {opacity: 1}, "three");

    var fourTime = 3;
    tl.to( lemonSim, fourTime, {background: "orange"}, "four");
    tl.to( lemonDudeSim, fourTime, {opacity: 0}, "four");
    tl.to( dude, fourTime, {opacity: 0}, "four");
    tl.to( c2, fourTime, {opacity: 0}, "four");

    var fiveTime = 3;
    tl.to( c3, fiveTime, {opacity: 1}, "five");
    tl.to( lemonKidneySim, fiveTime, {opacity: 1}, "five");

    $("#disambiguationEquation").hide();
    $("#disambiguationEquationColored").fadeIn();

    tl.play();
}

function startDisambiguation() {
    var tl = new TimelineMax();
    tl.pause();
    var dude = document.getElementById("beanDudePic");

    var auto = document.getElementById("lemonCarPic");
    tl.to( auto, 1, {opacity: 0}, "one");

    var threeTime = 3;

    var lemonTxt = document.getElementById("lemon");
    var beanTxt = document.getElementById("bean");
    var kidneyTxt = document.getElementById("kidney");

    tl.to( lemonTxt, 3, {color: "rgba(0, 80, 200, 0.7)"}, "two");
    tl.to( beanTxt, 3, {color: "rgb(255, 128, 0)"}, "two");

    tl.to( dude, threeTime, {opacity: 0}, "three");

    var timeFour = 3;
    tl.to( beanTxt, timeFour, {color: "rgba(0, 80, 200, 0.7)"}, "four");
    tl.to( kidneyTxt, timeFour, {color: "rgb(255, 128, 0)"}, "four");
    tl.to( c3, timeFour, {opacity: 1}, "four" );

    tl.play();
}


var counterSimple = 0;
function wsdAnimation() {
    switch( counterSimple ) {
        case 0:
            $(".stopword").css("opacity", 0);
            $("#lemon").html('lemon<span class="sub">[1]</span>');
            $("#bean").html('bean<span class="sub">[2]</span>');
            $("#kidney").html('kidney<span class="sub">[3]</span>');
        break;
        case 1:
            $("#disambiguation").fadeIn( 1000 );
        break;
        case 2:
            $("#lemon").css("color", "rgb(255, 128, 0)");
            $("#disambiguationEquation").hide();
            $("#disambiguationEquationColored").fadeIn();
            startDisambiguation();
        break;
    }
    counterSimple += 1;
}

var counterFull = 0;
function wsdAnimationFull() {
    switch( counterFull ) {
        case 0:
            $(".stopword").css("opacity", 0);
            $("#lemon").html('lemon<span class="sub">[1]</span>');
            $("#bean").html('bean<span class="sub">[2]</span>');
            $("#kidney").html('kidney<span class="sub">[3]</span>');
        break;
        case 1:
            $("#disambiguation").fadeIn( 1000 );
        break;
        case 2:
            $("#lemon").css("color", "rgb(255, 128, 0)");
            startDisambiguationFull();
        break;
    }
    counterFull += 1;
}



function timebarAnimation() {

    function timelineDone(){
        var tl2 = new TimelineMax();
        tl2.pause();
        var formulare = document.getElementsByClassName("formular");
        tl2.staggerTo(formulare, 1, {opacity: 1}, 0.05, "start");
        tl2.play();
    }

    var i, s, pos;
    var tl = new TimelineMax({onComplete:timelineDone});
    tl.pause();
    for ( i = 0; i < 11; i++ ) {
        pos = (i * 10) + "%";
        s = '<div class="takt" style="left:' + pos + '"></div>';
        $("#timebar").append(s);
    }

    for ( i = 0; i < 11; i++ ) {
        pos = (i * 10) + "%";
        s = '<div class="takt2" style="left:' + pos + '"></div>';
        $("#timebar").append(s);
    }

    for ( i = 0; i < 3; i++ ) {
        pos = ( (i + 1) * 25 ) + "%";
        s = '<div class="formular" style="left:' + pos + '"><img class="bare" src="images/form_head.svg"></div>';
        $("#timebar").append(s);
    }

    for ( i = 0; i < 25; i++ ) {
        pos = ( (i * 4) + 2 * Math.random() - 0.5 )  + "%";
        s = '<div class="formular" style="left:' + pos + ';top: 80px;"><img class="bare" src="images/speech_bubble2.svg"></div>';
        $("#timebar").append(s);
    }

    var timelines = document.getElementsByClassName("timeline");
    var takts = document.getElementsByClassName("takt");
    var takts2 = document.getElementsByClassName("takt2");
    tl.staggerTo(timelines, 5, {width:"100%"}, 0.5, "start");
    tl.staggerTo(takts, 5, {opacity: 1}, 0.5, "start");
    tl.staggerTo(takts2, 5, {opacity: 1}, 0.5, "start");
    tl.play();

}

function landscapeAnimation() {

    var $landscape = $("#landscape");

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
        $landscape.append( s );
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
        $landscape.append( s );
        x = document.getElementById(name);
        clouds.push( x );
        randomPos = parseInt( Math.random() * 80, 10 ) + "%";
        leftRandomPos =  parseInt( Math.random() * 90, 10 ) + "%";
        tl.to( x, 0, {top: randomPos, left: leftRandomPos, opacity: 0}, "zero" );
    }

    var forums = [];
    var svgs = [];
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
        $landscape.append( s );
        x = document.getElementById(name);
        y = document.getElementById(backName);
        z = document.getElementById(backName + "_svg");
        clouds.push( x );
        forums.push( y );
        svgs.push( z );
        tl.to( x, 0, {top: forumPositions[j].top, left: forumPositions[j].left, opacity: 0}, "zero" );
        tl.to( y, 0, {top: forumPositions[j].top, left: forumPositions[j].left, opacity: 0}, "zero" );
    }

    tl.to(hospitals, 2, {rotation: 0 }, "start");
    tl.staggerTo(clouds, 5, {opacity: 1}, 0.2);
    tl.to(forums, 5, {opacity: 0.7, scale: 2}, "end");

    window.setTimeout(function(){
        svgs = svgs.map( function(svg) {
            var o = svg.getSVGDocument();
            return o.getElementsByTagName("path")[0];
        });
        tl.to(svgs, 5, {fill: "rgb(0, 80, 200)"}, "end");
        tl.to(clouds, 5, {opacity:0}, "end");
        tl.play();
    }, 1000);

}
