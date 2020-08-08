const form = document.querySelector("#info")
const email = document.querySelector("#email");
const emailHelp = document.querySelector("#emailHelp");
const password = document.querySelector("#password");
const passwordHelp = document.querySelector("#passwordHelp");


form.addEventListener("submit", (event) => {
	event.preventDefault()

if (email.value === "" && password.value === ""){
	
		emailHelp.innerText = "Por favor coloque su email"
		passwordHelp.innerText = "Por favor coloque su contraseña"
	
} else {
	
	if (email.value != "" && password.value === ""  ) {
		emailHelp.innerText= "       "
		passwordHelp.innerText = "Por favor coloque su contraseña"
	}


	if (email.value === "" && password.value != "") {
		emailHelp.innerText = "Por favor coloque su email"
		passwordHelp.innerText = "   "
	} else {
		if (email.value != "" && password.value != "") {
			form.submit();
			console.log("Funciona")
		}
		
	}
	
}

	console.log("Intentó iniciar sesión")
})
