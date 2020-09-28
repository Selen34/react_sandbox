
ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(SaveButton, null),
    React.createElement(Mouse, null),
    React.createElement(Content, null),
    React.createElement(Radio, { id: 1, label: "Card", order: 1, name: "card" })
), document.getElementById('content'));