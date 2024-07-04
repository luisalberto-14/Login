document.addEventListener("DOMContentLoaded",function(){
	events();
});

//variables
const pass=document.querySelector("#password");
const eyeOff=document.querySelector(".eye");
const eyeOn=document.querySelector(".eye-open");
const btnSesion=document.querySelector(".btn-sesion");
const passRegistro=document.querySelector("#password-registro");
const eyeOffRegistro=document.querySelector(".eye-registro");
const eyeOnRegistro=document.querySelector(".eye-open-registro");
const fondoLogin=document.querySelector(".fondo");
const btnRegis=document.querySelector("#boton-registro");
const btnLogin=document.querySelector("#boton-login");
const btnOlvide=document.querySelector("#boton-olvide");
const btnOlvideRegistro=document.querySelector("#boton-olvide-registro");
const btnLoginOlvide=document.querySelector("#boton-login-olvide");
const menuIcon=document.querySelector('.menu-icon');
const cerrarButon=document.querySelector('.cerrar-btn');

const btnClose=document.querySelector('.icono-close');
console.log(menuIcon)

//eventos
//console.log(pass)

function events(){
	eyeOff.addEventListener("click",changeTypePassword);
	eyeOn.addEventListener("click",changeTypeText);
	pass.addEventListener("input",changeText);

	eyeOffRegistro.addEventListener("click", changeTypePasswordRegistro);
    eyeOnRegistro.addEventListener("click", changeTypeTextRegistro);
    passRegistro.addEventListener("input", changeTextRegistro);

	btnSesion.addEventListener("click",abrirLogin);
	btnRegis.addEventListener("click",paginaRegistro);
	btnLogin.addEventListener("click",paginaLogin);
	btnOlvide.addEventListener("click",paginaOlvide);
	btnOlvideRegistro.addEventListener("click",paginaOlvideRegis);
	btnLoginOlvide.addEventListener("click",paginaLoginOlvide);

	menuIcon.addEventListener("click",menuBar);

	btnClose.addEventListener("click",closeBar);
	cerrarButon.addEventListener('click',cerrarBoton);
}

function menuBar(){
	const navegacion=document.querySelector('.navegation');
	navegacion.classList.add('show');
}

function closeBar(){
	const navegacion=document.querySelector('.navegation');
	navegacion.classList.remove('show');
}

function cerrarBoton(){
	fondoLogin.classList.remove('active-btn')
}


//funciones 
//cambiar el login para el password
function changeTypePassword(){
	//console.log("diste click en el ojo de cerrado");
	const eyeActive=eyeOn.classList.add("active");
		pass.setAttribute("type","text");
		eyeOff.classList.add("desactive");
	
}

function changeTypeText(){
	//console.log("diste click en el ojo de cerrado");
	const eyeActive=eyeOn.classList.remove("active");
	eyeOff.classList.remove("desactive");
	pass.setAttribute("type","password");
}

function changeText(){
	pass.setAttribute("type","text");

	setTimeout(()=>{
		pass.setAttribute("type","password");
		eyeOn.classList.remove("active");
		eyeOff.classList.remove("desactive");
	},300)

}

//password registro
function changeTypePasswordRegistro(){
    const eyeActive = eyeOnRegistro.classList.add("active");
    passRegistro.setAttribute("type", "text");
    eyeOffRegistro.classList.add("desactive");
}

function changeTypeTextRegistro(){
    const eyeActive = eyeOnRegistro.classList.remove("active");
    eyeOffRegistro.classList.remove("desactive");
    passRegistro.setAttribute("type", "password");
}

function changeTextRegistro(){
    passRegistro.setAttribute("type", "text");

    setTimeout(() => {
        passRegistro.setAttribute("type", "password");
        eyeOnRegistro.classList.remove("active");
        eyeOffRegistro.classList.remove("desactive");
    }, 300)
}

//botones para navegar entre formularios

function abrirLogin(){
	fondoLogin.classList.toggle("active-btn");
	const navegacion=document.querySelector('.navegation');
	navegacion.classList.remove('show');

}

function paginaRegistro(){
	fondoLogin.classList.add("active");
	fondoLogin.classList.remove("active-login");
}

function paginaLogin(){
	fondoLogin.classList.add("active-login");
	fondoLogin.classList.remove("active-olvide")
}

function paginaOlvide(){
	fondoLogin.classList.add("active-olvide");
	fondoLogin.classList.remove("active");
	fondoLogin.classList.remove("active-login")
	// fondoLogin.classList.remove("active");
}

function paginaOlvideRegis(){
	fondoLogin.classList.add("active-olvide");
	fondoLogin.classList.remove("active");
	fondoLogin.classList.remove("active-login");
}

function paginaLoginOlvide(){
	fondoLogin.classList.add("active-login");
	fondoLogin.classList.remove("active");
	fondoLogin.classList.remove("active-olvide");
}

//validar el formuario de login