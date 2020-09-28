class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'h1',
            { title: this.props.title, id: this.props.id },
            'Hello ',
            this.props.frameworkName,
            ' world!!'
        );
    }
}

ReactDOM.render(React.createElement(
    'div',
    { color: 'red', className: 'hidden' },
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
    React.createElement(
        'span',
        { style: {
                borderColor: 'red',
                borderWidth: 1,
                borderStyle: 'solid'
            } },
        'Hey'
    ),
    React.createElement(
        'div',
        null,
        React.createElement('input', { type: 'radio', name: 'name', id: '123' }),
        React.createElement(
            'label',
            { htmlFor: '123' },
            'label',
            ' here'
        )
    )
), document.getElementById('content'));
