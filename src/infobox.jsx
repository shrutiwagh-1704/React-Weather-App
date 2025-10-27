import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./weatherstyle.css"


function Infobox({info})
{
    const image="https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"

    return(
    <div className='container'>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Temperature:{info.temp}&deg;
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Temperature maximum:{info.temp_max}&deg;
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Temperature minimum:{info.temp_min}&deg;
                    </Typography>
                    
                </CardContent>
            </CardActionArea>
        </Card>
    
    </div>
    )
}


export default Infobox;