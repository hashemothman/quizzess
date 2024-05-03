
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TestStyle.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Newquiz from '../Newquiz/Newquiz';



const Tests = () => {
  const [quizes, setQuizes] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // حالة لمؤشر التحميل

  const url = 'https://robert-api.lavetro-agency.com/storage/';
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://robert-api.lavetro-agency.com/api/quizzes?category_id=${id}`);
        setQuizes(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }finally {
        setIsLoading(false); // إخفاء مكون التحميل بعد الانتهاء
      }
    };

    fetchData();
  }, [id]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay:false,
    autoplayspeed:2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
  };
  
  

  return (
    <div>
         <div className="hero-test">
            <h3>{quizes[0]?.category?.name}</h3>
        </div>
        <div className="ha-serch">
    <Form>
      <Form.Group className="mt-5 mb-5 d-flex" controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Search" />
        <Button variant="primary" className="ms-5 me-5" type="submit">البحث</Button>
      </Form.Group>
    </Form>
    </div>
        
        {/* <Newquizslide/> */}
        <div className='React-slide ho-contianer-test' style={{margin:'50px auto'}}>
       {quizes.length<=4?<div style={{display:'flex',justifyContent:'space-evenly'}}>{quizes.map((quiz) => (
          <Newquiz key={quiz.id} id={quiz.id} img={url + quiz.image} title={quiz.ar_name}  description={quiz.notes} testTime= {quiz.timer} answer ={quiz.answered_count}/>
          
        ))}</div>:<Slider {...settings}>
        {/* <div> */}
        
        {quizes.map((quiz) => (
          <Newquiz key={quiz.id} id={quiz.id} img={url + quiz.image} title={quiz.ar_name}  description={quiz.notes} testTime= {quiz.timer} answer ={quiz.answered_count}/>
          
        ))}
        {/* <Newquiz /> */}
        {/* </div> */}
        {/* <Newquiz/>
        <Newquiz />
        <Newquiz/>
        <Newquiz/>
        <Newquiz/>
        <Newquiz/> */}
    
  </Slider>}
        
    </div>
        {/* <div className="ha-pagination">
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item active>{4}</Pagination.Item>
   

      <Pagination.Ellipsis />
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    </div> */}
    </div>
  )
}

export default Tests