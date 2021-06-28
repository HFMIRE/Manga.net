import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselAnime({anime}) {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
    return(
        <div className="carousel ">
             <Carousel fade  activeIndex={index} onSelect={handleSelect} >
            {anime.map(({attributes}) => {
                return (
                            <Carousel.Item className="carouselInner">
                                <img
                                className="d-block "
                                key ={attributes.userCount}
                                src={attributes.posterImage.large}
                                alt="First slide"
                                />
                                  {/* <Carousel.Caption className="carouselcaptions">
                                    <h3>{attributes.titles.en_jp}</h3>
                                    <p>{attributes.description}</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>  
                )
            }
            )
            }
            </Carousel>
        </div>
    )
}
export default CarouselAnime; 