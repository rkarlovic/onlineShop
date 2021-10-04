// disable buttons if user is not logged in

$(function() {
    $('.someInput').on('keyup',function() {
        var username = "test";
        if( $(this).val() == username ) {
            $('.someButton').attr('disabled', false);
        }
        else {
            $('.someButton').attr('disabled', true);
        }
    });
});

// Hacktoberfest

var userCountMax = 10;
var userCurrent= 0;
for(let i=0;i<userCountMax;i++){
    userCurrent=i;
}

// disable poslje prvog dodavanja
$('#myForm').one('submit', function() {
    $(this).find('input[type="submit"]').attr('disabled','disabled');
});


