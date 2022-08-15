import { Parallax } from 'react-parallax';
import spaceStation from '../images/lee-DK7msqOZ9fI-unsplash.jpg'
const ImageThree = () => (
    <Parallax className='image' blur={0} bgImage={spaceStation} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>
    </Parallax>
);

export default ImageThree