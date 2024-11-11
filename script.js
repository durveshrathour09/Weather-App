async function weather()
{
    const cityname=document.querySelector('#search input').value;
    console.log(cityname);
    const url= `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=fed5def253a9e11d8569dce1a9764b2f`;
    const res=await fetch(url);

   // console.log(res);
   const data =await res.json();
   console.log(data);
  if(data.cod=='404')
  {
    error.style.display="block";
    main.style.display="none";
  }
  else{
    temp.innerHTML=Math.round(data.main.temp)+"℃";
    document.getElementById('city').innerHTML=data.name;
    document.getElementById('humidity').innerHTML=data.main.humidity+"%";
    document.getElementById('wind').innerHTML=data.wind.speed+"km/h";
    main.style.display="block";
    error.style.display="none";
  }
}
