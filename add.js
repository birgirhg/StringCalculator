// function Add(numbers).js

/* Skrifa test fyrir eftirfarandi:
    1. Tölur mega ekki vera stærri en 1000
    2. Forritið tekur ekki við negatívum tölum
*/

function Add(numbers)
{
    var x = "0";
    var y = "";
    var z = "2";
    
    var num1 = parseInt(x) || 0;
    var num2 = parseInt(y) || 0;
    var num3 = parseInt(z) || 0;
    
    if (num1 < 0)
    {
        throw ("Negatives not allowed: " + num1);
    }
    else if (num1 > 1000)
    {
        var sum = num2 + num3;
        console.log(sum);
    }
    else if (num2 < 0)
    {
        throw ("Negatives not allowed: " + num2);
    }
    else if (num2 > 1000)
    {
        var sum = num1 + num3;
        console.log(sum);
    }
    else if (num3 < 0)
    {
        throw ("Negatives not allowed: " + num3);
    }
    else if (num3 > 1000)
    {
        var sum = num1 + num2;
        console.log(sum);
    }
    else
    {
    var sum = num1 + num2 + num3;
    console.log(sum);
    }
}

    
Add();