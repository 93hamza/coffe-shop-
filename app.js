var order = prompt("what do you want coffe or tea?");

while(order != 'coffee' && order != 'tea')
{
    order = prompt("what do you want coffee or tea?");
}
var itemorder = "";

if(order == "coffee")
{
    itemorder = '<img src="coffee.png" />';
}
else
{
    itemorder = '<img src="tea.png" />';
}
var numofcups = prompt("how many cup do you want?");
var result = '';

for (var i = 0;i < numofcups; i++)
{
    result = result + itemorder;
}
document.write(result);
