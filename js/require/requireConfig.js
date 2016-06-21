requirejs(["moment-with-locales.min", "require/testRequire"], function(moment) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    $(function(){
		for(var i=0;i<12;i++){
			console.log(moment().subtract(i, 'months').format('YYYY-MM-DD'));	
		}

		test();
		test2.testFunc();
	});
});