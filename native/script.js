
function loadFlags(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
	    	var data = JSON.parse(xhttp.responseText);
	        parseHTML(data);
	      }
	    };
	xhttp.open("GET", "countries.json", true);
	xhttp.send()
}


function parseHTML(countries){
	var html = '<table style="align:middle; width:300px" class="table">' + 
	  	'<thead>' +
		    '<th>CODE</th>' +
		   	'<th>NAME</th>' +
		    '<th>FLAG</th>' +
	  	'</thead>';
	html += generateRows(countries);
	html += '</table>';
	document.getElementById("flags").innerHTML = html;
}

function generateRows(countries){
	var rows = '';
	for (var code in countries) {
	   	rows += '<tr>' +
					'<td>' + code + '</td>' +
					'<td>' + countries[code] + '</td>' +
					'<td><img style="width:30px" src="svg/' + code.toLowerCase() + '.svg"></img></td>' +
				'</tr>';   
	}
	return rows;
}