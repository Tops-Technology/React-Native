const sumAge = (collection) => 
{  
    let num = 0;   
    collection.forEach((person) => 
    {    
        num += person.age;  
    });   
    return num;
}

const sumAge = (collection) => 
collection.reduce((sum, person) => 
{ 
    return sum + person.age;
}, 0);