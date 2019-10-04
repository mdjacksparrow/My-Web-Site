function indication(){
    window.alert("NOTE : If you don't enable location on your device this app can't be run");
    window.alert("You can change into fahrenheit to celcius by click the F letter ");
}


function start(){
    window.alert("start");
    indication();
    let long;
    let lat;
    let temp_degree = document.querySelector(".value");
    let temp_description = document.querySelector(".temp-description");
    let time_zone = document.querySelector(".time-zone");
    let icon_name;    
    let unit = document.querySelector(".unit");
    let icon = document.getElementById("icon");


    
    if(navigator.geolocation){
        
        navigator.geolocation.getCurrentPosition(
        position => {
    
            // to store longitude and latitude in to variables
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const proxy = 'https://cors-anywhere.herokuapp.com/';

            // api calling link
            const api = `${proxy}https://api.darksky.net/forecast/fb8be9fda636fb8828f8839548da7c98/${long},${lat}`;

            fetch(api)
                .then(
                    response => {
                        return response.json();
                    }
                )

                .then(
                    data => {
                        // set dom elements 
                        temp_degree.innerHTML = data.currently.temperature;

                        let backup = data.currently.temperature;
                        //add event listener to the temp

                        unit.addEventListener("click",() => 
                        {
                            let fah , cel;
                            fah = temp_degree.innerHTML;
                           
                            console.log(backup);

                            if(unit.textContent === "F")
                            {
                                unit.textContent = "C";
                            
                                 //formula for celcius
                                 cel = (fah - 32) * 5/9;    
                                temp_degree.textContent= Math.floor(cel);
                            }

                            else{
                                unit.textContent = "F";
                                fah = backup;
                                temp_degree.textContent = fah;
                            }

                        })

                        icon_name = data.currently.icon;
                        console.log(icon_name);

                        temp_description.innerHTML =    data.currently.summary;

                        time_zone.innerHTML = data.timezone;
 
                        setIcons(icon_name,document.querySelector(".icon"));
                    });   
        });        
    }


    function setIcons(icon,iconID){
        const skyons = new Skycons({color: "white" , resizeClear : true});
 
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();

        skyons.add(iconID,Skycons.currentIcon);

        skyons.play();

        return skyons.set(iconID,Skycons[currentIcon]);
    }
    
    document.getElementById("but").style.visibility = "hidden";
}
// window.onload = () => {

   
// };


