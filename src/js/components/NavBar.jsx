import React from 'react';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import MenuItems from 'components/MenuItems';
import MobileMenu from 'components/MobileMenu';

const style = { // We can use inline-style
  background: '#181818',
  height: 61,
}
class NavBar extends React.Component {
    render(){
        return(                                         //name is foo
            <AppBar position="static" style={style} name={this.props.name}>
                <Toolbar>
                    <Grid container gutter={24}>
                        <Grid item xs={4} md={3}>
                            <a href="https://class.chinesepod.com/">
                                <img src="https://chinesepod.com/img/logo.png" className="navbar-logo" alt=""/>
                            </a>
                        </Grid>
                        <Grid item xs={8} md={9}>
                            <div className="nav-menu-list-container">
                                <MenuItems />
                            </div>
                            <MobileMenu />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavBar;


