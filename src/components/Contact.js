import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  };

  formSubmit = async (e) => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    const resetForm = () => {
      this.setState({
        name: "",
        message: "",
        email: "",
        buttonText: "Message Sent",
      });
    };

    let response;
    while (true) {
      response = await fetch(`http://localhost:5000/api/v1.0/mails`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const data2 = await response.json();
      if (response.status !== 500) {
        this.setState({
          sent: true,
          name: "",
          message: "",
          email: "",
          buttonText: "Message Sent",
        });
        alert("Your message has been sent");
        console.log(data2);
        break;
      }
    }
  };

  render() {
    return (
      <section id="contact">
        <form
          id="contact-form"
          className="col-lg-12"
          onSubmit={(e) => this.formSubmit(e)}
        >
          <label class="message" htmlFor="message-input">
            Your Message
          </label>
          <textarea
            onChange={(e) => this.setState({ message: e.target.value })}
            name="message"
            class="message-input"
            type="text"
            placeholder="Please write your message here"
            value={this.state.message}
            required
          />

          <label class="message-name" htmlFor="message-name">
            Your Name
          </label>
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            name="name"
            class="message-name"
            type="text"
            placeholder="Your Name"
            value={this.state.name}
          />

          <label class="message-email" htmlFor="message-email">
            Your Email
          </label>
          <input
            onChange={(e) => this.setState({ email: e.target.value })}
            name="email"
            class="message-email"
            type="email"
            placeholder="your@email.com"
            required
            value={this.state.email}
          />

          <button type="submit" className="button submit">
            {this.state.buttonText}
          </button>
        </form>
      </section>
    );
  }
}

export default Contact;
