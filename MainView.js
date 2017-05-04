var Observable = require("FuseJS/Observable");

var baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
		+ "?api_key=f6ec33a5029c47aaa8d9e6f8fd5cdfae";

var searchTerm = Observable("sweden");

var articles = Observable();

function showArticle(arg){
	var article = arg.data;
	router.push("articlePage", article);
}

function search() {
	fetch(baseUrl + "&q=" + searchTerm)
		.then(function(response){
			return response.json();
		}).then(function(result){
			articles.replaceAll(result.response.docs);
		});
}

search();

module.exports = {
	searchTerm,
	search,
	articles,
	showArticle
};

