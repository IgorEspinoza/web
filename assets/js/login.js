var formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('click')

    const Datos = new FormData(formulario);
    console.log(Datos);

    const API_URL = "http://127.0.0.1:8000/login/";
    const otherParam = {
      headers: {
        "content-type": "aplication/json; charset=UTF-8"
      },
      body: Datos,
      method: "GET"
    };

    const login = async()=>{
      const res = await fetch(API_URL + otherParam);
      const data = await res.json();
      console.log(data);
    };

    window.addEventListener("load", function(){
      login();
    });
    /* fetch(API_URL + otherParam)
      .then(data => { return data.json() })
      .then(res => { response.json(res) })
      .catch(error => console.log(error))
 */
})