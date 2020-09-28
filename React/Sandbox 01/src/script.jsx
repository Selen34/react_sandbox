class HelloWorld extends React.Component {
    render() {
        return (
            <h1 title={this.props.title} id={this.props.id}>
                Hello {this.props.frameworkName} world!!
            </h1>
        )
    }
}

ReactDOM.render(
    <div color='red' className={'hidden'}>
        <HelloWorld
            id='ember'
            frameworkName='Ember'
            title='A framework for creating ambitious web applications'
        />
        <HelloWorld
            id='backbone'
            frameworkName='Backbone'
            title='Backbone gives structure to web applications'
        />
        <HelloWorld
            id='angular'
            frameworkName='Angular'
            title='Superheroic JavaScript MVW Framework'
        />
        <span style={{
            borderColor: 'red',
            borderWidth: 1,
            borderStyle: 'solid'
        }}>Hey</span>
        {/*<input value="&copy;&mdash;&ldquo;"/>*/}
        <div>
            <input type={'radio'} name={'name'} id={'123'}>
            </input>
            <label htmlFor={'123'}>{'label'} here</label>
        </div>
    </div>,
    document.getElementById('content')
);
