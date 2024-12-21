import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';



import './Gallery.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';




const images = [
    {
        src: "/0.jpg", alt: "0"
    },
    {
        src: "/7.jpg", alt: "7"
    },
    {
        src: "/8.jpg", alt: "8"
    },
    {
        src: "/9.jpg", alt: "9"
    },
    {
        src: "/10.jpg", alt: "10"
    },
    {
        src: "/11.jpg", alt: "11"
    },
    {
        src: "/12.jpg", alt: "12"
    },
    {
        src: "/13.jpg", alt: "13"
    },
    {
        src: "/14.jpg", alt: "14"
    },
    {
        src: "/15.jpg", alt: "15"
    },
    {
        src: "/16.jpg", alt: "16"
    },
    {
        src: "/17.jpg", alt: "17"
    },
    {
        src: "/18.jpg", alt: "18"
    },
    {
        src: "/8.jpg", alt: "8"
    },
    {
        src: "/9.jpg", alt: "9"
    },
    {
        src: "/10.jpg", alt: "10"
    }
    ,
    {
        src: "/15.jpg", alt: "15"
    },
    {
        src: "/16.jpg", alt: "16"
    },
    {
        src: "/17.jpg", alt: "17"
    },
    {
        src: "/18.jpg", alt: "18"
    },
    {
        src: "/8.jpg", alt: "8"
    },
    {
        src: "/9.jpg", alt: "9"
    },
    {
        src: "/10.jpg", alt: "10"
    }


];


const Gallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App" >
            <div className='flex flex-col items-center gap-5 mb-10'>
            <h1 className='text-center text-5xl text-[#3c3835] font-semibold tracking-wider'>gallery</h1>
            <p className='text-center opacity-80  lg:w-[50%]'>Even though pictures don't do justice to the property (and vice-versa), here are some glimpses of Khan's kitchen we have captured over time. </p>

            </div>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom ,lgAutoplay ,lgFullscreen , lgShare,lgRotate]}
            >
              
                  {images.map((image,idx)=>{
                    return( 
                    <a key={idx} href={`./Gallery-image-and-video${image.src}`}>
                        <img alt={image.alt} src={`./Gallery-image-and-video${image.src}`} />
                    </a>)
                })}
                

            </LightGallery>
        </div>
    );
}

export default Gallery;
