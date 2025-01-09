import Nav from '../components/Nav';
import Spotlight from '../components/Spotlight';
import CardContainer from '../components/CardContainer';
import Card from '../components/Card';
import Branding from '../components/Branding';
import Footer from '../components/Footer';
import Links from '../components/Links';
import Video from '../components/Video';

const Kickoff = () => {

    const userflowCards = [
        { imageURL: 'https://static.wixstatic.com/media/e645a6_cff1914d1b4e4189a2ea1aa61a0b3433~mv2.jpg/v1/crop/x_59,y_0,w_973,h_2044/fill/w_958,h_2011,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_cff1914d1b4e4189a2ea1aa61a0b3433~mv2.jpg', caption: '' },
        { imageURL: 'https://static.wixstatic.com/media/e645a6_9b5dc7791d474b218e6902f2fdc544d1~mv2.jpg/v1/crop/x_29,y_0,w_1091,h_2052/fill/w_968,h_1820,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_9b5dc7791d474b218e6902f2fdc544d1~mv2.jpg', caption: '' },
    ];
    const wireframeCards = [
        { imageURL: 'https://static.wixstatic.com/media/e645a6_d10c74e2335e4d0f84629ca5e4775031~mv2.jpg/v1/crop/x_0,y_0,w_438,h_1065/fill/w_438,h_1065,fp_0.50_0.50,q_85,enc_avif,quality_auto/e645a6_d10c74e2335e4d0f84629ca5e4775031~mv2.jpg', caption: 'Home' },
        { imageURL: 'https://static.wixstatic.com/media/e645a6_598d0e5ef0354aedb0caa5566c1c6e58~mv2.jpg/v1/crop/x_0,y_0,w_438,h_992/fill/w_438,h_992,fp_0.50_0.50,q_85,enc_avif,quality_auto/e645a6_598d0e5ef0354aedb0caa5566c1c6e58~mv2.jpg', caption: 'Map' },
    ];
    const finalAppCards = [
        { imageURL: 'https://static.wixstatic.com/media/e645a6_acdf3161195d4a7c968eb28c316e7435~mv2.png/v1/fill/w_468,h_1013,al_c,lg_1,q_90,enc_avif,quality_auto/e645a6_acdf3161195d4a7c968eb28c316e7435~mv2.png', caption: 'Home' },
        { imageURL: 'https://static.wixstatic.com/media/e645a6_7331645904f14d81b66cbc4e74aba5d1~mv2.png/v1/fill/w_468,h_1013,al_c,lg_1,q_90,enc_avif,quality_auto/e645a6_7331645904f14d81b66cbc4e74aba5d1~mv2.png', caption: 'Map' },
        { imageURL: 'https://static.wixstatic.com/media/e645a6_c9b6cd7c89bf4b75aa8b502d862d5437~mv2.png/v1/fill/w_468,h_1013,al_c,lg_1,q_90,enc_avif,quality_auto/e645a6_c9b6cd7c89bf4b75aa8b502d862d5437~mv2.png', caption: 'Team Info' },
        { imageURL: 'https://static.wixstatic.com/media/e645a6_a14b1e998dcf4b49adc05883b09eec98~mv2.png/v1/fill/w_468,h_1013,al_c,lg_1,q_90,enc_avif,quality_auto/e645a6_a14b1e998dcf4b49adc05883b09eec98~mv2.png', caption: 'Map Review' },
    ];

    return <div>
        <Nav />
        <Spotlight>
            <div className='spotlight-column'>
                <span className='spotlight-title'><strong>KickOff</strong></span>
            </div>
            <div className='spotlight-column'>
                <span className='spotlight-subtitle'><strong>Duration</strong></span>
                <p>4 months</p>
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
        <div className='project-brief' style={{ display: "flex", width: "90%", margin: "5%" }}>
            <div style={{ margin: "3%", width: "80%"}}>
                <h2 style={{ fontSize: "3em", marginTop: "0%" }}><strong>Project Brief</strong></h2>
                <span style={{ fontSize: "1.5em" }}>For this project I had to create an app that does not exist and I had freedom to choose whatever I would like. KickOff is a sports app that allows you to keep track of day to day sports. However, this app also allows you to see the location of restaurants or bars that are broadcasting the sport you are looking for. Being able to connect with the community around you is important in sports Kickoff your journey today! This was a solo project where I took care of everything.</span>
            </div>
            <img style={{ margin: "3%", width: "20%", boxShadow: "2px 2px 6px 2px #BBB" }} src="https://static.wixstatic.com/media/e645a6_55478deb69e4421681d70cfb4ac67fcb~mv2.png/v1/fill/w_984,h_984,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_55478deb69e4421681d70cfb4ac67fcb~mv2.png" alt="Kickoff App Logo"></img>
        </div>
        <div className='project-info' style={{ display: "flex", width: "90%", margin: "5%" }}>
            <div style={{ margin: "3%", width: "85%", textAlign: "center"}}>
                <h2 style={{ fontSize: "3em", marginTop: "0%" }}>User Persona</h2>
                <img style={{ margin: "5%", width: "100%", boxShadow: "2px 2px 6px 2px #BBB" }} src="https://static.wixstatic.com/media/e645a6_8e9ae848aef745ea984bed4141721c80~mv2.jpg/v1/fill/w_1498,h_1594,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_8e9ae848aef745ea984bed4141721c80~mv2.jpg" alt="Kickoff User Persona"></img>
            </div>
        </div>
        <CardContainer title='User Flow Diagrams' columns={2}>
            {userflowCards.map((card, index) => (
                <Card key={index} imageURL={card.imageURL} caption={card.caption} />
            ))}
        </CardContainer>
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
            src="https://video.wixstatic.com/video/e645a6_47eb15d651fe409db9b20dbd44625e1d/720p/mp4/file.mp4" 
            poster="https://static.wixstatic.com/media/e645a6_acdf3161195d4a7c968eb28c316e7435~mv2.png/v1/fill/w_452,h_1013,al_c,lg_1,q_90,usm_0.33_1.00_0.00,enc_avif,quality_auto/e645a6_acdf3161195d4a7c968eb28c316e7435~mv2.png" 
            width="30%" 
            height="" 
            loop={true} 
            muted={true} 
            controls={true} 
            title="Final Prototype"
        />

        <Branding colors={["#4B4848", "#6A6A6A", "#797B6A", "#6C755E"]} font="Segoe UI" appName="KickOff" />

        <Links/>

        <Footer/>
    </div>;
};

export default Kickoff;
