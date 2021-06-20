const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";
xhr.responseType = 'json';
//Set the xhr.onreadystatechange event handler equal to an anonymous arrow function. Leave the function //empty.
xhr.onreadystatechange = () =>{
if (xhr.readyState === XMLHttpRequest.DONE) {
 return xhr.response;
}
}
//written the boilerplate code for an AJAX GET request using an XMLHttpRequest object.
xhr.open('GET', url);
xhr.send();
