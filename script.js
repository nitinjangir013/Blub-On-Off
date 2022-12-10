let circle = document.getElementsByClassName('circle')[0];

let btn = document.getElementById('btn');

var isOn = false;

function onOffBtn()

{

	if (isOn==false) 

	{

		circle.style.boxShadow = '0px 0px 100px rgba(255, 255, 255, 1.0)';

		circle.style.background = 'rgba(255, 255, 255, 0.7)';

		btn.style.marginLeft = "50px";

		isOn=true;

	}

	else

	{

		circle.style.boxShadow = '0px 0px 0px rgba(255, 255, 255, 1.0)';

		circle.style.background = 'transparent';

		btn.style.marginLeft = "0px";

		isOn=false;

	}

}