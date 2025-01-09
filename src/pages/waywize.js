import Nav from '../components/Nav';
import Spotlight from '../components/Spotlight';
import Branding from '../components/Branding';
import Footer from '../components/Footer';
import Links from '../components/Links';
import Hero from '../components/Hero';

const WayWize = () => {
    

    return <div>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />

        <Nav />
        <Spotlight>
            <div className='spotlight-column'>
                <span className='spotlight-title'><strong>WayWize</strong></span>
            </div>
            <div className='spotlight-column'>
                <span className='spotlight-subtitle'><strong>Duration</strong></span>
                <p>8 months</p>
            </div>
            <div className='spotlight-column'>
                <span className='spotlight-subtitle'><strong>My Role</strong></span>
                <p>Research<br />
                    Prototyping<br />
                    Interface Design</p>
            </div>
            <div className='spotlight-column'>
                <span className='spotlight-subtitle'><strong>Tools</strong></span>
                <p>Figma</p>
            </div>
        </Spotlight>
        <div className='project-brief' style={{ display: "block", width: "90%", margin: "5%" }}>
        <img style={{ margin: "3%", width: "90%", boxShadow: "2px 2px 6px 2px #BBB" }} src="https://static.wixstatic.com/media/e645a6_a0987a43574a4337b7f0dc48c0a66e32~mv2.png/v1/crop/x_0,y_0,w_1925,h_1163/fill/w_1436,h_868,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_a0987a43574a4337b7f0dc48c0a66e32~mv2.png" alt="Waywize App Screenshot"></img>
            <div style={{ margin: "3%", width: "90%"}}>
                <h2 style={{ fontSize: "3em", marginTop: "0%", textAlign: 'center' }}><strong>Project Brief</strong></h2>
                <span style={{ fontSize: "1.5em" }}>For the WayWize project, my partner and I had complete creative freedom to design, create, and promote a fictional company. I took charge of all the design work and contributed some coding, while my partner handled the core coding to bring our vision to life. This collaboration allowed us to fully explore our creativity and technical skills.</span>
            </div>
        </div>
        <div className='project-info' style={{ display: "flex", width: "90%", margin: "5%" }}>
            <div style={{ margin: "5%", width: "85%", textAlign: "center"}}>
                <h2 style={{ fontSize: "3em", marginTop: "0%" }}>User Persona</h2>
                <img style={{ margin: "5%", width: "100%", boxShadow: "2px 2px 6px 2px #BBB" }} src="https://static.wixstatic.com/media/e645a6_8206cf098da8442384bebc74c99d2e18~mv2.jpg/v1/fill/w_1408,h_1606,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_8206cf098da8442384bebc74c99d2e18~mv2.jpg" alt="WayWize User Persona"></img>
            </div>
        </div>
        <div className='project-info' style={{ display: "flex", width: "90%", margin: "5%" }}>
            <div style={{ margin: "5%", width: "85%"}}>
                <h2 style={{ fontSize: "3em", marginTop: "0%", textAlign: "center" }}>High Fidelity Mockups</h2>
                <img style={{ margin: "5%", width: "40%", boxShadow: "2px 2px 6px 2px #BBB", verticalAlign: "top" }} src="https://static.wixstatic.com/media/e645a6_4936db6eb4284aeb82fdc1e5ec8a5f91~mv2.jpg/v1/fill/w_769,h_919,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_4936db6eb4284aeb82fdc1e5ec8a5f91~mv2.jpg" alt="WayWize Mockup"></img>
                <img style={{ margin: "5%", width: "40%", boxShadow: "2px 2px 6px 2px #BBB", verticalAlign: "top"  }} src="https://static.wixstatic.com/media/e645a6_2eba9d84d39244d397e81cc0f7c57356~mv2.jpg/v1/crop/x_0,y_1,w_1668,h_1951/fill/w_769,h_899,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_2eba9d84d39244d397e81cc0f7c57356~mv2.jpg" alt="WayWize Mockup"></img>
                <span style={{ fontSize: "1.5em", textAlign: "left" }}>In the early stages of this project, I explored various color schemes, testing different palettes while preserving the core design. I shared these iterations with a select group, who favored the, brownish colorway for its aesthetic appeal, though some mentioned it compromised text readability. Personally, I leaned towards the lighter design. To create the perfect balance, I refined the design by embracing the warmth of the brown colorway while enhancing legibility and visual harmony, incorporating the invaluable feedback I received.</span>
            <br/>
                <img style={{ margin: "5%", width: "40%", boxShadow: "2px 2px 6px 2px #BBB", verticalAlign: "top"  }} src="https://static.wixstatic.com/media/e645a6_f963693b0e8b48889c5a6173463aaa3d~mv2.jpg/v1/fill/w_563,h_935,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_f963693b0e8b48889c5a6173463aaa3d~mv2.jpg" alt="WayWize Mockup"></img>
                <img style={{ margin: "5%", width: "40%", boxShadow: "2px 2px 6px 2px #BBB", verticalAlign: "top"  }} src="https://static.wixstatic.com/media/e645a6_40985c1ef4f44d4ba163ecefb88c0bf1~mv2.jpg/v1/fill/w_563,h_935,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_40985c1ef4f44d4ba163ecefb88c0bf1~mv2.jpg" alt="WayWize Mockup"></img>
                <span style={{ fontSize: "1.5em", textAlign: "left" }}>This process inspired me to create two distinct designs. The lighter version underwent minimal tweaks, with the addition of a unique footer section. The brown design, however, saw more significant changes: I experimented with a new font and introduced an additional color to make key elements stand out. After further testing, the feedback was clear that the brown design had a certain charm, the lighter version won out for its ease on the eyes and superior readability, making it the better choice for user experience.</span>
            <br/>
                <img style={{ margin: "5%", width: "40%", boxShadow: "2px 2px 6px 2px #BBB", verticalAlign: "top"  }} src="https://static.wixstatic.com/media/e645a6_53a6e8cff2ad4685bf18703d55cd942d~mv2.jpg/v1/crop/x_0,y_417,w_1668,h_1930/fill/w_754,h_873,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_53a6e8cff2ad4685bf18703d55cd942d~mv2.jpg" alt="WayWize Mockup"></img>
                <img style={{ margin: "5%", width: "40%", boxShadow: "2px 2px 6px 2px #BBB", verticalAlign: "top"  }} src="https://static.wixstatic.com/media/e645a6_4a76911a58f54ecdb2d76ec360b1daba~mv2.jpg/v1/crop/x_141,y_435,w_1405,h_1824/fill/w_611,h_794,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_4a76911a58f54ecdb2d76ec360b1daba~mv2.jpg" alt="WayWize Mockup"></img>
                <span style={{ fontSize: "1.5em", textAlign: "left" }}>At this stage, I was deciding whether to design the site as a single page or split it into two. The first iteration featured a two-page layout, with a home screen followed by an About page. I also experimented with a single-page design that consolidated all the information. Feedback was clear: the two-page layout was more engaging, as users found the single page overwhelming and less captivating. With this insight, I confidently moved forward, focusing on crafting a compelling two-page design.</span>
            <br/>
                <img style={{ margin: "5%", width: "40%", boxShadow: "2px 2px 6px 2px #BBB", verticalAlign: "top"  }} src="https://static.wixstatic.com/media/e645a6_ff6195f47d4d4c2387db6f49f56314db~mv2.jpg/v1/fill/w_830,h_906,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_ff6195f47d4d4c2387db6f49f56314db~mv2.jpg" alt="WayWize Mockup"></img>
                <img style={{ margin: "5%", width: "40%", boxShadow: "2px 2px 6px 2px #BBB", verticalAlign: "top"  }} src="https://static.wixstatic.com/media/e645a6_780ec7fe39204cf6be26879163a00657~mv2.jpg/v1/fill/w_530,h_906,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_780ec7fe39204cf6be26879163a00657~mv2.jpg" alt="WayWize Mockup"></img>
                <span style={{ fontSize: "1.5em", textAlign: "left" }}>As the design neared completion, I received final feedback from my partner on the last iteration. The suggestions were mostly minor—small details I had overlooked or text-based adjustments—but they were crucial. One key insight was about the buttons, where I hadn't noticed inconsistent rounding. This thoughtful feedback was invaluable and guided me to the polished, final design.</span>
            
            </div>
        </div>

        <Hero imageSrc="" altText="" imageOnRight = "true">
            <h2 className="hero-title" style={{fontSize:"3em"}}>
                Final Website
            </h2>
            <div className="hero-link">
                <a href="https://is-601-final-project.vercel.app/" target="_blank" rel="noreferrer" className="cta-button">See Live Website</a>
            </div>
        </Hero>
        <div className='project-info' style={{ display: "flex", width: "90%", marginLeft: "5%" }}>
            <div style={{ marginLeft: "5%", width: "85%"}}>
                <img style={{ margin: "5%", width: "40%", boxShadow: "2px 2px 6px 2px #BBB", verticalAlign: "top" }} src="https://static.wixstatic.com/media/e645a6_fac28bae2b0544a28b8d3f54501e70d3~mv2.png/v1/fill/w_736,h_1569,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_fac28bae2b0544a28b8d3f54501e70d3~mv2.png" alt="WayWize Final Screenshot"></img>
                <img style={{ margin: "5%", width: "40%", boxShadow: "2px 2px 6px 2px #BBB", verticalAlign: "top"  }} src="https://static.wixstatic.com/media/e645a6_0f6d28eaaa2f4db79757ce7dbe175361~mv2.png/v1/fill/w_780,h_1919,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_0f6d28eaaa2f4db79757ce7dbe175361~mv2.png" alt="WayWize Final Screenshot"></img>
            </div>
        </div>

        <Branding colors={["#EFEDE9", "#EFE9DC", "#EBDAB7", "#373737"]} font="Space Grotesk" appName="WayWize" />

        <Links/>

        <Footer/>
    </div>;
};

export default WayWize;
