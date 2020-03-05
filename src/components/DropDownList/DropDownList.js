import React, { Component } from 'react'
import './DropDownList.css';

class DropDownList extends Component {
    constructor(props){
        super(props)
        this.state = {
            showList: false
        }
    }
   
    
  
    componentDidMount(){
        document.addEventListener('mousedown', this.handleClick, false)
    }
    
    componentWillUnmount(){
         document.removeEventListener('mousedown', this.handleClick, false)
    }

    toggleList = () => {
        this.setState(prevState => ({
            ...prevState,
            showList: !prevState.showList
        }))
    }

    handleClick = e => {         
        if(this.target && this.target.contains(e.target)){
            return
        } else {
            if(this.state.showList){
                this.toggleList()
            }
            
        }     
    }

    render() {



        let list  = this.props.list

        console.log(list);

        
        const {showList} = this.state

        return (
            <div className={`drop-down-list ${showList ? 'show' : ''}`}
                 ref={el => this.target = el}
                 onClick={this.toggleList}>
                    <div className="drop-down-list__value"
                        style={{
                            border: `1px solid ${this.props.borderColor}`,
                            backgroundColor: this.props.backgroundColor,
                            color: this.props.backgroundColor ? 'white'  : 'inherit'
                        }}
                    >
                        {this.props.value}
                    </div>
                    <ul className={`drop-down-list__list`}
                        style={{
                            border: `1px solid ${this.props.borderColor}`,
                            borderTop: 'none'
                        }}
                    >
                        {list && list.map(item => 
                            <li className={`drop-down-list__list__item
                                        ${item.value && this.props.value === item.value ? 'active':''}
                                        ${item.text && this.props.value === item.text ? 'active':''}
                                        ${this.props.value === item ? 'active' : ''}`}
                                key={item.text ? item.text : item}
                                onClick={() => this.props.selectValue(item.value ? item.value : item)}>
                                {item.text ? item.text : item}
                            </li>
                        )}
                    </ul>     
            </div>
        )
    }
}


export default DropDownList;