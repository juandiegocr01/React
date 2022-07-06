import { Fragment } from "react"; //si queremos varios elementos en un componente debemos traer esto y meter los elementos en un fragment
import PropTypes from 'prop-types';

const nuevoMensaje = {
    message: 'Hola Mundo',
    title: 'Fernando',
    nombre: 'Curso de React'
}

const getResult = () =>{
    return 4+4;
} //si esto fuera un async daría error pues devuelve un objeto y eso no está permitido en react



export const FirstApp = ({title, subtitle}) =>{
    return (
        // <> </> esto es sinonimo de fragmento
        // {} en el h1 o cualquier elemento HTML es para llamar un elemento js y que aparezca en el elemento
        // los props básicamente son objetos que destructuro y lo mando a un elemento de acuerdo a lo que necesite
        // (props) eso sirve para comunicarse entre componente padre y componente hijo (en este caso del main.jsx al firstapp.jsx)
        <Fragment> 
             
            <h1>{title}</h1>
            <p>{subtitle}</p>

        </Fragment>
    
    )
    
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
} //esto básicamente es para definir el tipo de un elemento y lo que queremos que él contenga

FirstApp.defaultProps ={
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo'
}