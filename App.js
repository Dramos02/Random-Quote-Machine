function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState([]);
  const [background, setBackground] = React.useState(
    "url('./primarybackground.png')"
  );

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      let randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randomIndex]);
    }
    fetchData();
  }, []);

  const generateNewQuote = () => {
    const backgrounds = [
      "url('./pixelart1.png')",
      "url('./pixelart2.jpg')",
      "url('./pixelart3.png')",
      "url('./pixelart4.jpg')",
      "url('./pixelart5.jpg')",
      "url('./pixelart6.png')",
      "url('./pixelart7.png')",
      "url('./pixelart8.jpg')",
      "url('./pixelart9.jpg')",
      "url('./pixelart10.jpg')",
      "url('./pixelart11.jpg')",
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
    setRandomQuote(quotes[randomIndex]);
    setBackground(backgrounds[randBackgroundIndex]);
  };

  return (
    <div style={{ backgroundImage: background, height: "100vh" }}>
      <div className="container pt-5">
        <div className="">
          <div className="card shadow-sm p-3 mb-5 rounded">
            <div className="card-header font-weight-bold font-italic">
              Random Quote Generator
            </div>
            <div className="card-body">
              {randomQuote ? (
                <>
                  <h5 className="card-title font-weight-bold">
                    {randomQuote.author || "No author"}
                  </h5>
                  <p className="card-text font-italic">
                    &quot;{randomQuote.text}&quot;
                  </p>
                </>
              ) : (
                <h2>Loading</h2>
              )}

              <div className="row">
                <a
                  href={
                    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                    encodeURIComponent(
                      '"' + randomQuote.text + '"' + randomQuote.author
                    )
                  }
                  target="_blank"
                  className="btn btn-primary ml-3"
                >
                  <i className="fa fa-twitter"></i>
                </a>

                <a
                  href={
                    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                    encodeURIComponent(randomQuote.author) +
                    "&content=" +
                    encodeURIComponent(randomQuote.text) +
                    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
                  }
                  target="_blank"
                  className="btn btn-dark"
                >
                  <i className="fa fa-tumblr"></i>
                </a>
                <button
                  onClick={generateNewQuote}
                  className="btn btn-success ml-auto mr-3"
                >
                  Generate Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <p>
          Copyrights{" "}
          <i class="fa fa-copyright"></i> Dramos02{" "}
          <a
            href="https://github.com/Dramos02"
            target="_blank"
            id="profile-link"
            class="githubicon"
          >
            <i class="fa fa-github zoom"></i>
          </a>
        </p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
