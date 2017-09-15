var config = require('./config')
, mandrill = require('mandrill-api')
, api = new mandrill.Mandrill(config.api_key)

module.exports = function(){
	console.log("1")
	api.templates.list({}, function(result) {
		result.forEach(function(template){
			console.log(template.slug)	
		})
	})

    setInterval(function(){
      console.log('cron')
    },2*1000);
}