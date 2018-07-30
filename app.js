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
        }
        moves++;

    })
})
