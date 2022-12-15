var formulario = document.getElementById('formulario');
var user = document.getElementById('username').value;
var pas = document.getElementById('password').value;

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  var data1 = user;
  var data2 = user + "/" + pas;
  console.log(data1);
  const Datos = new FormData(formulario)

  async function postData(url = '', data = data1) {
    // Default options are marked with *
    const response = await fetch( url, {
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
    return response.json(); // parses JSON response inzto native JavaScript objects
  }

  var v = ""

  postData('http://127.0.0.1:8000/buscar_users/' + data1 )
    .then(res => res.json())
    .then(response => {
      
      v = response[0]    
      console.log(response)
      console.log(v)

      validar();
    })
    .then(res => Error)

function validar(){

  var rol = v["Id_Rol"]

  if(rol == 2){

    postData('http://127.0.0.1:8000/login/' + data2 )
    //.then(res => res.json())
    .then(response => {
      v = response[0]    
      console.log(v)

      login();
    })
    .then(res => Error)

  }else if (rol == 3){
    postData('http://127.0.0.1:8000/loginEm/' + data1 )
    //.then(res => res.json())
    .then(response => {
      
      v = response[0]    
      console.log(v)

      login();
    })
    .then(res => Error)

  }
}


function login() {

  var estado = v["Id_Estado"]
  var rol = v["Id_Rol"]
  console.log(rol)

    if (estado == 1) {
      if (rol == 2) {
        window.location.href = 'portfolio-details.html';
      } else if (rol == 3) {
        window.location.href = 'index.html';
      } else {
        alert('Usuario NO valido')
      }
    } else {
      alert('Usuario inactivo')
    }
    }
})