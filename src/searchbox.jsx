import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./weatherstyle.css"

function Searchbox({setdata})
{

    let [city,setcity]=useState("");
    let [error,seterror]=useState(false);

    let API_URL="https://api.openweathermap.org/data/2.5/weather"
    let API_KEY="6ad8253627ff69987957c4e40dedb02d"

    let getData=async()=>
    {
        try
        {
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            console.log(city);
            console.log(jsonResponse);
            let result={
                city:jsonResponse.name,
                temp:jsonResponse.main.temp,
                temp_max:jsonResponse.main.temp_max,
                temp_min:jsonResponse.main.temp_min,
            }
            console.log(result);
            return result;
        }
        catch(err)
        {
            throw err;
        }

    }
        

    let handleinput=(e)=>
    {
       
        console.log(e.target.value);
        setcity(e.target.value);
    }

    let handlesubmit=async(e)=>
    {
        try
        {
            e.preventDefault();
            console.log(city);
            setcity("");
            let res=await getData();
            setdata(res);
        }
        catch(err)
        {
            seterror(true)
        }
        
    }
    return(
        <div className='container'>
        <form onSubmit={handlesubmit}>
            <TextField required id="city" label="City" variant="outlined" value={city} onChange={handleinput}/>
            <br></br>
            <br></br>
       
            <Button type="submit" variant="contained">submit</Button>
            <br></br>
            <br></br>
            {error && <p>No such place exist..</p>}
            <br></br>
        </form>
        
        
        
     
            
        </div>
    )
}

export default Searchbox;