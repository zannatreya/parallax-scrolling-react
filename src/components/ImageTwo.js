import { Parallax } from 'react-parallax';
import Satellite from '../images/ray-hennessy-HlJ7U9WHRR8-unsplash.jpg'

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={Satellite} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>
    </Parallax>
);

export default ImageTwo