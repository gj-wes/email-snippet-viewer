import React, { Component } from 'react';
import { Header } from './components/Header';
import { CategoryList } from './components/CategoryList';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      codeView: '<p>Code snippet will display here!</p>',
      codeViewLang: 'html'
    }
    this.updateHTML = this.updateHTML.bind(this)
  }

  updateHTML(newHTML, codeLang='html') {
    this.setState({
      codeView: newHTML,
      codeViewLang: codeLang
    })
  }
  
  render() {
    return (
      <main className="vh-100">
        <Header />
      <div className="flex">
        <section className="w-third bg-blue overflow-scroll flex flex-column justify-between section--height">
          <CategoryList update={this.updateHTML}/>
          <p className="tc near-white mv1">GW2018</p>
        </section>
        <section className="codeview-bgcolor w-two-thirds section--height">
        <SyntaxHighlighter language={this.state.codeViewLang} style={atomOneDark}> 
          {this.state.codeView}
        </SyntaxHighlighter>
        </section>
      </div>
      </main>
    );
  }
}

export default App;
