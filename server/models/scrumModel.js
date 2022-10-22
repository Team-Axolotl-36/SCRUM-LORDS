// const { call } = require('file-loader');
const {Pool} = require('pg');
// const { param } = require('../server');
// const pool = new Pool();
var pg_URL = 'postgres://bnfgcmtz:s4HK_OV61y2dZS7JxRbfKhuy6ypQPzP5@rajje.db.elephantsql.com/bnfgcmtz';
//or native libpq bindings
//var pg = require('pg').native

const pool = new Pool({
  connectionString: pg_URL
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query',text);
    return pool.query(text,params,callback);
  }
};