let alertify = require('alertifyjs/build/alertify.min.js');
require('alertifyjs/build/css/alertify.min.css');
export default {
    success(message) {
        alertify.success(message);
    },
    error(message) {
        alertify.error(message);
    },
    warning(message) {
        alertify.warning(message);
    },
    info(message) {
        alertify.message(message);
    },
    confirm(text){
		return new Promise((resolve, reject) => {
            alertify.confirm('Are you sure?', text, function(){ 
                resolve();
            },function(){
                reject();
            });
		});
	}
}