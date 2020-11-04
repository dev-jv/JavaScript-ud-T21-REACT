import React from 'react';

const Resultado = ({total, plazo, cantidad}) =>( 
    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>La cantidad solicitada es: $ {(cantidad).toFixed(2)}</p>
        <p>El plazo solicitado es: {plazo} meses</p>
        <p>Su pago mensual sería de: $ {(total/plazo).toFixed(2)}</p>
        <p>Total a pagar: <strong>$ {(total).toFixed(2)}</strong></p>

    </div>
);
 
export default Resultado;


