import Nav from '../components/Nav';
import Spotlight from '../components/Spotlight';
import CardContainer from '../components/CardContainer';
import Card from '../components/Card';
import Branding from '../components/Branding';
import Footer from '../components/Footer';
import Links from '../components/Links';
import Video from '../components/Video';

const Krespos = () => {
    
    const wireframeCards = [
        { imageURL: 'https://static.wixstatic.com/media/e645a6_7cadd55b46a5431c8d0748faf0d34d25~mv2.png/v1/fill/w_428,h_926,al_c,q_90,enc_avif,quality_auto/e645a6_7cadd55b46a5431c8d0748faf0d34d25~mv2.png', caption: 'Home' },
        { imageURL: 'https://static.wixstatic.com/media/e645a6_4c58022f35234d08bc11efe9755238fc~mv2.png/v1/fill/w_428,h_926,al_c,q_90,enc_avif,quality_auto/e645a6_4c58022f35234d08bc11efe9755238fc~mv2.png', caption: 'Search' },
        { imageURL: 'https://static.wixstatic.com/media/e645a6_c48479dc12ec4fe2886505e21a3cbd54~mv2.png/v1/fill/w_428,h_926,al_c,q_90,enc_avif,quality_auto/e645a6_c48479dc12ec4fe2886505e21a3cbd54~mv2.png', caption: 'Profile' },
        { imageURL: 'https://static.wixstatic.com/media/e645a6_e4311226c4fe48a6a8766b34aa9cfa16~mv2.png/v1/fill/w_428,h_926,al_c,q_90,enc_avif,quality_auto/e645a6_e4311226c4fe48a6a8766b34aa9cfa16~mv2.png', caption: 'Product' },
    ];
    const finalAppCards = [
        { imageURL: 'https://static.wixstatic.com/media/e645a6_79d82d024f6f4e9989a72b4a121fafb2~mv2.png/v1/fill/w_428,h_926,al_c,q_90,enc_avif,quality_auto/e645a6_79d82d024f6f4e9989a72b4a121fafb2~mv2.png', caption: 'Home' },
        { imageURL: 'https://static.wixstatic.com/media/e645a6_50832afb6b30447c9b0e6508ed9d0d50~mv2.png/v1/fill/w_428,h_926,al_c,q_90,enc_avif,quality_auto/e645a6_50832afb6b30447c9b0e6508ed9d0d50~mv2.png', caption: 'Search' },
        { imageURL: 'https://static.wixstatic.com/media/e645a6_b248d10cc34f43b0a43f943f29d64486~mv2.png/v1/fill/w_428,h_926,al_c,q_90,enc_avif,quality_auto/e645a6_b248d10cc34f43b0a43f943f29d64486~mv2.png', caption: 'Profile' },
        { imageURL: 'https://static.wixstatic.com/media/e645a6_7195a62067944f8dadc2e807cbb17c91~mv2.png/v1/fill/w_428,h_926,al_c,q_90,enc_avif,quality_auto/e645a6_7195a62067944f8dadc2e807cbb17c91~mv2.png', caption: 'Product' },
    ];

    return <div>
        <Nav />
        <Spotlight>
            <div className='spotlight-column'>
                <span className='spotlight-title'><strong>Krespos</strong></span>
            </div>
            <div className='spotlight-column'>
                <span className='spotlight-subtitle'><strong>Duration</strong></span>
                <p>6 months</p>
            </div>
            <div className='spotlight-column'>
                <span className='spotlight-subtitle'><strong>My Role</strong></span>
                <p>Research<br />
                    Prototyping<br />
                    Interface Design</p>
            </div>
            <div className='spotlight-column'>
                <span className='spotlight-subtitle'><strong>Tools</strong></span>
                <p>Adobe XD</p>
            </div>
        </Spotlight>
        <div className='project-brief' style={{ display: "block", width: "90%", margin: "5%" }}>
        <img style={{ margin: "3%", width: "90%", boxShadow: "2px 2px 6px 2px #BBB" }} src="https://static.wixstatic.com/media/e645a6_b5f90ec2018648c4be4e2c7b4e44df1a~mv2.jpg/v1/fill/w_1471,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_b5f90ec2018648c4be4e2c7b4e44df1a~mv2.jpg" alt="Krespos Logo"></img>
            <div style={{ margin: "3%", width: "90%"}}>
                <h2 style={{ fontSize: "3em", marginTop: "0%", textAlign: 'center' }}><strong>Project Brief</strong></h2>
                <span style={{ fontSize: "1.5em" }}>Welcome to Krespos! We are a review-based app that connects curly heads from all over with the common goal of finding the best products for our beautiful (yet sometimes difficult-to-handle) hair. Krespos is here to make this process easier by compiling products and real-user reviews in one place, as sometimes doing this research can be tedious. This was a group based project where I took care of all the interface and app work and my partner took care of all the art work. We had freedom to do whatever we liked!</span>
            </div>
        </div>
        <div className='project-info' style={{ display: "flex", width: "90%", margin: "5%" }}>
            <div style={{ margin: "5%", width: "85%", textAlign: "center"}}>
                <h2 style={{ fontSize: "3em", marginTop: "0%" }}>User Persona</h2>
                <img style={{ margin: "5%", width: "100%", boxShadow: "2px 2px 6px 2px #BBB" }} src="https://static.wixstatic.com/media/e645a6_06d906d86a3846c1a35bb5ba440d3813~mv2.jpg/v1/fill/w_1408,h_1484,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_06d906d86a3846c1a35bb5ba440d3813~mv2.jpg" alt="Krespos User Persona"></img>
            </div>
        </div>
        <div className='user-flow' style={{ display: "flex", width: "90%", margin: "5%" }}>
            <div style={{ margin: "5%", width: "85%", textAlign: "center"}}>
                <h2 style={{ fontSize: "3em", marginTop: "0%" }}>User Flow Diagrams</h2>
                <img style={{ margin: "5%", width: "100%", boxShadow: "2px 2px 6px 2px #BBB" }} src="https://static.wixstatic.com/media/e645a6_63c9cdd8455a417985fb85574929ecb5~mv2.jpg/v1/crop/x_1281,y_1005,w_2141,h_2555/fill/w_1383,h_1649,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_63c9cdd8455a417985fb85574929ecb5~mv2.jpg" alt="Krespos Flow"></img>
            </div>
        </div>
        <div className='user-scenario' style={{ display: "flex", width: "90%", margin: "5%" }}>
            <div style={{ margin: "5%", width: "85%", textAlign: "center"}}>
                <h2 style={{ fontSize: "3em", marginTop: "0%" }}>User Scenario</h2>
                <img style={{ margin: "5%", width: "100%", boxShadow: "2px 2px 6px 2px #BBB" }} src="https://static.wixstatic.com/media/e645a6_597220bdeb064159910b943334a1a646~mv2.png/v1/fill/w_1408,h_845,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_597220bdeb064159910b943334a1a646~mv2.png" alt="Krespos User Scenario"></img>
            </div>
        </div>
        <CardContainer title='Wireframes' columns={2}>
            {wireframeCards.map((card, index) => (
                <Card key={index} imageURL={card.imageURL} caption={card.caption} />
            ))}
        </CardContainer>
        <CardContainer title='Final App' columns={2}>
            {finalAppCards.map((card, index) => (
                <Card key={index} imageURL={card.imageURL} caption={card.caption} />
            ))}
        </CardContainer>

        <Video 
            src="https://video.wixstatic.com/video/e645a6_80087bb6b6eb4ac89b9771b4d6ff7cbb/720p/mp4/file.mp4" 
            poster="https://static.wixstatic.com/media/e645a6_80087bb6b6eb4ac89b9771b4d6ff7cbbf000.jpg/v1/fill/w_598,h_1312,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/e645a6_80087bb6b6eb4ac89b9771b4d6ff7cbbf000.jpg" 
            width="30%" 
            height="" 
            loop={true} 
            muted={true} 
            controls={true} 
            title="Final Prototype"
        />

        <Branding colors={["#FFFFFF", "#2D2E35", "#1F2023", "#8E90A1"]} font="Gilroy" appName="Krespos" />

        <Links/>

        <Footer/>
    </div>;
};

export default Krespos;
