import  React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import ForumIcon from '@material-ui/icons/Forum';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './MeuPetCard.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MeuPetCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
        <Card sx={{ maxWidth: 340 }} className='card-pet'>
          <CardMedia
            component="img"
            height="194"
            image="https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/dog2.jpg?alt=media&token=b3e7e196-b5a3-4123-9d48-31e81f508176"
            alt="pets"
          />
          <CardContent>
              <div>
                <div style={{display:'flex'}}>
                  <div>
                  <Typography sx={{ fontSize:25, marginLeft:0.5}}>
                  Billy
                  </Typography>

                  </div>
                  
                  <div style={{display:'flex', marginLeft:120, marginTop:7}}>
                      <Avatar sx={{ bgcolor: red[500], width: 18, height: 18 }} aria-label="recipe">
                      </Avatar>
                      <Typography sx={{ fontSize:12, marginLeft:1 }}>
                      Paulo Luis
                      </Typography>
                  </div>
                  <div style={{marginLeft:5}}>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                    >
                        <MoreVertIcon />
                    </IconButton>
                  </div>
                </div>
                <div style={{display:'flex'}}>
                  <div className='adress-box' style={{display:'flex', marginTop:10}}>
                    <div className='icon-adress' style={{color:'#DB652F'}}>
                      <RoomIcon  fontSize='small'/>
                    </div>
                    <div className='text-adress'>
                      <Typography sx={{ fontSize:13, marginLeft:1 }}>
                        Aero Rancho, MS 
                      </Typography>
                    </div>
                  </div>
                  <div style={{display:'flex', color:'#DB652F', marginLeft:60}}>
                      <div>
                        <WhatsAppIcon fontSize='small'/>
                      </div>
                      <div style={{marginLeft:5, marginRight:6}}>
                        <EmailIcon fontSize='small'/>
                      </div>
                      <div>
                        <ForumIcon fontSize='small'/>
                      </div>
                  </div>
                </div>
              </div>
          </CardContent>
          <CardActions>
            <div style={{display:'flex'}}>
              <div>
                <Typography sx={{ fontSize:14, marginLeft:2}}>
                 Masculino
                </Typography>
              </div>
              <div>
                <Typography sx={{ fontSize:14,marginLeft:3}}>
                 1 ano
                </Typography>
              </div>
              <div>
                <Typography sx={{ fontSize:14,marginLeft:3}}>
                 Médio
                </Typography>
              </div>
            </div>
            <div style={{display:'flex', marginLeft:22}}>
              <div>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              </div>
              <div>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
              </div>
            </div>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div style={{display:'flex'}}>
                <div style={{marginTop:3}}>
                  <Typography sx={{ fontSize:14, marginLeft:0.7}}>
                  Vira lata
                  </Typography>
                </div>
                <div style={{marginTop:3}}>
                  <Typography sx={{ fontSize:14,marginLeft:3}}>
                  2 - 5kg
                  </Typography>
                </div>
                <div>
                  <Typography sx={{ fontSize:12,marginLeft:3, borderRadius:5, color:'#fff',
                    backgroundColor:'#DB652F', width:75, height:20, textAlign:'center',
                    paddingTop:0.5}}>
                  Vacinado
                  </Typography>
                </div>
                <div>
                  <Typography sx={{ fontSize:12,marginLeft:1, borderRadius:5, color:'#fff',
                    backgroundColor:'#DB652F', width:75, height:20, textAlign:'center',
                    paddingTop:0.5}}>
                  Castrado
                  </Typography>
                </div>
              </div>
              <Typography sx={{marginTop:5, fontWeight:'bold'}}>
                Descrição:
              </Typography>
              <Typography sx={{ fontSize:14,marginTop:2}}>
              Cachorro vira lata e amoroso procura um lar. Adoção só será 
              feita mediante assinatura do termo de compromisso, já se 
              encontra castrado e com as vacinas e fermifungo em dia.
              </Typography> 
            </CardContent>
          </Collapse>
    </Card>
    </div>
    
  );
}