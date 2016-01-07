
setTimeout(function() {
	location.href = 'rocket.html';
}, 2000);



//invisible comment


var doCoolStuff = function() {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}
}
var sayMyName = function (name) {
	alert('My name is: '+name);
}