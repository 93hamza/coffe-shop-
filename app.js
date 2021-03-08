var order = prompt("do you want large or small pizza?");

while(order != 'large' && order != 'small')
{
    order = prompt("do you want large or small pizza?");
}
var itemorder = "";

if(order == "large")
{
    itemorder = '<img src="pizza2.png" />';
}
else
{
    itemorder = '<img src="pizza1.png" />';
}
var numofslice = prompt("how many slice do you want?");
var result = '';

for (var i = 0;i < numofslice; i++)
{
    result = result + itemorder;
}
document.write(result);
