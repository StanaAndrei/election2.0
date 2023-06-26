const NodeCache = require( "node-cache" );
const cacheInst = new NodeCache( { stdTTL: 100 } );
module.exports = cacheInst;