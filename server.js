/* MDH Portal demo server */


const express = require( 'express' );
const app = express();
const PORT = 3001;

app.use( express.static( 'public' ) );

app.get('/', ( requset, response ) => {
    
    response.send( 'HI' );
    
} );


app.listen( PORT, () => { 

    console.log( 'Server on port:', PORT );
} );

