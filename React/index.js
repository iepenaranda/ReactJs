const items = ["Huevos", "Pollo", "Agua", "Leche", "Salsa"];

let elements = React.createElement(
  "section",
  { id: "receta", key: "receta" },
  React.createElement("h1", null, "Esta es una receta"),

  React.createElement(
    "ul",
    { className: "Ingredientes" },
    items.map((ing, i) => React.createElement("li", { key: i }, ing))
  ),

  React.createElement(
    "section",
    { className: "instrucciones" },
    React.createElement("h2", null, "Instrucciones")
  ),

  React.createElement("p", null, "Hervir mucha agua hasta que hierva el agua.")
);
console.log(elements);
ReactDOM.render(elements, document.getElementById("root"));
