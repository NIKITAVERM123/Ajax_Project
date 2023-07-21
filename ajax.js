let list1=document.getElementById("movie_Actor");
let list2=document.getElementById("movie_Year");
let list3=document.getElementById("movie_Director");
let list4=document.getElementById("movie_Title");
let xhr=new XMLHttpRequest();
let button=document.getElementById("var");
button.onclick=function() {
	let movie_input = document.getElementById("name").value;
	xhr.open("Get","https://www.omdbapi.com/?t="+movie_input +"&apikey=281f1660");
	xhr.onloadend=postAjaxFunction;
	xhr.send()
}
let postAjaxFunction=function(){
	if (xhr.status===200){
		let response=JSON.parse(xhr.responseText);
		c = response.Actors;
		list1.innerHTML = "Actors:" +c
		d = response.Year;
		list2.innerHTML = "Year:" +d
		e = response.Director;
		list3.innerHTML = "Director:" +e
		f = response.Title;
		list4.innerHTML = "Title:" +f

		
	}else{
		movie_input.innerHTML="something want wrong "
	
	}
}
