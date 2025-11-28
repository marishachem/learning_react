import React from 'react'

    class Form extends React.Component {
        state = {
            email: '',
            subscription: false,
            sent: false,
        }

        handleChange = (event) => {
            const {name, value, type, checked} = event.target
            this.setState({
                [name]: type === 'checkbox' ? checked : value
            })
        }

        validateEmail = () => {
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.state.email)) {
                alert('email is not correct')
                return false
            }
            return true
        }

        handleSubmit = () => {
            if (this.validateEmail() && this.state.subscription) {
                this.setState({sent: true})
                alert("Success!")
            } else {
                if (!this.validateEmail()) {
                    alert('Please fill correct email')
                } else if (!this.state.subscription) {
                    alert('Please agree with the terms and conditions')
                }
            }

        }


        render() {
            const {email, subscription, sent} = this.state
            return <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                />
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="subscription"
                        checked={subscription}
                        onChange={this.handleChange}
                    />
                    I agree with the terms and conditions
                </label>
                <br/>
                <br/>
                <button onClick={this.handleSubmit}>{sent ? 'Sent' : 'Send'}</button>
            </div>
        }
    }

export {Form}
