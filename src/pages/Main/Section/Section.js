import "./Section.css";

export default function Section() {
    const facultades = [
        {
            img: "https://umg.edu.gt/assets/arquitectura2.png",
            name: "ARQUITECTURA"
        },

        {
            img:"https://umg.edu.gt/assets/administracion2.png",
            name: "CIENCIAS DE LA ADMINISTRACION"
        },
        {
            img:"https://umg.edu.gt/assets/comunicaciones2.png",
            name: "CIENCIAS DE LA COMUNICACION"
        },
        {
            img:"https://umg.edu.gt/assets/economicas22.png",
            name: "CIENCIAS ECONOMICAS"
        },
        {
            img:"https://umg.edu.gt/assets/derecho2.png",
            name:"CIENCIAS JURIDICAS Y SOCIALES"
        },
        {
            img:"https://umg.edu.gt/assets/medicina2.png",
            name:"CIENCIAS MEDICAS Y DE LA SALUD"
        },
        {
            img:"https://umg.edu.gt/assets/quimica2.png",
            name:"CIENCIAS QUIMICAS Y BIOLOGICAS"
        },
        {
            img:"https://umg.edu.gt/assets/humanidades2.png",
            name:"HUMANIDADES"
        },
        {
            img:"https://umg.edu.gt/assets/ingenieria2.png",
            name:"INGENIERIA, MATEMATICA Y CIENCIAS FISICAS"
        },
        {
            img:"https://umg.edu.gt/assets/sistemas2.png",
            name:"INGENIERIA EN SISTEMAS"
        },
        {
            img:"https://umg.edu.gt/assets/odontologia2.png",
            name:"ODONTOLOGIA"
        },
        {
            img:"https://umg.edu.gt/assets/psicologia2.png",
            name:"PSICOLOGIA"
        },
        {
            img:"https://umg.edu.gt/assets/teologia2.png",
            name:"TEOLOGIA"
        }
    ];
    return (
        <div className="App-section">

            <picture className="fondo-umg">
                <img src="https://umg.edu.gt/assets/top.jpg" alt="fondo"/>
            </picture>
            <cite className="cita">
                “Pero, si vivimos en la luz, así como él está en la luz, tenemos comunión<br/>
                 unos con otros, y la sangre de su Hijo Jesucristo nos limpia de todo<br/>
                 pecado.” 1 Juan 1:7 | NVI  
                 <small>      Powered by  BibleGateway.com</small>
            </cite>
            <img src="https://umg.edu.gt/assets/virtual.png" alt="virtual" id="virtual"/>
            <img src="https://umg.edu.gt/assets/jn832.png" alt="Cita biblica" id="cita-biblica"/>


            <div className="panel">
                <div className="col"> 
                    <i class="fa-solid fa-display computers" ></i> 
                    <p>ADMISIONES</p>
                </div>
                <div className="col" id="centro">
                    <i class="fa-solid fa-display computers"></i> 
                    <p>PAGAR LA <br/>UNIVERSIDAD</p>
                </div>
                <div className="col">
                    <i class="fa-solid fa-display computers"></i> 
                    <p>GESTIONES</p>
                </div>
            
            </div>


           <section className="section-container">


                <div className="panel-section">
                <i class="fa-solid fa-laptop img-icon"></i>
                    <h2 className="subtitle">MI UMG</h2>
                    
                    <ul className="list">
                        <li><span className="text">Información General</span></li>
                    </ul>
                </div>


                <div className="panel-section">
                     <i class="fa-solid fa-laptop img-icon"></i>
                    <h2 className="subtitle">CANVAS</h2>
                    <ul className="list">
                        <li><span className="text">Plataforma Canvas</span></li>
                    </ul>
                </div>


                <div className="panel-section">
                    <i class="fa-solid fa-envelope-open img-icon"></i>
                    <h2 className="subtitle sub-center">EMAIL Y CALENDARIO</h2>
                    <ul className="list">
                        <li><span className="text">Google apps para UMG</span></li>
                        <li><span className="text">Office 365</span></li>
                    </ul>
                </div>


                <div className="panel-section">
                <i class="fa-solid fa-video img-icon"></i>
                    <h2 className="subtitle sub-four">MICROSOFT TEAMS</h2>
                    <ul className="list">
                        <li><span className="text">Microsoft Teams</span></li>
                    </ul>
                </div>


                <div className="panel-section">
                     <i class="fa-solid fa-video img-icon"></i>
                    <h2 className="subtitle sub-five">ZOOM</h2>
                    <ul className="list">
                        <li><span className="text">ZOOM</span></li>
                    </ul>
                </div>

                
           </section>

           <picture className="container-img">
                <img src="https://umg.edu.gt/assets/cu.png" alt="fondo"/>
                <div>
                    <a><img src="https://umg.edu.gt/assets/UMG-Enlace-Centros-Univesitarios.png" alt="imagen small"/></a>
                </div>
           </picture>

           <div className="container-area">
                <h2>
                Facultades
                </h2>
                <div className="area">
                    {facultades.map(facultad => {
                        return (
                            <div className="enlace" >
                                <img src={facultad.img} alt="imagen" />
                                <label>{facultad.name}</label>
                            </div>
                        )
                    }

                )}
                </div>
           </div>

        </div>
    );
}