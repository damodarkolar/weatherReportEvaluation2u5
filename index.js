document.getElementById("inputCityForm").addEventListener("submit",create);

function create(){
    event.preventDefault();
  var data=search();
}


async function search(){
    event.preventDefault();
    var cityName=document.querySelector("#cityName").value;
    //     try{
    //         var details=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=72925e9d19ecb93bcadf44f5c8eea5f9`)
    //         var data = await details.json();
    //         pageCreator(data);
    //     }catch{
    //         pageCreator(error);
    //     }
        var details=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=72925e9d19ecb93bcadf44f5c8eea5f9`)
            var data = await details.json();
            pageCreator(data);
}


function pageCreator(data){

    document.querySelector("#weatherContent").innerHTML="";

    var itemsDiv=document.createElement("div");
    itemsDiv.setAttribute("id","itemsDiv");
    if(data.id==404){
        alert("please Enter correct city")
    }else{
        var headingElement=document.createElement("h1");
        var headingDiv=document.createElement("div");
        headingDiv.setAttribute("id","headingDiv");
        headingDiv.setAttribute("style","background-color: white");
        var heading=data.name;
        headingElement.innerText="Place "+heading;
        headingDiv.append(headingElement)



        var tempdiv=document.createElement("div");
    tempdiv.setAttribute("id","tempDiv");
    var tempElement=document.createElement("h2");
    var maxtempElement=document.createElement("h2");
    var mintempElement=document.createElement("h2");

    var temp=parseInt(data.main.feels_like)-273;
    var maxtemp=parseInt(data.main.temp_max)-273;
    var mintemp=parseInt(data.main.temp_min)-273;

    tempElement.innerText="Temperature Feel;"+temp;
    maxtempElement.innerText="Maximum Temp:"+ maxtemp;
    mintempElement.innerText="Minimum Temp:"+mintemp;

    tempdiv.append(maxtempElement,tempElement,mintempElement);


    var pressElement=document.createElement("h2");
    var pressdiv=document.createElement("div");
    pressdiv.setAttribute("id","pressdiv");
    var preassure=data.main.pressure;
    pressElement.innerText=preassure;
    var pressdes=document.createElement("h2");
    pressdes.innerText="Preassure :"
    pressdiv.append(pressdes,pressElement)

    var humElement=document.createElement("h2");
    var humdiv=document.createElement("div");
    humdiv.setAttribute("id","humdiv");
    var humidity=data.main.humidity;
    humElement.innerText=humidity;
    var humdes=document.createElement("h2");
    humdes.innerText="Humidity :"
    humdiv.append(humdes,humElement)

    var windElement=document.createElement("h2");
    var winddiv=document.createElement("div");
    winddiv.setAttribute("id","winddiv");
    var windSpeed=data.wind.speed;
    windElement.innerText=windSpeed;
    var windspeeddes=document.createElement("h2");
    windspeeddes.innerText="Wind Speed :"
    winddiv.append(windspeeddes,windElement);

    var sunriseElement=document.createElement("h2");
    var sunrisediv=document.createElement("div");
    sunrisediv.setAttribute("id","sunrisediv");
    var sunrise=data.sys.sunrise;    
    sunriseElement.innerText=sunrise;
    var sunrisedes=document.createElement("h2");
    sunrisedes.innerText="Sun rise :"
    sunrisediv.append(sunrisedes,sunriseElement)

    var sunSetElement=document.createElement("h2");
    var sunSetdiv=document.createElement("div");
    sunSetdiv.setAttribute("id","sunSetdiv");
    var sunset=data.sys.sunset;
    sunSetElement.innerText=sunset;
    var sunSetdes=document.createElement("h2");
    sunSetdes.innerText="Sun rise :"
    sunSetdiv.append(sunSetdes,sunSetElement)

    // var decsElement=document.createElement("p");
    // var k="0";
    // var desc=data.weather.k.main;
    // decsElement.innerText=desc;

    // var decsdiv=document.createElement("div");
    // decsdiv.setAttribute("id","descDiv");

    // var desimg=document.createElement("img");
    // desimg.setAttribute("id","desimg")

    // if(desc="clear sky"){
    //     desimg.src="data:image/png;base64,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";
    // }else{
    //     desimg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAB8CAMAAACSRZimAAAAnFBMVEX///88mtcREiSZmZ4AAAMpldXj7vg0l9aFvOMODyIiktQZkNPs9PoAABoKCyAAAxymzOn4+/292e8AABfU5vRTo9pGn9husN6axuev0eyOv+TC3O9kq914teAYGCcyMjpiYmpXV2A4OEQAAA8AidEeHi4rKzgkJDCOjpBxcXdWV1hOTlGKi5IdHSJDQ0mlpadOTVjJyc25ur17fIMVWfl5AAAEyklEQVRoge2Ze3uqOBCHwTYGQuR+v2igW1v2uMoev/932wnWSz0VCdC6f+R9Hqn2keSXmcnMBBVFIpFIJBKJRCKRSCSSH8Txs4w+UgAtkAHk/sMUuASrHEy0RylA6hGUPkSBo+KTBNV4iC+SsxHAF4Xi26kWZz8qIb8wAhdhYIwhOmPn+6f27SgI8tgP1S9BwfybBdACI1h+e/kaHEKioJlWREXyHWp89ebUZw25EqvcLZigYnIRPrmvgNvhHKmGPbGEHja4ZmINNro/5R+QSTfqjU3QDQ6m2qaZnRbibmjN4E4xP00RgQgfpEDF0QQKElUgCP6UGo5XEJPe8yMc5lFwrXh0MNhGbwOQuE1FNPm8ezUtHZUos942QDlVnMyOXcjQ2uVdbQELBtdzJ+gbhTh3FFtFgKpRJb0OHzy4rzn2RhiG7hZjOKe1o4BCMb++BQ3s7z6MQPLETaKuEoHti7jFAVS0wk7sNLy4hyRDFDjtqDg8OHL+pVd4p2IQTOllJ3dKy350DmdjSMPvtxKgBXADNXAVGiBCPm98pBaJP/eT+LKfbTu5OAgDDaRk/PtQugkxhoSDiyCcDVexwZ4YRvA1N0mD81xYjWFlDuVbX7uUFkbo0NvATvDhbZ66mRtrA1KEa+Ramjvzg5ePjXKC2/AEeeAhx47CMMxj55OEU2bAyFXcaESHPT9476NMo3SeBnk6h3XlSZYlBQYPHcIeI3KrkBI+f6YFYRjZQ4KBJkVh0xgfl8QbMiNR+FCtUdMeuRMrfthGEJguFlaQQdrHSL1aIDgki4Iwh01W9KhgODpHMMoFFfhfZ2ccaXy7Y1JA9rwv4VPFQIK1O7+Ri46rggNt1ruKfWCIJCjq37UyhJpwTxv2jcm51qdVRLaSBlisre3b0Cb9xuWlx5nbQpboWTKTnl0CLrIEFkVFNPRrJulfvccjyCA2aJhaQizo3VTJBO4II54o77RytzbjLSBXidzS5hScdtUsR0wADKgpsfAxgwQdu9MRPbrBgd7t3+qf7go77CB8dhskQUXFbQmi40GTJBjBB4yOmAzFzACtYjTkyIk7ajcVOUby6ucPOvTirtJNNd6n9gJBWlB6n3g+0xWQUKdsrR+QZBzRRHJioucfjhsOiUXOsEcw9NoKkTpgPx7AA894mnEVDEMFXB66BM0guGM7jDD4Acz9fq6vhOEnHDihTaFg1LM4pyBjRWASjvwdBU527ROVYRDUnoPG4tD5CB7606JEIpFIJBKJRCKRSCTfwNPDUZ4fjjJ7OK0EU9fNGbz49UV/seCvCby+6j8kQV8yj630dcWW1ezt/b1+N/9erH5t/ikbc+TougkjwDrMhc4/tP+CD5bleaZnmpanHyTMFvW2ZozB5de+3Oya3aZ+35W7p9FW0N9W1Wz5pusrtpyZ68paLvWlt2VNyVhVr7ZNfZRgMbZh9VZn7HlTed6/m93z7/fn3ztvvB/qTV1v2BOD6549rdh+v9mXrGblZl/v67quzIME/ZUtWVWWzZZVb/VuVTe7NduUZTXWDzOrWcKwTbOC4auygTm2VbOqy2ZdrsHtjPEvteGoW7plWpZpLkzdewFfwctbWBMEo6lbHBh4wSewFhAA5mJh8asOb04SHsv/QMJ/NiFlf53wGBQAAAAASUVORK5CYII=";
    // }
    // decsdiv.append(decsElement,desimg);


    itemsDiv.append(headingDiv,sunrisediv,tempdiv,pressdiv,humdiv,winddiv,sunSetdiv);
    document.querySelector("#weatherContent").append(itemsDiv);




    console.log(data.name);
    }  

}

