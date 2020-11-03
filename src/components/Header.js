// ------------------------------------ <> 1

// import React, { Fragment } from 'react';

// function Header(props) {

//     console.log(props);

//     return(
//         <Fragment>
//             <h1>{ props.titulo }</h1>
//             <p>{ props.descripcion }</p>
//         </Fragment>
//     )
// }

// export default Header;

// ------------------------------------ <> 2
 
import React, { Fragment } from 'react';

function Header( {titulo}) { //Destructuring!

    return(
        <Fragment>
            <h1>{ titulo }</h1>
        </Fragment>
    )
}

export default Header;