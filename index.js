
$(document).ready( function(){

$('.card1').click(function(){
    $('#description1').toggle();
    $('#img1').toggle();
})

$('.card2').click(function(){
    $('#description2').toggle();
    $('#img2').toggle();
})

$('.card3').click(function(){
    $('#description3').toggle();
    $('#img3').toggle();
})







$('#work1').hover(function(){
    $('#p1').toggle()
    
})

$('#work2').hover(function(){
    $('#p2').toggle()
    
})

$('#work3').hover(function(){
$('#p3').toggle()
    
})

$('#work4').hover(function(){
    $('#p4').toggle()
    
})

$('#work5').hover(function(){
    $('#p5').toggle()
    
})

$('#work6').hover(function(){
    $('#p6').toggle()
    
})

$('#work7').hover(function(){
    $('#p7').toggle()
    $('')
    
})

$('#work8').hover(function(){
    $('#p8').toggle()
    
})


$('#mc-embedded-subscribe').click(function(e){
    var name = $('#mce-MMERGE1').val();
    alert(name + " ,we have received your message. Thank you for reaching out to us")
})


})