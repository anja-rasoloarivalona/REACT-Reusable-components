import React, { Component } from 'react'
import Input from './Input';
import Button from '../Button/Button'

 class InputExample extends Component {
    constructor(props){
        super(props)
        this.state = {
            formInput: {
                name: {
                    value: ''
                },
    
                email:{
                    value: ''
                },
                text: {
                    value: ''
                }
            },
        }
    }

    inputChangeHandler = (input, value) => {
        this.setState( prevState => {
            const updatedForm = {
                ...prevState.formInput,
                [input]: {
                    ...prevState.formInput[input],
                    value: value
                }
            }
            return {
                formInput: updatedForm
            }
        })
    }

    submitFormHandler = e => {
        e.preventDefault()
        const { formInput } = this.state
        alert(`
            name: ${formInput.name.value}
            email: ${formInput.email.value}
            text: ${formInput.text.value}
        `)
    }
    render() {

        const { formInput }  = this.state
        return (
            <div className="input-example">
                <form className="input-example__form"
                        onSubmit={e => this.submitFormHandler(e)}
                        autoComplete="off"
                >

                        <Input 
                            type="text"
                            control="input"
                            label="name"
                            id='name'
                            value={formInput.name.value}
                            placeholder="name"
                            required={true}
                            autoComplete="off"
                            onChange={this.inputChangeHandler}
                        />
                        <Input 
                            type="email"
                            control="input"
                            label="email"
                            id='email'
                            value={formInput.email.value}
                            placeholder="email"
                            required={true}
                            autoComplete="off"
                            onChange={this.inputChangeHandler}
                        />

                        <Input 
                            type="text"
                            control="textarea"
                            label="text"
                            id='text'
                            value={formInput.text.value}
                            placeholder="text"
                            required={true}
                            autoComplete="off"
                            onChange={this.inputChangeHandler}
                        />

                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default InputExample
