import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import '../css/main.css';

const Contact = () => {
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		message: '',
	});

	const { name, email, message } = inputs;

	const initialState = {
		name: '',
		email: '',
		message: '',
	};

	const handleInput = event => {
		if (event) {
			event.preventDefault();

			setInputs({ ...inputs, [event.target.name]: [event.target.value] });
		}
	};

	const formSubmit = async e => {
		e.preventDefault();
		const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
		const messageInfo = {
			name: name,
			email: email,
			message: message,
		};
		return await axios({
			method: 'post',
			url: `${corsAnywhere}https://asrserver.herokuapp.com/api/portfolio/send-email?email=${messageInfo.email}&name=${messageInfo.name}&message=${messageInfo.message}`,
			data: {
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:3000/',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			},
		})
			.then(response => {
				console.log(response);
				setInputs({ ...initialState });
				alert('Sent');
			})
			.catch(error => {
				alert(error.message);
				console.log(error);
			});
	};

	const renderForm = () => {
		return (
			<div className="section__contact">
				<div className="section__contact--container">
					<h2>Want to work together?</h2>
					<hr></hr>
					<form onSubmit={formSubmit} className="section__contact--container--form">
						<div className="section__contact--container--form--input-row">
							<div className="section__contact--container--form--input-row--icon-box">
								<i className="far fa-user"></i>
							</div>
							<input
								name="name"
								type="text"
								placeholder="First & Last Name"
								value={name}
								onChange={e => handleInput(e)}
								required
							/>
						</div>
						<div className="section__contact--container--form--input-row">
							<div className="section__contact--container--form--input-row--icon-box">
								<i className="far fa-envelope"></i>
							</div>
							<input
								name="email"
								type="email"
								placeholder="Email"
								value={email}
								onChange={e => handleInput(e)}
								required
							/>
						</div>
						<div className="section__contact--container--form--input-row">
							<textarea
								name="message"
								type="text"
								placeholder="Enter your message"
								rows="10"
								value={message}
								onChange={e => handleInput(e)}
								required
							/>
						</div>
						<div className="section__contact--container--form--input-row">
							<button onClick={formSubmit}>Send</button>
						</div>
					</form>
				</div>
			</div>
		);
	};

	return <Fragment>{renderForm()}</Fragment>;
};

export default Contact;
