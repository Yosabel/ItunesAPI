$(document).ready(function() {
    $('#buttongo').on('click', function(){
    var artist=$('#artist').val();
    var res=$('#results').val();
        $.ajax({
            url: "https://itunes.apple.com/search?term="+ artist + "&limit=" + res,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                console.log(result);
                myFunction(result);
            },
            error: function() { alert('Failed!'); }
        });





    });


});


function myFunction(json){
    var list="<table border='1'>";
    for(var i=0;json.results.length;i++){
        list+="<tr>";
        // list+="<td>" + json.results[i]. + "</td>";
        list+="<td>" + json.results[i].collectionName + "</td>";
        // list+="<td>" + json.results[i]. + "</td>";
        list+="</tr>";
    }
    list+="</table>";
$('#list').html(list);


}


