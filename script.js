console.log("Hello World!")
console.log($('#heading'))
console.log($('.para'))
// $("#heading").css("color", "red")

$('#heading').click(function() {
    $('.para').css("color","tomato")
});