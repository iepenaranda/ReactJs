const directors = ["C. Nolan", "D. Fincher", "D. Villeneuve"];

const nolan = [
  {
    name: "Memento",
    plot: "Un hombre con perdida de memoria a corto plazo intenta rastrear el asesino de su esposa.",
    img: "https://pics.filmaffinity.com/memento-230609861-large.jpg",
  },
  {
    name: "Inception",
    plot: "Un hombre que roba secretos corporativos mediante una tecnología de comunicación de sueños tiene la misión de implantar una idea.",
    img: "https://images-na.ssl-images-amazon.com/images/I/51zhmva2JHL.jpg",
  },
  {
    name: "The Prestige",
    plot: "Después de un tragico accidente dos magos inician una competencia para crear la máxima ilusión mientrás sacrifican todo por lograrlo.",
    img: "https://pics.filmaffinity.com/the_prestige-464630296-large.jpg",
  },
];

const fincher = [
  {
    name: "Fight Club",
    plot: "Un oficinista con insomnio y un extraño vendedor de jabón crean un club de pelea clandestino.",
    img: "https://images-na.ssl-images-amazon.com/images/I/713OBFnCXjL._AC_SL1414_.jpg",
  },
  {
    name: "Seven",
    plot: "Dos detectives estan a en la usqueda de un asesino serial que utiliza los 7 pecados capitales como su motivo.",
    img: "https://assets.hongkiat.com/uploads/horror-movie-posters/Se7en.jpg",
  },
  {
    name: "Gone Girl",
    plot: "Con su esposa desaparecida y bajo el reflector de los medios de comunicación un hombre trata de probar su inocencia.",
    img: "https://revistacalibre38.files.wordpress.com/2014/10/perdida-cartel-pic33d.jpg",
  },
];

let elements = React.createElement(
  "section",
  { id: "movies" },
  React.createElement(
    "div",
    { className: "header" },
    React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        { className: "title" },
        "Just a random movie list"
      )
    ),

    React.createElement("span", null,),

    React.createElement(
      "div",
      { className: "options" },
      React.createElement("a", { href: "#Nolan" },
        React.createElement("button", {className:"btn btn-dark"}, "C. Nolan")),
      React.createElement("a", { href: "#Fincher" },
        React.createElement("button", {className:"btn btn-dark"}, "D. Fincher")),
      React.createElement("a", { href: "#" }, 
        React.createElement("button", {className:"btn btn-dark"}, "D. Villeneuve"))
    )
  ),

  React.createElement(
    "div",
    { className: "director1" },
    React.createElement(
      "div",
      null,
      React.createElement("h2", { id: "Nolan" }, "Christopher Nolan")
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "movies" },
        React.createElement(
          "div",
          { className: "movie card", style: { width: "18rem" } },
          React.createElement("img", {
            className: "card-img-top",
            src: nolan[0].img,
          }),
          React.createElement("h3", null, nolan[0].name),
          React.createElement("p", { className: "card-text" }, nolan[0].plot)
        ),
        React.createElement(
          "div",
          { className: "movie card", style: { width: "18rem" } },
          React.createElement("img", {
            className: "card-img-top",
            src: nolan[1].img,
          }),
          React.createElement("h3", null, nolan[1].name),
          React.createElement("p", { className: "card-text" }, nolan[1].plot)
        ),
        React.createElement(
          "div",
          { className: "movie card", style: { width: "18rem" } },
          React.createElement("img", {
            className: "card-img-top",
            src: nolan[2].img,
          }),
          React.createElement("h3", null, nolan[2].name),
          React.createElement("p", { className: "card-text" }, nolan[2].plot)
        )
      )
    )
  ),

  React.createElement(
    "div",
    { className: "director2" },
    React.createElement(
      "div",
      null,
      React.createElement("h2", { id: "Fincher" }, "David Fincher")
    ),

    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "movies" },
        React.createElement(
          "div",
          { className: "movie card", style: { width: "18rem" } },
          React.createElement("img", {
            className: "card-img-top",
            src: fincher[0].img,
          }),
          React.createElement("h3", null, fincher[0].name),
          React.createElement("p", { className: "card-text" }, fincher[0].plot)
        ),
        React.createElement(
          "div",
          { className: "movie card", style: { width: "18rem" } },
          React.createElement("img", {
            className: "card-img-top",
            src: fincher[1].img,
          }),
          React.createElement("h3", null, fincher[1].name),
          React.createElement("p", { className: "card-text" }, fincher[1].plot)
        ),
        React.createElement(
          "div",
          { className: "movie card", style: { width: "18rem" } },
          React.createElement("img", {
            className: "card-img-top",
            src: fincher[2].img,
          }),
          React.createElement("h3", null, fincher[2].name),
          React.createElement("p", { className: "card-text" }, fincher[2].plot)
        )
      )
    )
  ),

  React.createElement("div", null, 
    React.createElement("footer", null , "Desarrollado por iepenaranda")
  )
);

ReactDOM.render(elements, document.getElementById("root"));
