import './Hero.css';

const Hero = ({ imageSrc, altText, children, imageOnRight = false }) => {
    return (
        <div className="hero">
            {!imageOnRight && (
                <div className="hero-image">
                    <img alt={altText} src={imageSrc}></img>
                </div>
            )}
            <div className="hero-text">
                {children} {/* Render the passed HTML/JSX */}
            </div>
            {imageOnRight && (
                <div className="hero-image">
                    <img alt={altText} src={imageSrc}></img>
                </div>
            )}
        </div>
    );
}

export default Hero;
