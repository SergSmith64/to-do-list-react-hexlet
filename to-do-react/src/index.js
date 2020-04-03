import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// _________

const Item = React.createClass({
  render: function() {
  return <li>{this.props.value}</li>;
  }
})

const Field = React.createClass({
  getInitialState: function() {
    return {text: "", items: []};
  },

handleChange: function(e) {
  this.setState({text: e.target.value})
},

handleClick: function(e) {
  const items = this.state.items;
  const text = this.state.text;
  items.push(text);
  this.setState({text: "", items: items})
},

render: function() {
  const text = this.state.text;
  const items = this.state.items;
  return (
    <div>
      <input type="text" value={text} onChange={this.handleChange} />
      <input type="button" value="add" onClick={this.handleClick} />
      <ul>
        {items.map(function(item)) {
          return <Item value={item} />;
        } }
      </ul>
    </div>
  );
}

</div>
);
}

})
React.render(
  <Field />,
  document.getElementById("root")
);

// ________

{/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
