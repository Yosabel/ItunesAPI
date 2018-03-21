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
//how to replace + with _
    var list="<table border= '1'>";
    list+="<td>" + 'Artist(s)' + "</td>";
    list+="<td>" + 'Wikipdia link of Artist' + "</td>";
    list+="<td>" + 'Genre' + "</td>";
    list+="<td>" + 'Album Cover' + "</td>";
    list+="<td>" + 'Album' + "</td>";
    list+="<td>" + 'Song' + "</td>";
    list+="<td>" + 'Collection Price' + "</td>";
    list+="<td>" + 'Currency' + "</td>";
    list+="<td>" + 'Rap Genius suggestions' + "</td>";
    list+="<td>" + 'Preview' + "</td>";
    list+="<td>" + 'Explicitness ranking' + "</td>";
    for(var i=0;i<data.results.length;i++){
        var artist=data.results[i].artistName;
        list+="<tr>";

        list+="<td>" + data.results[i].artistName + "</td>";
        list+="<td><a href ='https://en.wikipedia.org/wiki/" + artist + "'target='_blank' > All about  " +  artist + "</a></td>";
        list+="<td>" + data.results[i].primaryGenreName + "</td>";
        list+="<td><img src='" + data.results[i].artworkUrl100 + "'></td>";
        list+="<td><a href ='" + data.results[i].collectionViewUrl + "' target='_blank'>" + data.results[i].collectionName + "</a></td>";
        list+="<td>" + data.results[i].trackName + "</td>";
        list+="<td>" + data.results[i].collectionPrice + "</td>";
        list+="<td>" + data.results[i].currency + "</td>";
        list+="<td><a href ='https://genius.com/artists/" + artist + "'target='_blank' > Suggestions of  " +  artist + "</a></td>";
        list+="<td>" + "<audio controls='true'  src='" + data.results[i].previewUrl+ "' id= 'audio' type='audio/n4a'></audio>" + "</td>";
        list+="<td>" + data.results[i].collectionExplicitness + "</td>";

            list+="</tr>";
    }
    list+="</table>";
$('#list').html(list);


}


