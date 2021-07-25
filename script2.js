


let data = fetch('https://restcountries.eu/rest/v2/all');
data.then(function (res){
    
    res.json().then((res)=>{
        console.log(res);
        cerateTag(res);
    })
})
.catch((err)=>{
    console.log(err);
})
function cerateTag(data1){
    let p = '';
    
    console.log(p)
    let section = document.getElementById('root');
    data1.forEach(element => {
        p += `<div class="shadow-lg p-8 rounded text-center" style="width:350px;">
        <img class="rounded-lg" src="${element.flag}" alt="">
        <h1 class="text-center font-bold text-2xl mt-4 ">${element.name}</h1>
        <p class="text-center mt-4 text-gray-400 font-semibold">Capital</p>
        <p class="text-center text-md font-semibold">${element.capital}</p>
        <div class="flex justify-evenly">
            <div>
                <p class="text-center font-semibold mt-4 text-gray-400">Latitude</p>
                <p class="font-semibold">${element.latlng[0]}</p>
            </div>
            <div>
                <p class="text-center mt-4 text-gray-400 font-semibold">Longitude</p>
                <p class="font-semibold">${element.latlng[1]}</p>
            </div>
        </div>
        <button class="mt-4 bg-blue-600 px-4 py-1 text-white rounded-full" onclick="cheakWeather('${element.name}')">Show Weather</button>
    </div>`
    }
   

    )
    section.innerHTML = p;
}
function cheakWeather(name){
    let url = fetch('https://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=875fb5c66bee7534637452595e1f4b48')
    url.then((res)=>{
        res.json().then((res)=>{
            let climate = res;
            console.log(climate);
            alert(climate.main.temp);
        })
    })
  
    .catch(err=>{
        console.log(err);
    })
}