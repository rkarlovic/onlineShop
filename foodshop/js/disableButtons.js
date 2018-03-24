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


// disable poslje prvog dodavanja
$('#myForm').one('submit', function() {
    $(this).find('input[type="submit"]').attr('disabled','disabled');
});