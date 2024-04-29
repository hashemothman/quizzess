import './Hero.css'
import heroimg from './../../assets/images/heroimg.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="zh-hero">
        <div className='zh-hero-top'>
        <div className="zh-hero-content">
          <div className='zh-quiz-time'>
            <h1>Quiz Time</h1>
          </div>
          <h5>The chalets, 300 meters west of the hotel building,
                were designed with an overlay similar to the stone walls separating the lands and orchards in the mountainous
          areas, which are known in the spoken language in the project area as “Al-Ra’ousha”.
            With the help of 70 workers from the people of the neighboring villages</h5>
        </div>

        <div className='zh-hero-img'>
        <img
            src={heroimg}
        />
        </div>
        </div>
        <Link to='/page-random'>
        <button className='zh-hero-btn'>البدء باختبار عشوائي</button>
        </Link>
      </div>
  )
}

export default Hero