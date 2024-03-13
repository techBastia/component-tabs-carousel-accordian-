import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../asset/img1.jpg'
import img2 from '../asset/img2.jpg'
import img3 from '../asset/img3.jpg'
import img4 from '../asset/img4.jpg'
import img5 from '../asset/img5.jpg'
import img6 from '../asset/img6.jpeg'
import img7 from '../asset/img7.jpg'



export const Carusel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

  return (
    <div className='carouselWrapper'>
    <Slider {...settings}>
        {
            data.map((d) => {
                return(
                    <div className='carouselInner'>
                    <div className='carouselImg'>
                        <img src={d.img} alt={d.name}/>
                    </div>
                    <div className='carouselContent'>
                        <p>{d.name}</p>
                        <p>{d.review}</p>
                    </div>
                </div>
                )
            })
        }
        </Slider>
    </div>
  )
}

const data = [
    {
        name : 'first image',
        img: img1,
        review: 'this is the first image'
    },
    {
        name : 'first image',
        img: img2,
        review: 'this is the second image'
    },
    {
        name : 'first image',
        img: img3,
        review: 'this is the third image'
    },
    {
        name : 'first image',
        img: img4,
        review: 'this is the fourth image'
    },
    {
        name : 'first image',
        img: img5,
        review: 'this is the fifth image'
    },
    {
        name : 'first image',
        img: img6,
        review: 'this is the sixth image'
    },
    {
        name : 'first image',
        img: img7,
        review: 'this is the seven image'
    },
]
