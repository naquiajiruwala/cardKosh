
function changeName()
    {
        document.getElementById("header").innerHTML = "You passed.";
    }
function changeItBack()
    {                
        document.getElementById("header").innerHTML = "This is a test.";
    }

function Maths()
    {
        alert(100 + 123);
    }

function toCelsius(fahrenheit)
{
    var temp = (5 / 9) * (fahrenheit - 32);
    document.getElementById("tempChange").innerHTML = temp;
}

function calculateLength(sentence)
{
    document.getElementById("length").innerHTML = sentence.length;
}

function findWord(sentence)
{
    document.getElementById("locate").innerHTML = sentence.indexOf("long");
}

function findWordSearch(sentence, word)
{
    document.getElementById("search").innerHTML = sentence.search(word);
}

function sliceString(sentence)
{
    document.getElementById("slice").innerHTML = sentence.slice(7,12);
}

function subString(sentence)
{
    document.getElementById("sub").innerHTML = sentence.substring(7, 14);
}

function extractWord(sentence)
{
    document.getElementById("subStr").innerHTML = sentence.substr(10,3);
}

function replaceWord(sentence)
{
    document.getElementById("replace").innerHTML = sentence.replace("long", "too long");
}

function changeCase(sentence, strCase)
{
    if (strCase == "lower") 
    {
        document.getElementById("lowercase").innerHTML = sentence.toLowerCase();
    }
    document.getElementById("uppercase").innerHTML = sentence.toUpperCase();
}