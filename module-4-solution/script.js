( function(){


var names=["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","jim"];

for(var i=0;i< names.length;i++){


var first=names[i].charAt(0).toLowerCase();

if(first=='j'){

	saybye.say(names[i]);

}else
{
	sayhello.say(names[i]);
	
}

}

}) ();
