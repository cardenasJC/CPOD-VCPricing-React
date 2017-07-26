import React from 'react';

import FaqTab from 'components/FaqTab';

class FaqTabs extends React.Component{
    handleClick(tab){
        this.props.changeTab(tab);
    }
    render(){
        return (
            <nav>
                <ul>
                {this.props.tabList.map(function(tab) {
                    return (
                        <FaqTab
                            handleClick={this.handleClick.bind(this, tab)}
                            key={tab.id}
                            url={tab.url}
                            label={tab.label}
                            isCurrent={(this.props.currentTab === tab.id)}
                         />
                    );
                }.bind(this))}
                </ul>
            </nav>
        );
    }
}

export default FaqTabs;