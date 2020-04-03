import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* __ 1 __ */}
      const Field = React.createClass({
        getInitialState: function() {
          return {text: "", items: []};
        },
      

      {/* __ 6 __ */}
      handleChange: function(e) {
        this.setState({text: e.target.value})
      },

      {/* __ 10 __ */}
      handleClick: function(e) {
        const items = this.state.items;
        const text = this.state.text;
        items.push(text);
        this.setState({text: "", items: items})
      },

      {/* __ 17 __ */}
      render: function() {
        const text = this.state.text;
        const items = this.state.items;
        return (
          <div>
            <input type="text" value={text} onChange={this.handleChange} />
            <input type="button" value="add" onClick={this.handleClick} />
            <ul>
              {items.map(function(item)) {
                return <li>{item}</li>;
              } }
            </ul>
          </div>
        );
      }

    </div>
  );
}

})
{/* React.render( <Field />, document.getElementById("root")) */}

export default App;
