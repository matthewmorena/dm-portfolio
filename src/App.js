import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollToAnchor from './components/ScrollToAnchor';
import Home from './pages/home';
import Kickoff from './pages/kickoff';
import Krespos from './pages/krespos';
import WayWize from './pages/waywize';

const App = () => {
    return (
        <div>
            <ScrollToTop />
            <ScrollToAnchor />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/kickoff" element={<Kickoff />} />
                <Route path="/krespos" element={<Krespos />} />
                <Route path="/waywize" element={<WayWize />} />
            </Routes>
        </div>
    );
};

export default App;