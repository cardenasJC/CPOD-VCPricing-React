import React from 'react';

import image from 'images/VC-header-1920x350.jpg';

const heroimg = {
    alt: 'Girl studying mandarin',
    width: '100%',
    img: image
}
class HeroImage extends React.Component {
    render(){
        return(
            <img src={heroimg.img} width={heroimg.width} alt={heroimg.alt} name={this.props.name}/>
        )
    }
}

export default HeroImage;