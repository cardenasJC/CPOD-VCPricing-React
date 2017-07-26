import React from 'react';

import MenuItems from 'components/MenuItems';

class MobileMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: false};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            })
        );
       
    }
    render(){
        const collapsed = { // collapsed menu
            height: 61,
        }
        const expanded = { // expanded menu
            height: 100+'%',
        }
        const MobileMenuList = () => {
            return(
                <div className="mobile-menu-list-cont">
                    <MenuItems />
                </div>  
            )
        }
        return(
            <div className="mobile-menu-container" style={this.state.isToggleOn ? expanded : collapsed}>
                <a href="https://class.chinesepod.com/">
                    <img src="https://chinesepod.com/img/logo_icon_white.png" className="mobile-logo" alt="ChinesePod mobile logo icon"/>
                </a>
                <span onClick={this.handleClick} className={this.state.isToggleOn ? 'burger expanded' : 'burger collapsed'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                {this.state.isToggleOn ? <MobileMenuList /> : null}
            </div>
        )
    }
}
export default MobileMenu;