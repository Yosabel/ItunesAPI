$(document).ready(function() {
    $('#buttongo').on('click', function(){
    var artist=$('#artist').val();
    var res=$('#result').val();
    console.log(res);
        $.ajax({
            url: "https://itunes.apple.com/search?term="+ artist + "&limit=" + res,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                myFunction(result);
            },
            error: function() { alert('Failed!'); }
        });


    });


});


function myFunction(data){
    console.log(data);

    var list="<table border= '1'>";
    for(var i=0;i<data.results.length;i++){
        list+="<tr>";
        list+="<td>" + data.results[i].artistName + "</td>";
        list+="<td>" + "<img src='" + data.results[i].artworkUrl100 + "'>" + "</td>";
        list+="<td>" + data.results[i].collectionName + "</td>";
        list+="<td>" + data.results[i].trackName + "</td>";
        list+="<td>" + data.results[i].collectionPrice + "</td>";
        list+="<td>" + data.results[i].currency + "</td>";
        // list+="<td>" + '<audio controls="true" src= + "</td>";
        list+="<td>" + data.results[i].collectionExplicitness + "</td>";


            list+="</tr>";
    }
    list+="</table>";
$('#list').html(list);


}


