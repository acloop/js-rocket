var timer = null;
var countdownNumber = 10;
var changeState = function (state) {
	document.body.className = 'body-state'+state;

	clearInterval(timer);
	countdownNumber = 10
	document.getElementById('countdown').
		innerHTML = countdownNumber;

	if (state == 2) {
		timer = setInterval(function () {
			countdownNumber = countdownNumber -1;
			
			document.getElementById('countdown').
				innerHTML = countdownNumber;
			
			if (countdownNumber > 5 && countdownNumber <= 8) {
				// effect1
				document.getElementById('effect1').className = 'effect1 show';
			} else{
				document.getElementById('effect1').className = 'effect1';
			}

			if (countdownNumber >1 && countdownNumber <=4) {
				// effect2
				document.getElementById('effect2').className = 'effect2 show';
			} else{
				document.getElementById('effect2').className = 'effect2';
			}

			if (countdownNumber <= 0)
				changeState(3);
		}, 200);
	} else if (state == 3) {
		var success = setTimeout (function () {
				var randomNumber = Math.round(Math.random()*10);

				console.log('randomNumber:',randomNumber)

				// success
				if (randomNumber > 2) {
					changeState(4);

				} else {
					changeState(5); // oh no!
				}
		}, 2000);
	};
}