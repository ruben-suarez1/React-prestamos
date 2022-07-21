const Resultado = ({total, plazo, cantidad}) => {

    let pagoMensual = (total / plazo).toFixed(2);

    return ( 
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: $ {cantidad}</p>  
            <p>El plazo es: {plazo} Meses</p>   
            <p>Pago mensual de: ${pagoMensual}</p>
            <p>Total a Pagar: $ {(total).toFixed(2)}</p>
        </div>
     );
}
 
export default Resultado;