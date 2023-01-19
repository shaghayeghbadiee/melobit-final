import React,{useState, useEffect} from 'react';
import { getSlider } from '../services/api';





const Carousel = () => {
     
    const [slider,setSlider]=useState([])
        
    
   
  useEffect(()=>{
    const fetchAPI= async () =>{
       const data=await getSlider();
       console.log(data)
       setSlider(data)
    }
    fetchAPI();
},[])

    return (
        <>
        <div className='container mt-5'>
          <div className='row  justify-content-center'>
           
            <div className='col-md-6 col-sm-11 col-11 m-0 p-0'>


            <div id="carouselExampleControls" className="carousel slide mx-auto w-100" data-bs-ride="carousel">
  <div className="carousel-inner ">
{
slider.map((s,i)=>(
      <div key={s.id} className={i===0?"carousel-item active":"carousel-item"}>
 <img src={s.album.image.cover.url} className="d-block w-100" alt="..." />
      <div className="carousel-caption    ">
        
      </div>
      </div>

))
    }
  </div>
  
</div>

            </div>
           
          </div>
        </div>


</>
    );
};

export default Carousel;