import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      resumeData: {}
    };
  }

  getResumeData() {
    fetch('./resumeData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ loading: false, resumeData: data });
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    const { loading, resumeData } = this.state;
    
    if (loading) {
      return <React.Fragment />;
    }

    return (
      <div className="App">
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Portfolio data={resumeData.portfolio}/>
        <Resume data={resumeData.resume}/>
        <Contact data={resumeData.main}/>
        <Footer data={resumeData.main} />
      </div>
    );
  }
}

export default App;
