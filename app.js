$(document).ready(function(){
    var moves = 1;
    var play = true;

    $("#gboard tr td").click(function()
    {
        //if it is player one's turn, fill cell with X
        // determine if move is odd
        
        //if the cell is empty
        if($(this).text()=="" && play)
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
        
             //Check to see if there is a winner
            if (checkWinner()!=-1 && checkWinner()!="") 
            { 
                console.log("Checked");
                if (checkWinner()=="X")
                {
                    console.log("Player X wins!")
                    alert("Player 1(X) wins!"); 
                }

                else
                { 
                    alert("Player 2(O) wins!"); 
                }

                play = false; 
            }
            
        }
        
        
    })

    function checkWinner() 
    {
        var cell1="",cell2="",cell3="",cell4="",cell5="",cell6="",cell7="",cell8="",cell9="";
        //get the gameboard into a variable
        var table = $("#gboard tbody");
        table.find('tr').each(function (i) 
        {
             var $tds = $(this).find('td');
             //Capture values in first row
             if(i==0)
             {
                cell1 = $tds.eq(0).text();
                cell2 = $tds.eq(1).text();
                cell3 = $tds.eq(2).text();
             }
             //Capture values in second row
             else if(i==1)
             {
                cell4 = $tds.eq(0).text();
                cell5 = $tds.eq(1).text();
                cell6 = $tds.eq(2).text();
             }
             //Capture values in third row
             else if(i==2)
             {
                cell7 = $tds.eq(0).text();
                cell8 = $tds.eq(1).text();
                cell9 = $tds.eq(2).text();
             }
        });

        console.log("cells in row 1:" + cell1 + " " + cell2 + " " + cell3);
        console.log("cells in row 2:" + cell4 + " " + cell5 + " " + cell6);
        console.log("cells in row 3:" + cell7 + " " + cell8 + " " + cell9);
        
        if((cell1==cell2) && (cell2==cell3)) 
        {
            return cell3; 
        }
        else if ((cell4==cell5) && (cell5==cell6)) 
        { 
            return cell6; 
        }	
        else if ((cell7==cell8) && (cell8==cell9)) 
        { 
            return cell9; 
        }

        // See if columns are equal
        else if ((cell1==cell4) && (cell4==cell7)) 
        { 
            console.log("cell7: " + cell7);
            return cell7; 
        }
        else if ((cell2==cell5) && (cell5==cell8)) 
        { 
            return cell8; 
        }
        else if ((cell3==cell6) && (cell6==cell9)) 
        {
            console.log(cell9);
            return cell9; 
        }
        // See if diagonals are equal
        else if ((cell1==cell5) && (cell5==cell9)) 
        {
           console.log(cell9);
           return cell9; 
        }
        else if ((cell3==cell5) && (cell5==cell7)) 
        { 
            console.log(cell7);
            return cell7; 
        }

        //if there is no winner
         else
         {
            return -1;
         }
        
    }


})

