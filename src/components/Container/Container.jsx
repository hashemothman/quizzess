import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import Featuredcard from '../Featuredcard/Featuredcard'
import './Container.css'
import Newquiz from "../Newquiz/Newquiz";

const Container = (props) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // حالة لمؤشر التحميل
  const [hasRequestedAPI, setHasRequestedAPI] = useState(false);

  const url = 'https://robert-api.lavetro-agency.com/storage/';
  const { id } = useParams();
  useEffect(() => {
    if (!hasRequestedAPI) {
      setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get('https://robert-api.lavetro-agency.com/api/quizzes/featured');
        setCategories(response.data.data);
        setHasRequestedAPI(true);
        // console.log(response.data.data);
        // console.log(categories[0].id);

      } catch (error) {
        console.error(error);
      }finally {
        setIsLoading(false); // إخفاء مكون التحميل بعد الانتهاء
      }
    };

    fetchData();
  }
}, [hasRequestedAPI]);
  return (
    <div className='zh-container'>
        <h1>الاختبارات المميزة</h1>
        <div className='zh-inner-container'>
        {categories.map((category) => (
        // <Featuredcard
        // id={category.id}
        //   smcardimg1={url + category.image}
        //   smcardimg1sm={url + category.image}
        //   title1={category.ar_name}
        //   title1sm={category.ar_name}
        //   desc1={category.notes}
        //   desc1sm={category.notes}
        //             //   date='4-3-2024'
        // />
        <Newquiz key={category.id} id={category.id} img={url + category.image} title={category.ar_name}   links={props.link}/>
        ))}
        
        </div>
        
    </div>
  )
}

export default Container