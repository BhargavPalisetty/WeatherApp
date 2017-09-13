


var K = 0;
var city = "";
function gettingJSON(){
  document.getElementById("demo").innerHTML = "";
  document.getElementById("image").src = "";
 city = document.getElementById("cit").value;
  if (city!=""){
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=7ed804abbc124e5ebd1dc0d69e0e1572",function(json){ 
 var x =json;
 var icn = x["weather"][0]["icon"];
 var sky = x["weather"][0]["description"];
 var wind = x["wind"]["speed"];
 var humid = x["main"]["humidity"]
 link =  "http://openweathermap.org/img/w/"+icn+".png";
 document.getElementById("image").src= link; 
  
  K = x.main.temp;
  var F = Math.round((K * 9/5) - 459.67); 

  document.getElementById("cou").value =    x.sys.country;

  document.getElementById("demo").innerHTML = "Temperature"+"(" +"&#8457"+")" +" = " + F + " &#8457"+     "<br>" + "Pressure = "+x.main.pressure + " hpa" + "<br>" + "Wind Speed = " + wind + " meter/sec"+"<br>" +"Humidity = " +humid+"%"+"<br>"+ sky + "<br>" ;
 });
 }
  else{
    city="";
    document.getElementById("cou").value = "";
  }
  document.getElementById("myDiv").style.backgroundImage = "url('http://localhost/practisefolder/awe-backgrounds/breeze.jpg')";
 }

function myFunction(){
   gettingJSON();
} 


function Celsius(){
 if(city != ""){
 C = Math.round(K - 273.15);
 if(C != -273){
 document.getElementById("demo2").innerHTML= "Temperature in Celsius = " + C + "&#8451";
  }
  }
  else {
  document.getElementById("demo2").innerHTML="";
  }
}