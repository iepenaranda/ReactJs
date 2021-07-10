const ingredientList = React.createClass({
  displayName: "lista de ingredientes",
  render() {
    return React.createElement(
      "ul",
      { className: "ingredientes" },
      React.createElement("li", { key: 1 }, "Pollo")
    );
  },
});
