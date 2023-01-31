//slelcting part of the document
const body=document.body// selecting a element
body.append("hello world")// appending text or other element to that element

//creating a element and appending to the body
const div1=document.createElement('div')
body.append(div1)
div1.textContent="Hello world 3"//same
div1.innerText="Hello world 2"//same, only last one will work

//selecting already existing element
const div2=document.querySelector("div")// selecting element
console.log("txtContent:  ",div2.textContent)//displays list of all the inner content
console.log("innerText:  ",div2.innerText)//displays exactly like output

//use of innerHTML to add html with string
const div3=document.createElement('div')
body.append(div3)
div3.innerHTML="<i>italic sentence</i>"//uses input html: adding html with string 

//creating a element with special property and appending it to another element
const div4=document.createElement('i')//creating a italic element by using 'i'
div4.innerText="italic second way"
div1.append(div4)//adding div4 at the end of div1, div4 will work as a child of div1

//selecting element by id
const div=document.querySelector("div")
const span_3=document.querySelector("#span3")
span_3.remove()//removing element
div.append(span_3)//apenfing element using their id
div.removeChild(span_3)//removing from parent using id
div.append(span_3)


//changing attribute
console.log(span_3.getAttribute("id"))//getting attribute type id
span_3.setAttribute("id","new_id")//changing attribute id, any attribute can be changed by this way
console.log(span_3.getAttribute("id"))
span_3.removeAttribute("id")//removing attribute

//custom attribute: by using "data-" infront of the name of the attribute
const span_1=document.querySelector("#span1")
console.log(span_1.dataset)//printing all custom attribute
console.log(span_1.dataset.new_attribute)//printing specific custom attribute
span_1.dataset.new_element_name='new element'//adding new custom attribute
console.log(span_1.dataset)
console.log(span_1.classList)//getting class list
span_1.classList.add("new_class")//adding new class
span_1.classList.remove("class1")//removing an existing class
console.log(span_1.classList)
span_1.classList.toggle("abc")//adds abc class if it doesn't exist, removes abc class if it exists
span_1.classList.toggle("abc",false)//removes if exist
span_1.classList.toggle("abc",true)//add if it doesn't exist

//manipulating style property directly
span_1.style.backgroundColor="red"