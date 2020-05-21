import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { resumeData, resumeDataItalian } from "./resumeData";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "eng",
      resume: resumeData,
    };

    this.handlerIt = this.handlerIt.bind(this);
    this.handlerEn = this.handlerEn.bind(this);
  }
  handlerIt() {
    this.setState({
      lang: "it",
      resume: resumeDataItalian,
    });

    console.log(this.state.lang);
  }
  handlerEn() {
    this.setState({
      lang: "eng",
      resume: resumeData,
    });
    console.log(this.state.lang);
  }
  render() {
    return (
      <div className="App">
        <Header
          handlerIt={this.handlerIt}
          handlerEn={this.handlerEn}
          resumeData={this.state.resume}
        />
        <About resumeData={this.state.resume} />
        <Resume resumeData={this.state.resume} />
        <Portfolio resumeData={this.state.resume} />
        <Testimonials resumeData={this.state.resume} />
        <Contact resumeData={this.state.resume} />
        <Footer resumeData={this.state.resume} />
      </div>
    );
  }
}

export default App;
