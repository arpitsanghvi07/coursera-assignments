(function(window){

	var sayhello={};
	 var wordtospeak="Hello";

	 sayhello.say=function(name){

	 	console.log(wordtospeak + " " + name)
	 }

	 window.sayhello=sayhello;
})(window);