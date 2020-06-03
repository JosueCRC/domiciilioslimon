function registrar(){
    
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('contraseña').value;
    console.log(email);
    console.log(contraseña);

    firebase.auth().createUserWithEmailAndPassword(email, contraseña)
    .then(function(){
        verificar()
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
   
    
}

function ingreso(){
    
    var email2 = document.getElementById('email2').value;
    var contraseña2 = document.getElementById('contraseña2').value;
    console.log(email2);
    console.log(contraseña2);
    firebase.auth().signInWithEmailAndPassword(email2, contraseña2).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorCode);
        alert(errorMessage);
      });
}

function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log('Existe usuario Activo')
          aparece(user);
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
            console.log('*********')
            console.log(user.emailVerified);
            console.log('*********')

          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          console.log('*********')
          console.log(displayName);
          console.log('*********')
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log('No se ha iniciado sesion.')
          // ...
          contenido.innerHTML= `

          <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Bienvenido!</strong> no has iniciado sesión.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        
    `;
        }
      });
}

observador();

function aparece(user){
    var user = user;
    var contenido = document.getElementById('contenido');
    if (user.emailVerified){
        contenido.innerHTML= `
          <div class="alert alert-light" role="alert">


            <div class="card-header card-header-primary text-center">

                <div class="row">
                  <div class="col-sm-8"></div>
                  <div class="col-sm-4" ><p id="username">${user.email} </p>
                  
                  <a href="#" class="badge badge-danger "data-toggle="modal" data-target="#" onclick="cerrar()">x cerrar sesion</a>
                  
                </button>
                
                <!-- Modal -->
                <div class="modal fade" id="cerrarSesion" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Desea Cerrar sesión</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        ${user.email}
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button  class="btn btn-danger" >Cerrar sesion</button>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                </div>

                    <h3 class="card-title" id="titulo">Area de Salud Limon.!</h3>
              <p class="description text-center" id="encabezado">FORMULARIO DE REGISTRO PARA EL ENVIO A DOMICILIO DE LOS MEDICAMENTOS</p>
              <div class="social-line">
           
              
              </div>

              <hr>
              <div class="container">
      <div class="card-body">
          <div class="row">
                <div class="col col-12 col-md-6">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Tipo de Identificacion</label>
                    <select id="tipoId"  class="form-control" required="required"><option value="">Seleccione:</option>
                    <option value="0">NACIONAL</option>
                    <option value="7">EXTRANGERO</option>
                    <option value="6">INTERNO</option>
                    														
                </select>
                  </div>  
                </div>
              <div class="col col-12 col-md-6">
                <div class="input-group">
                    <label for="exampleFormControlSelect1">Numero de Identificacion</label>
                    <input type="hidden" id="id" value="" class="form-control" />
                  </div>
                  <div class="input-group">
                  <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="material-icons">format_list_numbered</i>
                      </span>
                    </div>
                    <input type="text" id="cedula" placeholder="Identificacion" value="" class="form-control" />
                  </div>
              </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">face</i>
                  </span>
                </div>
                <input type="text" id="nombre" placeholder="Nombre del Paciente" value="" class="form-control text-uppercase" />
              </div>
            </div>
          </div>
            <div class="row mt-3">
                  <div class="col-12 col-md-6">
                      <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">mobile_screen_share</i>
                        </span>
                      </div>
                      <input type="text" id="telefono" placeholder="Telefono" value="" class="form-control" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                      <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">mobile_screen_share</i>
                        </span>
                      </div>
                      <input type="text" id="correo" placeholder="Correo" value="" class="form-control" />
                    </div>
                  </div>
            </div>
              
            <input type="hidden" id="fecha" placeholder="fecha" value="" class="form-control" />

                <div class="row mt-3">
                      <div class="col col-12 col-md-6">
                      <div class="input-group mb-3 ">
                        <div class="input-group-prepend">
                          <label class="input-group-text" for="inputGroupSelect01"><i class="material-icons">face</i></label>
                        </div>
                          <select  id="ebais" name="ebais_activos" class="form-control" required="required"><option value="" >Seleccione:</option>
                            <option value="263201">EBAIS LOS COCOS </option>
                            <option value="263202">EBAIS LA COLINA </option>
                            <option value="263203">EBAIS PUEBLO NUEVO </option>
                            <option value="263204">EBAIS LOS CORALES  </option>
                            <option value="263205">EBAIS SANTA EDUVIGES </option>
                            <option value="263206">EBAIS CRISTOBAL COLON</option>
                            <option value="263207">EBAIS VILLA DEL MAR  </option>
                            <option value="263208">EBAIS LIVERPOOL  </option>
                            <option value="263209">EBAIS RIO BANANO </option>
                            <option value="263210">EBAIS BANANITO</option>
                            <option value="263220">EBAIS LIMON CENTRO</option>
                            <option value="263221">EBAIS LIMON 2000 </option>															
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-6">
                          <div class="input-group">
                            <label for="exampleFormControlSelect1">Medio de Activacion</label>
                            <input type="hidden" id="id" value="" class="form-control" />
                          </div>
                        <div class="input-group">
                          <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
                            <label class="custom-control-label" for="customRadioInline1"><i class="material-icons">local_phone
                            </i>Telefono</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
                            <label class="custom-control-label" for="customRadioInline2"><i class="material-icons">settings_cell
                            </i>WhatsApp</label>
                          </div>
                        </div>
                    </div>
                </div>
            
              <div class="form-group">
              <label for="exampleFormControlTextarea1">Señas Exactas:</label>
              <textarea class="form-control text-uppercase" id="direccion" rows="2"></textarea>
            </div>
              <div class="row">
                <div class="col-sm">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="material-icons">record_voice_over
                        </i>
                      </span>
                    </div>
                    <input type="text" class="form-control" id ="recibe" placeholder="PERSONA QUE RECIBE EL TRATAMIENTO">
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-6 text-center mt-3">
                  <button class="btn btn-primary btn-lg btn-block" id="boton" onclick="guardar()" >Guardar</button>
                </div>
              </div>
      </div>
    </div>
            </div>

            <div class="container mt-4" >
            <div class="col-4 col-md-6 sx-12">
              <div class="input-group">
              
              <input type="text" id="myInput" onkeyup="myFiltro()" placeholder="Buscar" value="" class="form-control" />
              <span class="input-group-text">
                <i class="material-icons">search</i>
              </span>
            </div>
          </div>
      </div>
     
    <div class="container mt-3 " >     
    <div class="table-responsive">
      <table class="table" >
        <thead>
          <tr>
            <th scope="col">TipoID</th>
            <th scope="col">Cedula</th>
            <th scope="col">Nombre Completo</th>
            <th scope="col">Ebais</th>
            <th scope="col">Telefono</th>
            <th scope="col">Fecha</th>   
            <th>Eliminar</th>
            <th>Editar</th>
            <th>Imprimir</th>
          </tr>
        </thead>
        <tbody id="tabla"> </tbody>
      </table>
    </div>
  </div>
            
        
    `
   //Leer documentos.
var tabla = document.getElementById('tabla');
db.collection("CopiasTelefono").orderBy("Fecha", "desc").onSnapshot((querySnapshot) => {
//db.collection("CopiasTelefono").where("Cedula", "==", "").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    contador = 0
     querySnapshot.forEach((doc) => {
        /* console.log(`${doc.id} => ${doc.data()}`); */
        contador++;
        
        //console.log (contador);
        if (user.emailVerified){

        }else{
            
        }
            


        tabla.innerHTML += `
        <tr>
        <td>${doc.data().TipoID}</td>
        <th scope="row">${doc.data().Cedula}</th>
        <td>${doc.data().Nombre}</td>
        <td>${doc.data().Ebais}</td>
        <td>${doc.data().Telefono}</td>
        <td>${doc.data().Fecha}</td>
        <td><button class="btn btn-danger btn-just-icon btn-sm" onclick="eliminar('${doc.id}')"> <i class="material-icons">close</i></button></td>
        <td><button class="btn btn-success btn-just-icon btn-sm"onclick="editar('${doc.id}','${doc.data().TipoID}','${doc.data().Cedula}','${doc.data().Nombre}','${doc.data().Telefono}','${doc.data().Ebais}','${doc.data().Correo}','${doc.data().Direccion}','${doc.data().Recibe}','${doc.data().Fecha}')">  <i class="material-icons">edit</i></button></td>
        <td><button class="btn btn-warning btn-just-icon btn-sm"onclick="imprimirElemento('${doc.id}','${doc.data().Cedula}','${doc.data().Nombre}','${doc.data().Telefono}','${doc.data().Ebais}','${doc.data().Direccion}','${doc.data().Recibe}','${doc.data().Fecha}')">  <i class="material-icons">print</i></button></td>
        </tr>   
        ` //<- ojo a estas comillas especiales 
    });
});
 }
    
}


function cerrar(){
    firebase.auth().signOut()
    .then(function(){

        console.log('Cerrando Sesion...')
    })
    .catch(function(error){
        console.log(error)

    })
}

function verificar(){
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
    // Email sent.
    console.log('Enviando Correo...');
    }).catch(function(error) {
    // An error happened.
    console.log(error);
    });
}