var request= require('request');
var baseURL='https://genericwitticism.com:8000/api3/?session=ffc2b346-5a63-4c1b-a8f1-d952821c1bb1&';
module.exports={
	actions:{
		move:function  (characterID,direction,callback) {
			request(baseURL+'command=move&arg='+characterID+'&arg2='+direction, function (error, response, body) {
			  if (!error && response.statusCode == 200) {
			    callback(body);
			  }
			})
		}
		get:function  (characterID,callback) {
			request(baseURL+'command=get&arg='+characterID, function (error, response, body) {
			  if (!error && response.statusCode == 200) {
			    callback(body);
			  }
			})
		}
	},
	const:{
		MOVE_DIRECTION:{
			left:'left',
			right:'right',
			up:'up',
			down:'down',
			upleft:'upleft',
			upright:'upright',
			downleft:'downleft',
			downright:'downright'
		}
	}
}