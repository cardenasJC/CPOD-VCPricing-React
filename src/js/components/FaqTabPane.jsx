import React from 'react';

class FaqTabPane extends React.Component{
    render(){
        return(
            <div className="tabpane">
                {/*{this.props.currentTab === 1 ?
                <div className="mike">
                    tea 1
                </div>
                :null}

                {this.props.currentTab === 2 ?
                <div className="donnie">
                    tea 2
                </div>
                :null}

                {this.props.currentTab === 3 ?
                <div className="raph">
                    tea 3
                </div>
                :null}
            
                {this.props.currentTab === 4 ?
                <div className="leo">
                    tea 4
                </div>
                :null}*/}


                {this.props.tabList.map(function(tab) {
                    return (
                        <div key={tab.id}>
                            {this.props.currentTab === tab.id ?
                                <div className="">
                                    {tab.content} {tab.id}
                                </div>

                            :null}
                        </div>
                    );
                }.bind(this))}
            </div>
        );
    }
}
export default FaqTabPane;