// var Req = new XMLHtttpRequest();
// Req.open("GET", "http://ec2-52-28-87-138.eu-central-1.compute.amazonaws.com/rest/public/api/city", false);
// Req.send(null);
// var jsonObject = JSON.parse(Req.responseText;

// $(function(){
//     $.getJSON('http://ec2-52-28-87-138.eu-central-1.compute.amazonaws.com/rest/public/api/city', function(data) {
//         console.log(data);
//     });
// });

$(document).ready(function() {
    $.getJSON({
        url: "http://ec2-52-28-87-138.eu-central-1.compute.amazonaws.com/rest/public/api/meals"
    }).then(function(meal) {
       console.log(meal);
       console.log(meal[0].meal_name);
    });
});
