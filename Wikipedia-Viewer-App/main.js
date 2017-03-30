$(document).ready(function () {
    $("#searchTerm").keypress(function(e){
        if(e.keyCode === 13){
            searchThis(e);
        }
    });

    $("#search").on("click", function(e){
        searchThis(e);
    });
});

    function searchThis(e){
        var searchTerm = $("#searchTerm").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
                      + searchTerm +"&format=json&callback=?";
        $.ajax({
        url: url,
        type: "GET",
        async: false,
        dataType: "json",
        success: function(data, status, jqXHR){
            console.log(data);
            for(var i = 0; i < data[1].length; i++) {
                $("#output").prepend("<div><div class='well'><a href="+data[3][i] 
                             +" target='_blank'><h2>" 
                             + data[1][i]+ "</h2>" + "</a><p>" + data[2][i] 
                             + "</p></div></div>");
            }
        }// end of success function

        });

    }// end of searchThis function

