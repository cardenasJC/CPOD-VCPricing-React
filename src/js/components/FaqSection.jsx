import React from 'react';
import Grid from 'material-ui/Grid';

import FaqTabs from 'components/FaqTabs';
import FaqTabPane from 'components/FaqTabPane';
import { Subscription, LessonCredits, TutoringClasses, RefundPolicy } from 'components/FaqContent';

const tabList = [
    { 'id': 1, 'label': 'Subscription', 'content': <Subscription /> },
    { 'id': 2, 'label': 'Lesson Credits', 'content': <LessonCredits /> },
    { 'id': 3, 'label': 'Tutoring Classes', 'content': <TutoringClasses /> },
    { 'id': 4, 'label': 'Refund Policy', 'content': <RefundPolicy /> }
];

class FaqSection extends React.Component{
    constructor(){
        super();
        this.state = {
            tabList: tabList,
            currentTab: 1
        }
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(tab) {
        this.setState({ currentTab: tab.id });
    }

    render(){
        return(
            <div>
                <FaqTabs
                    currentTab={this.state.currentTab}
                    tabList={this.state.tabList}
                    changeTab={this.changeTab}
                />
                <FaqTabPane currentTab={this.state.currentTab} tabList={this.state.tabList}/>
            </div>
        );
    }
}
export default FaqSection;