import React from 'react'

    class FormWithRef extends React.Component {
        constructor() {
            super(); //Вызывает конструктор React.Component
            this.state = {
                card: '',
                email:'',
            }
            this.cardRef = React.createRef() //Ref не храним в state
            this.emailRef = React.createRef()
        }



        handleChange = (event => {
            this.setState(() => ({[event.target.name]: event.target.value}),() => {})
            if (this.state.card.length === 16) {
                this.emailRef.current.focus()
            }
        })

        componentDidMount() {
            console.log(this.cardRef.current)
            this.cardRef.current.focus()
        }

        validateEmail = () => {
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.state.email)) {
                alert('email is not correct')
                return false
            }
            return true
        }



        render() {
            const {card, email} = this.state
            return <div>
                <input
                    type="text"
                    name="card"
                    placeholder="card"
                    value={card}
                    onChange={this.handleChange}
                    ref = {this.cardRef}
                />
                <br/>
                <label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        //onChange={this.handleChange}
                        ref = {this.emailRef}
                    />
                </label>
                <br/>
                <br/>
            </div>
        }
    }

export {FormWithRef}
