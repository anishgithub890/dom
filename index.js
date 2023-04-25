{
  /* Root Node */
}
{
  /* {console.log(document.documentElement)} */
}
{
  /* {console.log(document.body)} */
}
{
  /* {console.log(document.head)} */
}
{
  /* childrens */
}
{
  /* {console.log(document.body.childNodes)} */
}
{
  /* {console.log(document.body.children)} */
}
{
  /* for (node of document.body.children) {console.log(node)} */
}
{
  /* for (node of document.body.childNodes) {console.log(node)} */
}
{
  /* {console.log(document.body.firstChild)} */
}
{
  /* {console.log(document.body.lastChild)} */
}
{
  /* {console.log(document.body.firstElementChild)} */
}
{
  /* {console.log(document.body.lastElementChild)} */
}
{
  /* Array.from(document.body.children) */
}
{
  /* {
          const childrensOfBody = Array.from(document.body.children)
          console.log(childrensOfBody)
      } */
}

{
  /* Siblings */
}
{
  /* {console.log(document.body.children[0])} */
}
{
  // const ulTag = document.body.children[0];
  // const firstLi = document.body.children[0];
  // const secondLi = document.body.children[1];
  // console.log(secondLi.previousElementSibling);
  // console.log(ulTag.nextElemetSibling);
}
//   const tableTag = document.body.children[1];
//   console.log(tableTag);

//   const tableTagzeero = document.body.children[1];
//   console.log(tableTagzeero.rows);
//   console.log(
//     (tableTagzeero.tBodies[0].rows[0].cells[0].style =
//       'background-color: red')
//   );
//   console.log(
//     (tableTagzeero.tBodies[0].rows[0].cells[1].style =
//       'background-color: green')
//   );
//   console.log(
//     (tableTagzeero.tBodies[0].rows[0].cells[2].style =
//       'background-color: yellow')
//   );
//   console.log(
//     (tableTagzeero.tBodies[0].rows[0].cells[3].style =
//       'background-color: violet')
//   );

// const tableTag = document.body.children[1];
// console.log(
//   (tableTag.tBodies[0].rows[1].style = 'background-color: blue')
// );

// ID search
//   const ulTag = document.getElementById('element');
//   ulTag.style.backgroundColor = 'red';
//   const bg = (element.style.background = 'red');
//   console.log(bg);
//   element.style.backgroundColor = 'green';
// listItem = document.getElementsByClassName('list-item');
// console.log(document.getElementsByTagName('table'));

// for all selector
// const listItem = document.querySelectorAll('.list-item');
// for one selector
// const listItem = document.querySelector('#element');
// console.log(listItem);
// const listItem = document.querySelectorAll('ul > li:nth-child(1)');
// const listItem = document.querySelectorAll('ul > li:last-child');
// console.log(listItem[0].textContent);

// Attributes
// console.log(element.getAttribute('data'));
// console.log(element.setAttribute('order-place', 'pending'));
// console.log(element.getAttribute('order-place'));
// console.log(element.removeAttribute('order-place'));
// console.log(element.hasAttribute('order-place'));
// console.log(element.attributes);

const newDiv = document.createElement('div');
// newDiv.textContent = 'Hello World';
newDiv.innerHTML = `Hellow worls`;
// const newText = document.createTextNode('hello world');
// newDiv.appendChild(newText);
// body.append(newDiv);
// body.prepend(newDiv);
// body.before(newDiv);
// body.after(newDiv);
// firstDiv.replaceWith(newDiv);
// firstDiv.remove();
