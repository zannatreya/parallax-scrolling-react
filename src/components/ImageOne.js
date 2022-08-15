import { Parallax } from 'react-parallax';
import Nasa from '../images/kari-shea-1BI1CXG-Q0Y-unsplash.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={Nasa} speed={-10} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>
    </Parallax>
);

export default ImageOne