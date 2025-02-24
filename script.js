documet.addEventListener("DOMContentLoaded", function(){

	const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");

	const savedUsername = localStorage.getItem("Username")
	const savedPassword = localStorage.getItem("Password")

	if(savedPassword && savedPassword){
		existingBtn.style.display ="block"
	}else{
		existingBtn.style.display ="none"
	}

	const form = document.querySelector("form");
	form.addEventListener("submit", function(event){
						  event.preventDefault();
		const username = usernameInput.value;
		const password = passwordInput.value;

		alert ("Logged in as" + username);

		if(rememberCheckbox.checked){
			localStorage.setItem("username",username);
			localStorage.setItem("password",password);

			existingBtn.style.display ="block"
		}else {
			localStorage.removeItem("username");
			localStorage.removeItem("password")

			existingBtn.style.display ="none"
		}
	});

	existingBtn.addEventListener("click",function (){
		const savedUser = localStorage.getItem("username");
		alert("Logges in as "+savedUser)
	});
});