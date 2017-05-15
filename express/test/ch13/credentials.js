module.exports = {
    cookieSecret : function(){
        var cookieSecrte = 'pangbo';
        return  cookieSecrte
    },
    mongo: {
        development: {
            connectionString: 'your_dev_connection_string'
        },
        production: {
            connectionString: 'your_production_connection_string'
        },
    }
};