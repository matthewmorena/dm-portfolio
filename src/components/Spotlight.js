import './Spotlight.css';

const Hero = ({ children }) => {
    return (
        <div className="spotlight">
            <div className='spotlight-inner'>
                {children}
            </div>
        </div>
    );
}

export default Hero;