let string = "";
let buttons=document.querySelectorAll('.button');
    // querySelectorAll it select all classes of name button

Array.from(buttons).forEach((item)=>{
    item.addEventListener('click' , (e)=>{
        // console.log(e)
        if(e.target.innerHTML =='='){
            string=eval(string);
            document.querySelector('input').value = string;
            // console.log(e.target)
        }
        else if(e.target.innerHTML =='C'){ 
            string="";           
            document.querySelector('input').value =string ;
        }
        else{
            console.log(e.target)        
            string=string + e.target.innerHTML ;
            document.querySelector('input').value = string;
        }
    })
})
// e.target.innerHTML is a property that allows you to access or modify the HTML content inside the target element of an event. Let's break down what this means and how it can be used:

// What is innerHTML?
// innerHTML is a property of DOM elements that represents the HTML markup contained within an element. It includes both text and any child elements.

