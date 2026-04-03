// 1.To access the body elements
//   document.body

// 2.To access childnodes
//   document.body.childNodes

// 3.To Access Firstchild And last child;
// let child=document.body.childNodes[1]; // childNodes[1] means the 2nd index of child.
// child.firstChild; // first child will be shown "text node";
// child.firstElementChild; // div will be printed because div is an element;
// child.lastElementChild;

// 4.firstChild And lastChild colour change
// child.firstElementChild.style.color="Blue";
// child.firstElementChild.style.backgroundColor="purple";
// child.firstElementChild.style.border="white";

// 5. child.firstElementChild.parentElement //shows the parentclass of the child.

// 6. document.body.firstElementChild.children //shows only html elements in the selected element.
// document.body.firstElementChild.children[2] // selects the specific index children.

// 7. next and previous children print
// document.body.firstElementChild.children[2].nextElementSibling //prints next index children.
// document.body.firstElementChild.children[2].previousElementSibling // prints previous index element child.



