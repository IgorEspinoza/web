var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('click')

  const Datos = new FormData(formulario);
  console.log(Datos);

  var myHeaders = new Headers();
  myHeaders.append("" , 'formulario/username');
  myHeaders.append("" , 'formulario/password');
  
  

  var formdata = new FormData();
  formdata.append("", username);
  formdata.append("", password);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:8000/login/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

});
 /* async function postData(url = '', data = {Datos}) {
   // Default options are marked with *
   const response = await fetch(url, {
     method: 'POST', // *GET, POST, PUT, DELETE, etc.
     mode: 'cors', // no-cors, *cors, same-origin
     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
     credentials: 'same-origin', // include, *same-origin, omit
     headers: {
       'Content-Type': 'application/json',
       //'Content-Type': 'application/x-www-form-urlencoded',
     },
     redirect: 'follow', // manual, *follow, error
     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     body: JSON.stringify(data) // body data type must match "Content-Type" header
   });
   console.log(JSON.stringify(data))
   return response.json(); // parses JSON response into native JavaScript objects
 }

 postData('http://127.0.0.1:8000/login/'+ )
   .then((data) => {
     console.log(data); // JSON data parsed by `data.json()` call
   });
});   */


/* var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "USERNAME": "195695717",
  "PASSWORD": "pro"
});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/login/195695717/pro", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); */