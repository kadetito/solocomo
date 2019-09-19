$(document).ready(function(){
	$( "#logout" ).click(function() {

			            	    		sessionStorage.removeItem("usuario");
			            	    		sessionStorage.removeItem("password");
			            	    		sessionStorage.removeItem("identificador");
			            	    		var u = sessionStorage.getItem("usuario", u);
			            	    		var p = sessionStorage.getItem("password", p);
			            	    		window.location.href = "login.html";


	});

});