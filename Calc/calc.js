
var text_field = document.getElementById("text-field");
var clear = document.getElementById("clear");

function perform(num)
{
    text_field.value += num;
}

function equal()
{
    try{
    var exp = text_field.value;
    text_field.value = eval(exp);
    }catch(Exception)
    {
        text_field.value = "Error";
    }

}

function c()
{
    text_field.value = "";
}

function undo()
{
    var exp = text_field.value;
    text_field.value = exp.substring(0,exp.length-1);
}
