listValues = [6, -1, -4, 0, -6, 5, 3] ;
newListValues =[];

for(valeur of listValues)

{
    if (valeur < 0)
    {
        newListValues.push(-valeur);
    }
    else
    {
        newListValues.push(valeur);
    }
}

for(valeur of newListValues) 
{
    console.log(valeur)
}