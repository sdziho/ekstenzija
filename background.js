//location.replace("https://zamger.etf.unsa.ba/")

var x=document.getElementsByTagName("title");
var brojac;
if(x[0].innerHTML=="ETF Bolognaware"){
	var varijabla;
	var y=document.getElementsByTagName("table");
	var prikaz=y[5].rows[0].cells[0].innerHTML;
	var broj_obavjesti=(prikaz.match(/Objavljeni rezultati ispita:/g)||[]).length;
	var state = history.state || {};
	var reloadCount = state.reloadCount || 0;
	if (performance.navigation.type === 1) {
		state.reloadCount = ++reloadCount;
		history.replaceState(state, null, document.URL);
		} else if (reloadCount) {
		reloadCount = 0;
		delete state.reloadCount;
		history.replaceState(state, null, document.URL);
	}
	if(reloadCount==0){
		varijabla=document.getElementsByTagName("table")[5].rows[0].cells[0].innerHTML;
		brojac=(varijabla.match(/Objavljeni rezultati ispita:/g)||[]).length;
		sessionStorage.setItem("br", brojac);
	}
	else{
		if(broj_obavjesti>sessionStorage.getItem("br")) var notification = new Notification("Izašla nova obavijest!");
	}
	//console.log(sessionStorage.getItem("br"));
	//console.log(brojac);
	//console.log(broj_obavjesti);
	setTimeout(function () { location.reload(1); }, 60000); 
}
