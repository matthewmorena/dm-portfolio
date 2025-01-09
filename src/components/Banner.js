import './Banner.css';

const Banner = ({ title, subtitle, text }) => {
    return (
        <div className="banner">
            <div className="banner-title">
                <h2>{title}</h2>
            </div>
            <div className="banner-subtitle">
                <h3>{subtitle}</h3>
            </div>
            <div className="banner-text">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Banner;
