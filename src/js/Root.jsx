import React from 'react';

import { MuiThemeProvider } from 'material-ui/styles';
import MainLayout from 'components/MainLayout';

const Root = () => 
    <MuiThemeProvider>
        <MainLayout />
    </MuiThemeProvider>

export default Root;