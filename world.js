window.onload = function(){
	searchCountry();
};

function searchCountry(){
	
	var search = document.getElementById("lookup");
	search.onclick = function()
	{
		var countryName = document.getElementById("country").value;
		var url = "https://info-lab7-chrissy97.c9users.io/world.php?country=" + countryName;
		var request = new XMLHttpRequest();
		var result = document.getElementById("result");
		request.onreadystatechange = function ()
		{
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
				result.innerHTML = this.responseText;
			} 
		};
		request.open('GET',url);
		request.send();
	};
	
	var check = document.getElementById("check");
	check.onchange = function()
	{
		search.onclick = function()
		{
			var allRequest = new XMLHttpRequest();
			var url1 = "https://info-lab7-chrissy97.c9users.io/world.php?all=true";
			var result = document.getElementById("result");
			allRequest.onreadystatechange = function ()
			{
				if (this.readyState == XMLHttpRequest.DONE && this.status == 200) 
				{
					if (this.status == 200){
						result.innerHTML = this.responseText;
					} else 
					{
						console.log("Status error");
					}
				} else{
				console.log("Not ready");
				}
			};
			
			allRequest.open('GET',url1);
			allRequest.send();
		};
		
	};
}