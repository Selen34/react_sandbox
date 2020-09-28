class Note extends React.Component {
    confirmLeave(e) {
        const confirmationMessage = 'Do you really want to close?';
        e.returnValue = confirmationMessage;
        console.log(confirmationMessage);
        return confirmationMessage;
    }

    componentDidMount() {
        console.log('Attaching confirmLeave event listener for berforeunload');
        window.addEventListener('beforeunload', this.confirmLeave);
    }

    componentWillUnmount() {
        console.log('Removing confirmLeave Event for beforeunload');
        window.removeEventListener('beforeunload', this.confirmLeave);
    }

    render() {
        console.log('Render');
        return <div>
            Here will be our input field for notes
            (parent will remove in {this.props.secondsLeft} seconds)
        </div>
    }
}
