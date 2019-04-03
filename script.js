function clicker(){
    alert('Поле обновлено');
}
window.onload = function(){
   
    for (var i=0; i<9 ; i++ ){
        document.getElementById('game').innerHTML += '<div class="box"></div>';
    }
    var check = 0;
    document.getElementById('game').onclick = function(event){
        console.log(event);
        
        if(event.target.className == 'box'){
            if (check%2 == 0){
                event.target.innerHTML = 'X';
                check++;
            } else {
                event.target.innerHTML = 'O';
                check++;
                
            }
            winner();
        }
    } 
   function winner (){
       var table = document.getElementsByClassName('box');
       if (table[0].innerHTML == 'X' && table[1].innerHTML == 'X' && table[2].innerHTML == 'X'){
           document.getElementById('result').innerHTML = 'Крестики выиграли игру!';
       }
       if (table[3].innerHTML == 'X' && table[4].innerHTML == 'X' && table[5].innerHTML == 'X'){
        document.getElementById('result').innerHTML = 'Крестики выиграли игру!';
    }
    if (table[6].innerHTML == 'X' && table[7].innerHTML == 'X' && table[8].innerHTML == 'X'){
        document.getElementById('result').innerHTML = 'Крестики выиграли игру!';
    }
    if (table[0].innerHTML == 'X' && table[3].innerHTML == 'X' && table[6].innerHTML == 'X'){
        document.getElementById('result').innerHTML = 'Крестики выиграли игру!';
    }
    if (table[1].innerHTML == 'X' && table[4].innerHTML == 'X' && table[7].innerHTML == 'X'){
        document.getElementById('result').innerHTML = 'Крестики выиграли игру!';
    }
    if (table[2].innerHTML == 'X' && table[5].innerHTML == 'X' && table[8].innerHTML == 'X'){
        document.getElementById('result').innerHTML = 'Крестики выиграли игру!';
    }
    if (table[0].innerHTML == 'X' && table[4].innerHTML == 'X' && table[8].innerHTML == 'X'){
        document.getElementById('result').innerHTML = 'Крестики выиграли игру!';
    }
    if (table[2].innerHTML == 'X' && table[4].innerHTML == 'X' && table[6].innerHTML == 'X'){
        document.getElementById('result').innerHTML = 'Крестики выиграли игру!';
    }
    if (table[0].innerHTML == 'O' && table[1].innerHTML == 'O' && table[2].innerHTML == 'O'){
        document.getElementById('result').innerHTML = 'Нолики выиграли игру!';
    }
    if (table[3].innerHTML == 'O' && table[4].innerHTML == 'O' && table[5].innerHTML == 'O'){
     document.getElementById('result').innerHTML = 'Нолики выиграли игру!';
 }
 if (table[6].innerHTML == 'O' && table[7].innerHTML == 'O' && table[8].innerHTML == 'O'){
     document.getElementById('result').innerHTML = 'Нолики выиграли игру!';
 }
 if (table[0].innerHTML == 'O' && table[3].innerHTML == 'O' && table[6].innerHTML == 'O'){
     document.getElementById('result').innerHTML = 'Нолики выиграли игру!';
 }
 if (table[1].innerHTML == 'O' && table[4].innerHTML == 'O' && table[7].innerHTML == 'O'){
     document.getElementById('result').innerHTML = 'Нолики выиграли игру!';
 }
 if (table[2].innerHTML == 'O' && table[5].innerHTML == 'O' && table[8].innerHTML == 'O'){
     document.getElementById('result').innerHTML = 'Нолики выиграли игру!';
 }
 if (table[0].innerHTML == 'O' && table[4].innerHTML == 'O' && table[8].innerHTML == 'O'){
     document.getElementById('result').innerHTML = 'Нолики выиграли игру!';
 }
 if (table[2].innerHTML == 'O' && table[4].innerHTML == 'O' && table[6].innerHTML == 'O'){
     document.getElementById('result').innerHTML = 'Нолики выиграли игру!';
     
 }
   }
  
}
