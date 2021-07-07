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
        {className: "movies"},
        nolan.map((mov, i) => 
          React.createElement("div", {key:"card1"+i, className: "movie card", style: { width: "18rem" }},
          React.createElement("img", {key:"img1"+i, className: "card-img-top", src: mov.img}),
          React.createElement("h3", {key: "name1"+i}, mov.name),
          React.createElement("p", {key:"plot1"+i}, mov.plot)
          )
        )
      )
    ),

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
        {className: "movies"},
        fincher.map((mov, i) => 
          React.createElement("div", {key:"card1"+i, className: "movie card", style: { width: "18rem" }},
          React.createElement("img", {key:"img1"+i, className: "card-img-top", src: mov.img}),
          React.createElement("h3", {key: "name1"+i}, mov.name),
          React.createElement("p", {key:"plot1"+i}, mov.plot)
          )
        )
      )
    ),
  ),

  React.createElement("div", null, 
    React.createElement("footer", null , "Desarrollado por iepenaranda")
  )
);

ReactDOM.render(elements, document.getElementById("root"));
