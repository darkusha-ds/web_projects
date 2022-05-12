
function toggle(){

	//getting the password field
	const passField = document.getElementById("passField");

	if(passField.type === "password"){

		passField.type = "text";

	}else{

		passField.type = "password";

	}

}