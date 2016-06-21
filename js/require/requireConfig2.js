requirejs.config({
    baseUrl: './', // 'js' 라는 폴더를 기본 폴더로 설정한다. 
    paths:{ //뒤에 js 확장자는 생략한다.
        'moment': 'moment-with-locales.min',
        'jquery': 'jquery-1.11.3',
        'testRequire' : 'require/testRequire'
    },

/*
    shim:
    AMD 형식을 지원하지 않는 라이브러리의 경우 아래와 같이 shim을 사용해서 모듈로 불러올 수 있다.
    참고 : http://gregfranko.com/blog/require-dot-js-2-dot-0-shim-configuration/
*/
    shim:{
        'moment':{
            deps: ['jquery'], //angular가 로드되기 전에 jquery가 로드 되어야 한다.
            exports:'moment' //로드된 angular 라이브러리는 angular 라는 이름의 객체로 사용할 수 있게 해준다
        }
    }
});

requirejs(["moment", "jquery", "testRequire"], function(moment) {
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