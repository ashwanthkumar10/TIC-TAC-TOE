<script>

    function func1()

    {

      var b1 = document.getElementById('b1');

      var b2 = document.getElementById('b2');

      var b3 = document.getElementById('b3');

      var b4 = document.getElementById('b4');

      var b5 = document.getElementById('b5');

      var b6 = document.getElementById('b6');

      var b7 = document.getElementById('b7');

      var b8 = document.getElementById('b8');

      var b9 = document.getElementById('b9');

      var b1btn = document.getElementById('b1');

      var b2btn = document.getElementById('b2');

      var b3btn = document.getElementById('b3');

      var b4btn = document.getElementById('b4');

      var b5btn = document.getElementById('b5');

      var b6btn = document.getElementById('b6');

      var b7btn = document.getElementById('b7');

      var b8btn = document.getElementById('b8');

      var b9btn = document.getElementById('b9');

    }

    if(b1=='X' && b2=='X' && b3=='X')

    {

      document.getElementById('print').innerHTML='Palyer 1 wins'

      b4btn.disabled=true;

      b5btn.disabled=true;

      b6btn.disabled=true;

      b7btn.disabled=true;

      b8btn.disabled=true;

      b9btn.disabled=true;

    }

    else if(b1=='X' && b5=='X' && b9=='X')

    {

      document.getElementById('print').innerHTML='Palyer 1 wins'

      b2btn.disabled=true;

      b3btn.disabled=true;

      b4btn.disabled=true;

      b6btn.disabled=true;

      b7btn.disabled=true;

      b8btn.disabled=true;

    }

    else if(b4=='X' && b5=='X' && b6=='X')

    {

      document.getElementById('print').innerHTML='Palyer 1 wins'

      b1btn.disabled=true;

      b2btn.disabled=true;

      b3btn.disabled=true;

      b7btn.disabled=true;

      b8btn.disabled=true;

      b9btn.disabled=true;

    } else if(b7=='X' && b8=='X' && b9=='X')

    {

      document.getElementById('print').innerHTML='Palyer 1 wins'

      b1btn.disabled=true;

      b2btn.disabled=true;

      b3btn.disabled=true;

      b4btn.disabled=true;

      b5btn.disabled=true;

      b6btn.disabled=true;

    } else if(b3=='X' && b5=='X' && b7=='X')

    {

      document.getElementById('print').innerHTML='Palyer 1 wins'

      b1btn.disabled=true;

      b2btn.disabled=true;

      b4btn.disabled=true;

      b6btn.disabled=true;

      b8btn.disabled=true;

      b9btn.disabled=true;

    }

    else if(b1=='X' && b4=='X' && b7=='X')

    {

      document.getElementById('print').innerHTML='Palyer 1 wins'

      b2btn.disabled=true;

      b3btn.disabled=true;

      b5btn.disabled=true;

      b6btn.disabled=true;

      b8btn.disabled=true;

      b9btn.disabled=true;

    }

else if(b1.innerHTML=='O' && b2.innerHTML=='O' && b3.innerHTML=='O')

{

  document.getElementById('print').innerHTML='Player 2 wins'

  b4btn.disabled=true;

  b5btn.disabled=true;

  b6btn.disabled=true;

  b7btn.disabled=true;

  b8btn.disabled=true;

  b9btn.disabled=true;

}

else if(b1.innerHTML=='O' && b5.innerHTML=='O' && b9.innerHTML=='O')

{

  document.getElementById('print').innerHTML='Player 2 wins'

  b2btn.disabled=true;

  b3btn.disabled=true;

  b4btn.disabled=true;

  b6btn.disabled=true;

  b7btn.disabled=true;

  b8btn.disabled=true;

}

else if(b4.innerHTML=='O' && b5.innerHTML=='O' && b6.innerHTML=='O')

{

  document.getElementById('print').innerHTML='Player 2 wins'

  b1btn.disabled=true;

  b2btn.disabled=true;

  b3btn.disabled=true;

  b7btn.disabled=true;

  b8btn.disabled=true;

  b9btn.disabled=true;

} else if(b7.innerHTML=='O' && b8.innerHTML=='O' && b9.innerHTML=='O')

{

  document.getElementById('print').innerHTML='Player 2 wins'

  b1btn.disabled=true;

  b2btn.disabled=true;

  b3btn.disabled=true;

  b4btn.disabled=true;

  b5btn.disabled=true;

  b6btn.disabled=true;

} else if(b3.innerHTML=='O' && b5.innerHTML=='O' && b7.innerHTML=='O')

{

  document.getElementById('print').innerHTML='Player 2 wins'

  b1btn.disabled=true;

  b2btn.disabled=true;

  b4btn.disabled=true;

  b6btn.disabled=true;

  b8btn.disabled=true;

  b9btn.disabled=true;

}

else if(b1.innerHTML=='O' && b4.innerHTML=='O' && b7.innerHTML=='O')

{

  document.getElementById('print').innerHTML='Player 2 wins'

  b2btn.disabled=true;

  b3btn.disabled=true;

  b5btn.disabled=true;

  b6btn.disabled=true;

  b8btn.disabled=true;

  b9btn.disabled=true;

}

else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'

    || b2 == '0') && (b3 == 'X' || b3 == '0') &&

    (b4 == 'X' || b4 == '0') && (b5 == 'X' ||

      b5 == '0') && (b6 == 'X' || b6 == '0') &&

    (b7 == 'X' || b7 == '0') && (b8 == 'X' ||

      b8 == '0') && (b9 == 'X' || b9 == '0')) {

    document.getElementById('print')

      .innerHTML = "Match Tie";

  }

  else {

    // Here, Printing Result

    if (flag == 1) {

      document.getElementById('print')

        .innerHTML = "Player X Turn";

    }

    else {

      document.getElementById('print')

        .innerHTML = "Player 0 Turn";

    }

  }

    var xturn = true

    function fun3()

    {

      // click(event) is happening where the target is triggered and stored in the button and it changd into x with the help of the inner html

       if(xturn)

      {

        document.getElementById('b1').innerHTML='X'

        document.getElementById('b1').disabled=true

        xturn=false

     }

    else

    {

       document.getElementById('b1').innerHTML='O'

       document.getElementById('b1').disabled=true

      xturn=true

    }

    }

 </script>