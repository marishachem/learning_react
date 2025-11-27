import React from 'react'

class Form extends React.Component {
    state = {
        firstName:'',
        email:'',
        message:'',
        select:'',
        subscription:false
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCheckbox = (event) => {
        this.setState({
            [event.target.name]: event.target.checked
        })
    }

    componentDidUpdate(prevProps, prevState) {
        // Логируем только если firstName изменился
        if (prevState.firstName !== this.state.firstName) {
            console.log({firstName: this.state.firstName})
        }
    }

    validateName = () => {
        if(this.state.firstName.length < 5) {
            alert('too short')
        }
    }

    validateEmail = () => {
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.state.email)) {
            alert('email is not correct')
        }
    }

    render () {
        const{firstName, email,message, select, subscription} = this.state
        return <div>
            <input
                type="text"
                name="firstName"
                placeholder="firstName"
                value={firstName}
                onChange={this.handleChange}
                onBlur={this.validateName}
            />
            <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                onBlur={this.validateEmail}
            />
            <br/>
            <textarea name="message" value={message} onChange={this.handleChange}/>
            <br/>
            <select name="select" value={select} onChange={this.handleChange}>
                <option value="" disabled>1</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <br/>
            <input type="checkbox" name="subscription" checked={subscription} onChange={this.handleCheckbox}></input>
        </div>
    }
}

export {Form}
