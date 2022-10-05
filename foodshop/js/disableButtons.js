// disable buttons if user is not logged in

$(function() {
    $('.someInput').on('keyup',function() {
        var username = "newUser";
        var lastName = "test";
        if( $(this).val() == username + lastName ) {
            $('.someButton').attr('disabled', false);
        }
        else {
            $('.someButton').attr('disabled', true);
        }
    });
});

// Hacktoberfest

var userCountMax = 100;
var userCurrent= 0;
for(let i=0;i<userCountMax-3;i++){
    userCurrent=i;
}

// disable poslje prvog dodavanja
$('#myForm').one('submit', function() {
    $(this).find('input[type="submit"]').attr('disabled','disabled');
});


