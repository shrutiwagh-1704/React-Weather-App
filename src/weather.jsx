import Searchbox from "./searchbox";
import Infobox from "./infobox";
import { useState } from "react";

function Weather()
{

    let [weatherinfo,setweatherinfo]=useState({
        city:"pune",
        temp:23.66,
        temp_max:23.66,
        temp_min:23.66
    })

    let setdata=(result)=>
    {
        setweatherinfo(result)
    }

    return(
        <>
       
        <Searchbox setdata={setdata}/>
        <Infobox info={weatherinfo}/>
        </>
    )
}

export default Weather;