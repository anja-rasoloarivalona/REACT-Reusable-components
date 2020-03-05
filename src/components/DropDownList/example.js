import React, { Component } from 'react';
import DropDownList from '../DropDownList/DropDownList';

 class DropDownListExample extends Component {
     constructor(props){
         super(props)
         this.state = {
            language: 'english',
            currency: "CAD"
        }
     }
     

     selectLanguage = language => {
         this.setState({ language })
     }
     selectCurrency = currency => {
         this.setState({ currency })
     }
    render() {
        const { language, currency } = this.state;

        return (
            <div className="drop-down-list-example">
                <DropDownList 
                    value={language}
                    list={['english', 'french', 'spanish']}
                    selectValue={this.selectLanguage}
                />

                <DropDownList 
                    value={currency}
                    list={[
                        {
                            text: 'Dollard Canadien CAD',
                            value: "CAD"
                        },
                        {
                            text: 'Dollard Américain USD',
                            value: "USD"
                        },
                    ]}
                    selectValue={this.selectCurrency}
                    borderColor='red'
                    backgroundColor='green'
                />
            </div>
        )
    }
}

export default DropDownListExample
