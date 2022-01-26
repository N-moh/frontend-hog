import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import FavoriteIcon from '@mui/icons-material/Favorite';
//import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Moment from "react-moment";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ParticipantCard(props) {
  const [show,setShow]=useState(false)
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card  className="Card "sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="">
            D
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Name"
        
        subheader="September 14, 2016"
      />{props.firstname} {props.lastname}
      <Moment format="DD MMM yyyy" >{props.date}</Moment>
      
      <CardMedia

        component="img"
        src={props.picture} 
        height="194"
        alt="profile pic" 
        //src="https://i.imgur.com/2idphdd.png"
        
      />
      <CardContent>
        <Typography    variant="body2" color="text.secondary">
        {props.bio} 
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>

        <IconButton aria-label="Email" href={"mailto:"+props.email} >
          <EmailIcon />
    </IconButton>
        <IconButton aria-label="Github" target="_blank" href={props.github}>
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="Linkedin"  target="_blank" href={props.linkedin}>
          <LinkedInIcon/>
        </IconButton>
        <IconButton aria-label="Portfolio" target="_blank" href= {props.portfolio}>  
          <PersonIcon />
        </IconButton>

        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          
          <Typography paragraph>
            Course: {props.course}
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            
            
          </Typography>
          
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
