### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:// getElementById helps to get one element by its unique id. you can not use one id in two element.   
   // getElementsByClassName helps to get all the elements  with same class name. you can use one class name in many elements and if you call it you will gat all of them. 
   // querySelector gives the first element that matChes the CSS selector.  
   // querySelectorAll gives all elements that match a CSS selector


2. How do you **create and insert a new element into the DOM**?

Ans: //const newName = document.createElement("div");
        nemName.innerText = "AFNAN";
        document.body.appendChild(newName);


3. What is **Event Bubbling** and how does it work?

Ans:// event bubbling means that when we click an event on a small element, that event will also pass to its bigger container elements step by step. If you click a button inside a div the event first runs on the button then on the div and thats how it will  keep going up to the top of the page.


4. What is **Event Delegation** in JavaScript? Why is it useful?

ANS: // event delegation means an event listener on a parent element to handle events of its child elements.It wll help you to code faster as you do not need to add events listener to every single child.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
ANS: // preventDefault stop the default actions of an element. example, we use this in form to stop refreshing the page when we click any button.On the other side,stopPropagation  stops the event bubbling. example, we can  use it in button to triggers only the button event.

---