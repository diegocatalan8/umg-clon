import "./Header.css";

export default function Header() {
    return(
        <header className="App-header">
             <div className="row-one">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-book-bible"></i>
                    <i className="fa-solid fa-wave-square"></i>
                    <i className="fa-solid fa-headphones"></i>
                    <i className="fa-solid cite"> CITE</i>
                    <span className="barra"></span>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-google"></i>
                    <span className="mi">MI</span>
                    <span className="umg">UMG</span>

             </div>
            <nav className="navegacion">

                <div className="row-navegation-one" >
                           
                            <div className="col-1">
                                <a>FACULTADES</a>
                                <a className="izq">CENTROS UNIVERSITARIOS</a>
                            </div>
                            
                            <div className="col-2">
                                <a className="der">ADMISIONES</a>
                                <a>ACERCA DE LA UNIVERSIDAD</a>
                            </div>
                    
                </div>
               

                <div className="row-navegation-two">
                                
                                <div className="col-1">
                                    <a>GESTIONES</a>
                                    <a className="izq">HERRAMIENTAS Y RECURSOS</a>
                                </div>
                                
                                <div className="col-2">
                                        <a className="der">DIRECTORIO</a>
                                        <a>AYUDA</a>
                                </div>
                </div>

            </nav>
            <div className="logo">
                <a href="#">
              
                    <img src="https://umg.edu.gt/assets/umg.png" alt="logo"/>
                </a>
            </div>
            
        </header>

    );
}