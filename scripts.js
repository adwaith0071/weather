base_url="http://api.weatherapi.com/v1"
api_key="d0cd2ed4e34443c4925104617241408"
let result=''
const getweather=async()=>{
    const city=winp.value
    const res=await fetch(`http://api.weatherapi.com/v1/current.json?key=d0cd2ed4e34443c4925104617241408&q=${city}`)
    const jsres=await res.json()
    console.log(jsres)

     result=`
    <h3>${jsres.location.name},${jsres.location.region},${jsres.location.country}</h3>
    <img src=${jsres.current.condition.icon} alt="icon"
    <h5>${jsres.current.condition.text}</h5>
    
    
    
    `
    cnt.innerHTML=result

}