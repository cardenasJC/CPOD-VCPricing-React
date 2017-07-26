import React from 'react';

import NavBar from 'components/NavBar';
import HeroImage from 'components/HeroImage';
import FaqSection from 'components/FaqSection';

class MainLayout extends React.Component {
    render() {
        const nav = "foo";
        const hero = {
            name: "bar"
        }
        return(
            <div className="app">
                <NavBar name={nav}/>
                <HeroImage name={hero.name}/>
                <FaqSection />
            </div>
        )
    }
}

export default MainLayout;