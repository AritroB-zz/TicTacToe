$(document).ready(function(){
    var moves = 1;
    var play = true;

    $("#gboard tr td").click(function(){
        //if it is player one's turn, fill cell with X
        // determine if move is odd
        console.log('clicked');
        console.log("hi" + $(this).text());
        //if the cell is empty
        if($(this).text()=="")
        {
            //input X for first player
            if((moves%2==1))
            {
                $(this).append('X');                               
            }
            //input O for second player
            else
            {
                $(this).append('O');
                $(this).css('color','blue'); 
            }
            moves++;
        }        
    })

    function checkWinner() 
    {
        var c1 = $("board tr:nth-child(1) td nth-child(1)").text();
        var c2 = $("board tr:nth-child(1) td nth-child(2)").text();
        var c3 = $("board tr:nth-child(1) td nth-child(3)").text();
        var c4 = $("board tr:nth-child(2) td nth-child(1)").text();
        var c5 = $("board tr:nth-child(2) td nth-child(2)").text();
        var c6 = $("board tr:nth-child(2) td nth-child(3)").text();
        var c7 = $("board tr:nth-child(3) td nth-child(1)").text();
        var c8 = $("board tr:nth-child(3) td nth-child(2)").text();
        var c9 = $("board tr:nth-child(3) td nth-child(3)").text();
        
    }
})

