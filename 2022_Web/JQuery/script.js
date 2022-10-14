// console.log($);

// Click and Click With Function
$("#c1").click(function(){
    console.log("Hello World!")
    $("#c").click();    
});
$("#c").click(function () {
    console.log("Hello World !!");
});
$("#c").click();
// Click and Click With Function 

// Hide use of this
$(".h1").click(function (){
$(this).hide();
});
// Hide use of this