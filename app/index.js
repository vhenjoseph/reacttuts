var React = require('react'); // obviously if you want to use react 
var ReactDom = require('react-dom'); // glue of react to dom
require('./index.css');

// components may have the following properties associated with it
// state
// lifecycle event - hooks that can tie into for events like showing something on screen or removing from the screen
// UI - the most common and specific

// component definition
class App extends React.Component {
    // UI to set a specific component calls the render() method
    render() {
        return (
            // the following code isn't a valid javascript but a JSX and will be transformed by babel
            <div>
                Hello React!
            </div>
        )
    }
}

// invoke a components
ReactDom.render(
    <App />, // what to render
    document.getElementById('app') // where the component is rendered
);