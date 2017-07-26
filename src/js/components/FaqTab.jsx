import React from 'react';

class FaqTab extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        this.props.handleClick();
    }
    render(){
        return (
            <li className={this.props.isCurrent ? 'current' : null}>
                <a onClick={this.handleClick} href={this.props.url}>
                    {this.props.label}
                </a>
            </li>
        );
    }
}

export default FaqTab;