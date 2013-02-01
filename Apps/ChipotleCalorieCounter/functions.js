var total_width = 0;
var total_calories = 0;
total.style.width = total_width;

function resize_div_covering() 
	{
		// get the div element
		d = document.getElementById('covering_meter');
		// set the width
		d.style.width="290px";
		total_width = total_width + 290;
		total_calories = total_calories + 290;
		total.style.width = "290 px";
	}
	
function filling_response() 
{
	// get the div element
	d = document.getElementById('filling_meter');
	
	// set the width
	d.style.width="190px";
	total_calories = total_calories + 190;
	total_width = totalwidth + 190;
	total.style.width = "total_width+px";
	document.getElementById('total').innerHTML = "290 calories";
}

function totaller()
{
document.getElementById('total_amount').innerHTML = total_calories;
}