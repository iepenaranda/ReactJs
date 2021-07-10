class ListaIngredientes extends React.Component {
  render() {
    return React.createElement(
      "ul",
      { className: "ingredientes" },
      React.createElement("li", { key: 1 }, "Pollo")
    );
  }
}
