module.exports = function(app, axios, cheerio){
    app.get("/scrape", function(req, res){
        axios.get("https://www.espn.com/soccer/").then(function(response){
            var $ = cheerio.load(response.data);
            console.log($)
        })
    })
}