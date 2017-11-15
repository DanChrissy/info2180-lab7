window.onload = function(){
	searchCountry();
};

function searchCountry(){

	var search = document.getElementById("lookup");
	search.onclick = function()
	{
		var countryName = document.getElementById("country").value;
		var request = new XMLHttpRequest();
		var result = document.getElementById("result");
		var url = "https://info-lab7-chrissy97.c9users.io/world.php?country=" + countryName;
		request.onreadystatechange = function ()
		{
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
				result.innerHTML = this.responseText;
			} 
		};
		request.open('GET',url);
		request.send();
	};
}