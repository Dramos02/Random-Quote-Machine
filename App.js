function App(){
    
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState([]);
    const [color, setColor] = React.useState("#e63900")
    const [background, setBackground] = React.useState("url('./primarybackground.png')")


    React.useEffect(() => {
        async function fetchData(){
            /* use await fetch to take some time to get/render quotes*/
            const response = await fetch("https://type.fit/api/quotes") 
            const data = await response.json();

            setQuotes(data);
            /*initialize index for array because of random quotes is inside to an array*/
            let randomIndex = Math.floor(Math.random() * data.length); 
            setRandomQuote(data[randomIndex])
        }
        fetchData();
    },[])
        /*This will do function of the button to generate random quote*/
    const generateNewQuote = () => {
        /*This will do function every click of the button to generate random color*/
        
            const colors = [
                "#ace600",
                "#39e600",
                "#00e6ac",
                "#00e6e6",
                "#9f80ff",
                "#00ace6",
                "#0000e6",
                "#3900e",
                "#7300e6",
                "#ac00e6",
                "#e600ac",
                "#e60039",

            ];
            /*This will do function every click of the button to generate random background*/
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
            ]
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        let randBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
        setRandomQuote(quotes[randomIndex])
        setColor(colors[randColorIndex])
        setBackground(backgrounds[randBackgroundIndex])
        
    }
    return (
<div style={{backgroundImage: background, height: "100vh"}}>
<div className="container pt-5">
    <div className="">
        <div className="card shadow-sm p-3 mb-5 rounded">
            <div className="card-header font-weight-bold font-italic">Random Quote Generator</div>
            <div className="card-body">
                {randomQuote ? (
                    /*this will be fragment that return one block*/
                   <>
                   <h5 className="card-title font-weight-bold">{randomQuote.author || "No author"}</h5>
                   <p className="card-text font-italic">&quot;{randomQuote.text}&quot;</p>
                   </>
                   /*this will navigate the author of the quotes and if there is not author it will return "No author"*/
                ):(
                    <h2>Loading</h2>
                )}
               
                <div className="row">
                    
                    <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + randomQuote.text + '"' + randomQuote.author)}
                    /*It will generate/render the quotes and creditings the author on to your twiiter account*/
                    target="_blank" className="btn btn-primary ml-3">
                        <i className="fa fa-twitter"></i></a>

                    <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + encodeURIComponent(randomQuote.author) + "&content=" + encodeURIComponent(randomQuote.text) +
                    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
                    } target="_blank" className="btn btn-dark ">
                        <i className="fa fa-tumblr"></i></a>
                    <button onClick={generateNewQuote} className="btn btn-success ml-auto mr-3">Generate Quote</button>
                    
                </div>
            </div>
        </div>
    </div>
 
</div>
                    <footer>
                    <p>Copyrights <i class="fa fa-copyright"></i> Dramos02 <a href="https://github.com/Dramos02" target="_blank" id="profile-link" class="githubicon">
                     <i class="fa fa-github zoom"></i></a></p>
                    </footer>
</div>

   /* This is testing to check the data from website/api for random qoutes
     {qoutes.map(quote => (
        /*to get the text data from array not with the author
        <div>{qoute.text}
            {quote.author}
        </div>
    
     ))}*/
    );
}

ReactDOM.render(<App/>, document.getElementById('app')); 
