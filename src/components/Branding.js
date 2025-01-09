import './Branding.css';

const Branding = ({ colors, font, appName }) => {
    return (
        <div className="branding">
            <h2 className='branding-head'>Branding</h2>
            <h3 className='branding-title'>Color Palette</h3>
            <div className='color-palette-container'>
                {colors.map((color, index) => (
                    <div className='color'>
                        <span className='dot' style={{ backgroundColor:color }}></span>
                        <span className='color-code'>{color}</span>
                    </div>
                ))};
            </div>
            <h3 className='branding-title'>Font</h3>
            <div className='font-container'>
                <div className='font-col'>
                    <p style={{ fontFamily: font, fontWeight: "700" }}>{font} Bold</p>
                    <p style={{ fontFamily: font, fontWeight: "500" }}>{font} Regular</p>
                    <p style={{ fontFamily: font, fontWeight: "300" }}>{font} Light</p>
                </div>
                <div className='font-col'>
                    <p style={{ fontFamily: font, fontWeight: "700" }}>{appName}</p>
                    <p style={{ fontFamily: font, fontWeight: "500" }}>{appName}</p>
                    <p style={{ fontFamily: font, fontWeight: "300" }}>{appName}</p>
                </div>
            </div>
        </div>
    );
}

export default Branding;