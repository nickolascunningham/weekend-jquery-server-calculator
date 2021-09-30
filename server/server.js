// requires
let express =  require( 'express' );
let app = express();

// uses
app.use( express.static( 'server/public' ) );

// globals
const port = 5000;

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on', port);
})

// routes
app.get( '/', (req, res)=>{
    console.log( 'get route hit' );
    res.send( 'Hello' );
})

