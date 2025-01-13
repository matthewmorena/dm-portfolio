import './Footer.css';

const Footer = () => {
    return (
    <div className="footer">
      <div className='contact-logos'>
        <div className='contact-logo'>
          <a href="https://www.linkedin.com/in/david-munera-a2862a1b6/">
            <img alt="linkedin logo" src="https://static.wixstatic.com/media/11062b_60c5fc4a3ecd49f2a697206b09eeace1~mv2.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_60c5fc4a3ecd49f2a697206b09eeace1~mv2.png"></img>
          </a>
        </div>
        <div className='contact-logo'>
          <a href="mailto:davidmunera828@gmail.com">
            <img alt="email logo" src="https://static.wixstatic.com/media/e645a6_0230c684ae3e436ca3e1b7757f28ff96~mv2.jpg/v1/fill/w_53,h_53,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e645a6_0230c684ae3e436ca3e1b7757f28ff96~mv2.jpg"></img>
          </a>
        </div>
      </div>

      <p style={{marginTop: "50px", textAlign: "center"}}>© David Munera Designs 2024&nbsp;&nbsp;&nbsp;
        <a style={{textDecoration: "none", color: "#000"}} href="mailto:davidmunera828@gmail.com">Email</a>&nbsp;&nbsp;&nbsp;
        <a style={{textDecoration: "none", color: "#000"}} href="https://www.linkedin.com/in/david-munera-a2862a1b6/">LinkedIn</a>
      </p>
    </div> )
};

export default Footer;