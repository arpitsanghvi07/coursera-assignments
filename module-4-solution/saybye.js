(function(window){

	var saybye={};
	 var wordtospeak="Good Bye";

	 saybye.say=function(name){

	 	console.log(wordtospeak + " " + name)
	 }

	 window.saybye=saybye;
})(window);