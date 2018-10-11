// function Add(numbers).js

/* Skrifa test fyrir eftirfarandi:
    1. Tölur mega ekki vera stærri en 1000
    2. Forritið tekur ekki við negatívum tölum
*/

function Add(numbers)
{
    
    var x = "-5";
    var y = "1";
    var z = "2";
    
    var num1 = parseInt(x);
    var num2 = parseInt(y);
    var num3 = parseInt(z);
    
    if (num1 < 0)
    {
        console.log("Negatives not allowed: " + num1);
    }
    else if (num1 > 1000)
    {
        var sum = num2 + num3;
        console.log(sum);
    }
    else if (num2 < 0)
    {
        console.log("Negatives not allowed: " + num2);
    }
    else if (num2 > 1000)
    {
        var sum = num1 + num3;
        console.log(sum);
    }
    else if (num3 < 0)
    {
        console.log("Negatives not allowed: " + num3);
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