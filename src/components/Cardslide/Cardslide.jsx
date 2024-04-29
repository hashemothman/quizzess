import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Cardslide.css'
import Newquiz from "../Newquiz/Newquiz";


import Card from "../Card/Card";
const Cardslide = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplayspeed:2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      const [isLoading, setIsLoading] = useState(true); // حالة لمؤشر التحميل
      const [hasRequestedAPI, setHasRequestedAPI] = useState(false);
      const [categories, setCategories] = useState([]);
      const url = 'https://robert-api.lavetro-agency.com/storage/';
      const { id } = useParams();
      useEffect(() => {
        if (!hasRequestedAPI) {
          setIsLoading(true);
        const fetchData = async () => {
          try {
            const response = await axios.get('https://robert-api.lavetro-agency.com/api/quizzes/popular');
            setCategories(response.data.data);
            setHasRequestedAPI(true);

            // console.log(response.data.data);
            // console.log(categories[0].id);
    
          } catch (error) {
            // console.error(error);
          }finally {
            setIsLoading(false); // إخفاء مكون التحميل بعد الانتهاء
          }
        };
    
        fetchData();
      }
    }, [hasRequestedAPI]);
  return (
    <div className='React-slide'>
        <Slider {...settings}>
        {/* <div> */}
        {categories.map((category) => (
        // <Card
        // id={category.id}
        //  img={url + category.image}
        //     title={category.ar_name}
        //     title1="ali"
        //     difficulty='easy'
        //     question={category.questions_count}/>
        <Newquiz key={category.id} id={category.id} img={url + category.image} title={category.ar_name}   links={props.link}/>
            ))}
        {/* </div> */}
  </Slider>
    </div>
  )
}

export default Cardslide