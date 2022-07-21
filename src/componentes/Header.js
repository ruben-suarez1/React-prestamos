import { Fragment } from 'react';
const Header = ({titulo, subtitulo}) => {
    return ( 
    <Fragment>
        <h1>{ titulo }<span>{ subtitulo }</span></h1>
    </Fragment> 
    );
}
 
export default Header;