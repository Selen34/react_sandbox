class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { counter: 0 };
    }
    handleClick(event) {
        console.log('THIS', this);
        this.setState({ counter: ++this.state.counter });
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(ClickCounterButton, { handler: this.handleClick }),
            React.createElement('br', null),
            React.createElement(Counter, { value: this.state.counter })
        );
    }
}

const ClickCounterButton = props => {
    return React.createElement(
        'button',
        {
            onClick: props.handler,
            className: 'btn btn-info' },
        'Don\'t touch me'
    );
};

class Counter extends React.Component {
    render() {
        return React.createElement(
            'span',
            null,
            'Clicked ',
            this.props.value,
            ' times.'
        );
    }
}

class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        let order = props.order;
        let i = 1;
        this.state = {
            outerStyle: this.getStyle(4, i),
            innerStyle: this.getStyle(1, i),
            selectedStyle: this.getStyle(2, i),
            taggerStyle: { top: order * 20, width: 25, height: 25 }
        };
    }

    getStyle(i, m) {
        let value = i * m;
        return {
            top: value,
            bottom: value,
            left: value,
            right: value
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize(event) {
        let w = 1 + Math.round(window.innerWidth / 300);
        this.setState({
            taggerStyle: { top: this.props.order * w * 10, width: w * 10, height: w * 10 },
            textStyle: { left: w * 13, fontSize: 7 * w }
        });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: "radio-tagger", style: this.state.taggerStyle },
                React.createElement('input', { type: "radio", name: this.props.name, id: this.props.id }),
                React.createElement(
                    'label',
                    { htmlFor: this.props.id },
                    React.createElement(
                        'div',
                        { className: "radio-text", style: this.state.textStyle },
                        this.props.label
                    ),
                    React.createElement(
                        'div',
                        { className: "radio-outer", style: this.state.outerStyle },
                        React.createElement(
                            'div',
                            { className: "radio-inner", style: this.state.innerStyle },
                            React.createElement('div', { className: "radio-selected", style: this.state.selectedStyle })
                        )
                    )
                )
            )
        );
    }
}