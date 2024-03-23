<<<<<<< HEAD
# Intellex-test-JS
This repository will contain some answers to shortQuiz in Javascript given by INTELLEX
=======
1.Version Control
Definition:
Version control is a system that records changes to files over time,allowingyou to recall specific versions later

Why is it useful:
-Fot collaboration
-History tracking
-code review

**.Difference between Merge and rebase in Git
MERGE combinechanges from different branches into one branch while 
REBASE reapplies commits from one branch onto another branchs tip

2**Purpose of Semantic HTML: 
Semantic HTML provides meaning to the content of a web page by using HTML tags that convey the structure and purpose of the content

**Importance for Accessibility and SEO:
*Accessibility:
 Semantic HTML improves accessibility by providing assistive technologies with meaningful information about the content and its structure, making it easier for users with disabilities to navigate and understand the webpage.

*SEO: 
Search engines rely on semantic HTML to understand the content and context of a webpage, which can positively impact its ranking in search results.

3**CSS
*CSS Box Model:
The CSS box model describes the layout and rendering of elements on a webpage.
It consist of four main component which include:
*Content: The actual content of the element, such as text or images.
*Padding: The space between the content and the element's border.
*Border: A border surrounding the padding area.
*Margin: The space outside the border, separating the element from other elements.


*CSS Specificity:
CSS specificity determines which style rules take precedence when multiple conflicting styles are applied to the same element.
It is based on the specificity of selectors used in CSS rules.


4**JAVASCRIPT

*Event Delegation:
Event delegation is a technique in JavaScript where instead of attaching event handlers to individual elements, you attach a single event handler to a parent element.
This handler then listens for events bubbling up from child elements

*Closures:
Closures in JavaScript refer to the ability of a function to remember and access its lexical scope, even when the function is executed outside that scope. 
They are created whenever a function is defined within another function and has access to variables declared in the outer function
an example follow:

function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log('Count:', count);
    };
}

let counter = createCounter();

counter(); 
counter(); 
counter(); 


5**Web Performance & Accessibility:
*WAys to improve web page performance
-Minimize HTTP Requests by combining and minifying CSS and JavaScript files.
-Optimize Images by using appropriate formats, compressing, and lazy loading.
-Implement Caching to reduce server load and speed up page loading times.
 
*Role of ARIA Roles in Web Accessibility:
 ARIA roles are a set of attributes used to define the roles and properties of elements on a webpage, particularly for assistive technologies such as screen readers
>>>>>>> master
