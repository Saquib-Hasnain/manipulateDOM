var parent = document.querySelector('.list-group');
//parentElement
console.log(parent.parentElement);
//lastelementchild
console.log(parent.lastElementChild);
//lastchild
console.log(parent.lastChild);
//firstchild
console.log(parent.firstChild);
//firstelementchild
console.log(parent.firstElementChild);
//nextsibling
console.log(parent.nextSibling);
//nextelementsibling
var item = document.querySelector('.list-group-item');
console.log(item.nextElementSibling.nextElementSibling);
//previoussibling
var prevItem = item.nextElementSibling.nextElementSibling;
console.log(prevItem.previousSibling);
//previouselementsibling
console.log(prevItem.previousElementSibling);
//createElement
var newdiv = document.createElement('div');
newdiv.className= 'Hello';
newdiv.id = 'title';
console.log(newdiv)
//setAttribute
newdiv.setAttribute('title','Hello Div');
//create text node
var textnode = document.createTextNode('Hello World');
//appendchild
newdiv.appendChild(textnode);
// insert before items lister
var container = document.querySelector('.container');
var h1 = document.querySelector('#header-title');
container.insertBefore(newdiv,h1);
// insert before item 1
var itemtable = document.querySelector('.list-group');
var li = document.querySelector('.list-group-item');
itemtable.insertBefore(newdiv,li);

