require.config({
	baseUrl:"/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"tab": "module/tab",
		"toast": "module/toast",
		"template": "libs/template-web",
		"url": "module/url",
		"header": "module/header",
		"carousel":"module/carousel",
		"addcourse":"module/addcourse",
		"courseinf":"module/courseinf",
		"reguser":"module/reguser",
		"loguser":"module/loguser",
		"addshopcar":"module/addshopcar",
		"getwarp":"module/getwarp"
	},
	shim: {
		toast:{
			deps:["jquery"]
		},
		header:{
			deps:["jquery"]
		},
		tab:{
			deps:["jquery"]
		},
		carousel:{
			deps:["jquery"]
		},
		addcourse:{
			deps:["jquery"]
		},
		courseinf:{
			deps:["jquery"]
		},
		reguser:{
			deps:["jquery"]
		},
		loguser:{
			deps:["jquery"]
		},
		addshopcar:{
			deps:["jquery"]
		},
		getwarp:{
			deps:["jquery"]
		}
	}
})