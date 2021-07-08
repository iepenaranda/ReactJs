const data = [
  {
    name: "Cristopher Nolan",
    alias: "Nolan",
    movies: [
      {
        name: "Memento",
        year: "2000",
        plot: "Un hombre con perdida de memoria a corto plazo intenta rastrear el asesino de su esposa para tomar venganza.",
        img: "https://pics.filmaffinity.com/memento-230609861-large.jpg",
        cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
      },
      {
        name: "Inception",
        year: "2010",
        plot: "Un hombre que roba secretos corporativos entrando en los sueños tiene la misión de implantar una idea.",
        img: "https://images-na.ssl-images-amazon.com/images/I/51zhmva2JHL.jpg",
        cast: [
          "Leonardo DiCaprio",
          "Ken Watanabe",
          "Joseph Gordeon-Levitt",
          "Elliot Page",
        ],
      },
      {
        name: "The Prestige",
        year: "2006",
        plot: "Después de un tragico accidente dos magos inician una competencia para crear la máxima ilusión mientrás sacrifican todo por lograrlo.",
        img: "https://pics.filmaffinity.com/the_prestige-464630296-large.jpg",
        cast: ["Hugh Jackman", "Christian Bale", "Scarlett Johansson"],
      },
    ],
  },
  {
    name: "David Fincher",
    alias: "Fincher",
    movies: [
      {
        name: "Fight Club",
        year: "1999",
        plot: "Un oficinista con insomnio y un extraño vendedor de jabón crean un club de pelea clandestino.",
        img: "https://images-na.ssl-images-amazon.com/images/I/713OBFnCXjL._AC_SL1414_.jpg",
        cast: ["Edward Norton", "Brad Pitt", "Helena Bonham Carter"],
      },
      {
        name: "Seven",
        year: "1995",
        plot: "Dos detectives estan en la búsqueda de un asesino serial que utiliza los 7 pecados capitales como su motivo.",
        img: "https://assets.hongkiat.com/uploads/horror-movie-posters/Se7en.jpg",
        cast: ["Brad Pitt", "Morgan Freeman", "Kevin Spacey"],
      },
      {
        name: "Gone Girl",
        year: "2014",
        plot: "Con su esposa desaparecida y bajo el foco de los medios de comunicación un hombre trata de probar su inocencia.",
        img: "https://revistacalibre38.files.wordpress.com/2014/10/perdida-cartel-pic33d.jpg",
        cast: ["Ben Affleck", "Rosamund Pike"],
      },
    ],
  },
];

function MyList(props) {
  return (
    <article>
      <div className="header">
        <div>
          <h1>{props.title}</h1>
        </div>
        <span></span>
        <div className="options">
          {props.directors.map((director, i) => (
            <Options key={i} {...director} />
          ))}
        </div>
      </div>

      <div className="spacer">
        {props.directors.map((director, i) => (
          <div key={i} className={"director" + (i + 1)}>
            <DrawMovies {...director} />
          </div>
        ))}
      </div>

      <div class="footer">
        <footer>&copy; Desarrollado por iepenaranda</footer>
      </div>
    </article>
  );
}

function Options(props) {
  return (
    <a href={"#" + props.alias}>
      <button className="btn btn-dark">{props.alias}</button>
    </a>
  );
}

function DrawMovies(props) {
  return (
    <div>
      <div className="container">
        <div className="movies row">
          <h2 id={props.alias}>{props.name}</h2>
          {props.movies.map((movie, i) => (
            <div key={i} className="col-sm-4">
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MovieCard(props) {
  return (
    <div className="movie card">
      <img src={props.img} />
      <div className="card-body">
        <div className="card-header">
          <h4>{props.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{props.year}</h6>
        </div>

        <p>{props.plot}</p>
        <h5>Cast: </h5>
        <ul>
          {props.cast.map((actor, j) => (
            <li key={j}>{actor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(
  <MyList directors={data} title="My Random Movie List V2.0" />,
  document.getElementById("root")
);
