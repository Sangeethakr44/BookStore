import React,{ Component } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import image from "./Assets/pexels-photo-3309957.jpeg";
import ImageGif from "./Assets/6b80ba90a39ca931f31762a5b46fec6e.gif";
import Gif from "./Assets/icons8-book(1).gif";
import './Dashboard.css';
import { motion } from "framer-motion";
import axios from "axios";
import { useState,useEffect } from "react";
import Grid from '@mui/material/Grid';
//import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Card from "react-bootstrap/Card";
import { CCard } from '@coreui/react'
import { CCardBody } from '@coreui/react'
import { CCardImage } from '@coreui/react'
import { CCardText } from '@coreui/react'
import { CCardTitle } from '@coreui/react'
import { CButton } from '@coreui/react'
import { CCarousel } from '@coreui/react'
import { CCarouselCaption } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import{CImage}from '@coreui/react'
import FirstSlide from './Assets/pexels-photo-46274.webp'
import SecondSlide from './Assets/pexels-photo-12365555.webp'
import ThirdSlide from './Assets/pexels-photo-7809948.webp'
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

  const Dashboard = () =>{
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://localhost:7138/api/Master/GetAllBooks").then((res)=>{
            console.log("result",res)
            setData(res.data)
        }).catch((err)=>{
            console.log(err);
        })
      },[])
      
    return (
        
        <>
         <table>
          <tr>
            <td>
            <img src={Gif}  className="id" id="img" width="150px" height="100px" alt="Logo" />
            </td> 
                     
            <td>
            <motion.h1
        animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 0.9 }}
      >
        <td>
        <p style={{fontSize:'80px',color:'black',textAlign:"left"}}> Pick Your Favourite Book</p>

        </td>

      </motion.h1>
            </td>
         
          </tr>
         

         </table>
      
 
    <CCarousel style={{width:"80%",minWidth:"500px",height:"100%", paddingLeft:'22rem'}} interval={7000} controls  transition="crossfade">
    
  <CCarouselItem>
    <CImage className="d-block w-100 img" src={FirstSlide} alt="slide 1" />
    <CCarouselCaption className="d-none d-md-block" >
      <h3>First slide label</h3>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100 img" src={SecondSlide} alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block" >
      <h3>Second slide label</h3>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100 img" src={ThirdSlide} alt="slide 3" />
    <CCarouselCaption className="d-none d-md-block" style={{color:"black"}}>
      <h3>Third slide label</h3>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
 

    

{/* 
    <Grid container spacing={2}>
      {data.map((item)=>(
       <Grid item xs={12} sm={6} md={3}>
        <Card   style={{backgroundColor:"  #f1e3ff ",width:"80%",minWidth:"300px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
      <CardContent>
        <div style={{alignItems:"center"}}>
            <img src={item.imageUrl} alt={item.name} style={{justifyContent:"center",alignItems:"center",width:"50%",height:200,objectFit:"cover"}} />

        </div>
        <Typography variant="h5" component="div">
            {item.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{color:"white"}}>Learn More</Button>
      </CardActions>
    </Card>
         
        </Grid>
       ))}
       
      </Grid> */}
{/* 
      <Grid container spacing={3}>
      {data.map((item)=>(
       <Grid item xs={12} sm={6} md={3}>
       <Card style={{width:"20%",minWidth:"300px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="25%"
          image={item.imageUrl}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {item.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
         
        </Grid>
       ))}
       
      </Grid> */}
   



  

<br />
<br/>

      <Grid container spacing={3}>
      {data.map((item)=>(
       <Grid item xs={12} sm={6} md={3}>
      <CCard  className={`mb-3 border-${'dark'}`} style={{ width: '18rem',minWidth:"300px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between" ,backgroundColor:"#edecd8"}}sx={{ maxWidth: 345 ,md: 'flex'}}>      
      <CCardImage orientation="top" src={item.imageUrl} />
      <CCardBody style={{ width: '18rem' ,minWidth:"300px",height:"100%",minHeight:"50px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <CCardTitle>{item.name}</CCardTitle>
      <CCardText>
      {item.price}   
       </CCardText>
       <CButton color="dark" href="#">Go somewhere</CButton>

       </CCardBody>
       </CCard>
        </Grid>
       ))}
       
      </Grid>
        </>

    )
  };

  export default Dashboard