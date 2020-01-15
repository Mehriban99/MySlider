

$(function(){
    // setInterval(function(){
    //     moveRight();
    // },5000);



var slidewidth = $("#slider ul li").width();
var slideheight = $("#slider ul li").height();
var slidecount = $("#slider ul li").length;
var slideULwidth = slidewidth * slidecount;

$("#slider").css({
    width: slidewidth,
    height: slideheight,
})

$("#slider ul").css({
    width: slideULwidth,
    marginLeft: - slidewidth,
})

function moveLeft() {
    $("#slider ul").animate({
        left: + slidewidth,
    }, 200, function(){
        $("#slider ul li:last-child").prependTo("#slide ul");
        $("#slider ul").css("left","")
    });
};

function moveRight() {
    $("#slider ul").animate({
        left: - slidewidth
    }, 200, function(){
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left","")
    })
}

$("#left").click(function(){
    moveLeft();
});

$("#right").click(function(){
    moveRight();
});
});



