let h1 = React.createElement('h1', null, 'Hello world!')
class HelloWorld extends React.Component {
    render() {
        return React.createElement('h1', {id: this.props.id, title: this.props.title}, 'Hello ' + this.props.frameworkName + ' world!');
    }
}

ReactDOM.render(
    React.createElement(
        'div',
        {color: '#123456'},
        React.createElement(HelloWorld, {
            id: 'ember',
            frameworkName: 'Ember',
            title: 'A framework for creating ambitious web applications'
        }),
        React.createElement(HelloWorld, {
            id: 'backbone',
            frameworkName: 'Backbone',
            title: 'Backbone gives structure to web applications'
        }),
        React.createElement(HelloWorld, {
            id: 'angular',
            frameworkName: 'Angular',
            title: 'Superheroic JavaScript MVW Framework'
        }),
        React.DOM.h1({color: 'red'}, 'Hey')
    ),
    document.getElementById('content')
);
