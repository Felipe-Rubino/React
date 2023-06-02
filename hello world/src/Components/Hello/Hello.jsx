import './styles.css'
import { estilo } from './styles'


function Hello(props){

    const condicional = true

    return (
    <div style={estilo}>
        { condicional && <h1> Condicional </h1>}
         <h1 className="titulo">{props.nomeProduto} - Valor: {props.valor}</h1>
    </div>
        
    
    )
}

export default Hello 