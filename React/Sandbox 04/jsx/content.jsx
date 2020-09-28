class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {counter: 0}
    }
    handleClick(event) {
        console.log('THIS', this);
        this.setState({counter: ++this.state.counter})
    }
    render() {
        return (
            <div>
                <ClickCounterButton handler={this.handleClick}/>
                <br/>
                <Counter value={this.state.counter}/>
            </div>
        )
    }
}

const ClickCounterButton = (props) => {
    return <button
        onClick={props.handler}
        className="btn btn-info">
        Don't touch me
    </button>
}

class Counter extends React.Component {
    render() {
        return <span>Clicked {this.props.value} times.</span>
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
            taggerStyle: {top: order*20, width: 25, height: 25}
        }
    }

    getStyle(i, m) {
        let value = i*m;
        return {
            top: value,
            bottom: value,
            left: value,
            right: value
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize(event) {
        let w = 1 + Math.round(window.innerWidth / 300);
        this.setState({
            taggerStyle: {top: this.props.order*w*10, width: w*10, height: w*10},
            textStyle: {left: w*13, fontSize: 7*w}
        })
    }

    render() {
        return <div>
            <div className={"radio-tagger"} style={this.state.taggerStyle}>
                <input type={"radio"} name={this.props.name} id={this.props.id}>
                </input>
                <label htmlFor={this.props.id}>
                    <div className={"radio-text"} style={this.state.textStyle}>
                        {this.props.label}
                    </div>
                    <div className={"radio-outer"} style={this.state.outerStyle}>
                        <div className={"radio-inner"} style={this.state.innerStyle}>
                            <div className={"radio-selected"} style={this.state.selectedStyle}>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    }
}