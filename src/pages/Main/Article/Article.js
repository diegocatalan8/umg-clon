import "./Article.css" ;
import {  useState } from "react";

export default function Article() {
    
    const [article, setArticle] = useState("");
    const noticias = [
        {
            noticia:"Convocatoria a Posgrados de Medicina 2022-2023",
            img:"https://umg.edu.gt/docs/medicina/posgrados/convocatorias-medicina-UMG.jpg",
            txt: "La Facultad de Ciencias Médicas y de la Salud, en colaboración con el Ministerio de Salud Pública y Asistencia Social (MSPAS), Centro Médico Militar (CMM) y el Instituto Guatemalteco de Seguridad Social (IGGS) invita a participar en la convocatoria de Posgrados 2023."
        },
        {
            noticia:"Evaluación externa con fines de acreditación internacional para la Facultad de Ciencias Médicas y de la Salud",
            img:"https://umg.edu.gt/assets/img/evaluacion_facultad_medicina_umg.jpeg",
            txt:"Hoy 18 de mayo del 2022, se llegó al cierre del proceso de evaluación externa con fines de Acreditación, de la Facultad de Ciencias Médicas (sede central). Aparecen en la fotografía: Dr. Arturo García Rillo y Dra. Diana Rivera Grados, miembros del equipo asignado para visita, y autoridades de la Facultad."
        },
        {
            noticia:"Alumno Destacado, Dr. Mario González Bonilla",
            img:"https://umg.edu.gt/assets/img/dr-mario-bonilla.jpg",
            txt:"El Dr. Mario González Bonilla, originario del departamento de Huehuetenango, ingresó a la facultad de Odontología de la Universidad Mariano Gálvez campus central, en la tercera promoción en el año 1991."
        },
        {
            noticia:"Postúlate: Convocatoria a beca Fulbright LASPAU 2023",
            img:"https://umg.edu.gt/assets/becas/IG_Laspau_2022.png",
            txt:"La beca Fulbright Laspau ofrece a profesores universitarios guatemaltecos la oportunidad de obtener una maestría en una universidad de los Estados Unidos. Este es un programa altamente competitivo."
        }, 
        {
            noticia:"Acto inaugural de ciclo académico 2022",
            img:"https://umg.edu.gt/assets/img/56Anios.png",
            txt:"Acompáñanos en la transmisión de nuestro acto inaugural del ciclo académico 2022."
        },
        {
            noticia:"Bicentenario de Centroamérica",
            img:"https://umg.edu.gt/assets/img/bicentenario_portada.jpg",
            txt:"Actividades en conmemoración de la Independencia de Centroamérica."
        },
        {
            noticia:"Convenio Posgrados UMG-CMM 2020-2021",
            img:"https://umg.edu.gt/assets/medicina/noticias-convocatoria.png",
            txt:"Actividades en conmemoración de la Independencia de Centroamérica."
        },
        {
            noticia:"Posgrados Derecho UMG-OJ 2021",
            img:"https://umg.edu.gt/assets/derecho/maest-conv.png",
            txt:"Convenio Marco de Cooperación Académica ente El Organismo Judicial y Universidad Mariano Gálvez de Guatemala para la Implementación de y Desarrollo de Posgrados en Derecho marzo 2021."
        },
        {
            noticia:"Lanzamiento de Revista Doctor Mariano Gálvez",
            img:"https://umg.edu.gt/assets/Revista-Juridica-Dr-Mariano-Galvez.png",
            txt:"El pasado 21 de octubre se realizó la presentación oficial de la Revista que fue transmitida a través de Internet."
        }, 
        {
            noticia:"Recomendaciones del Servicio Sismológico de Guatemala de la UMG ante el COVID19",
            img:"https://umg.edu.gt/assets/sismogt-umg-covid19.jpeg",
            txt:"Consulta algunas recomendaciones por parte del Servicio Sismológico de Guatemala."
        }
    ];
    return (
        <div className="Article">

           <div className="container-left">
                
           <img src="https://umg.edu.gt/assets/ipad.png" alt="TABLET"/>
                <div className="container-txt">
                    {
                        noticias.map((noticia)=>{
                            return(
                            <p onClick={()=> {setArticle(noticia.noticia)
                                                console.log(article)}}>
                                {noticia.noticia}
                            </p>

                        )})
                    
                    }
                   
                </div>                
           </div>

           <div className="container-right">
                    <h2>NOTICIAS</h2>
                    <div className="container-articulo-noticias">
                        {
                          noticias.map((noticia)=>{
                            if(noticia.noticia == article){
                                console.log(noticia.noticia);
                                return(
                                    <div className="container-articulo-noticias-img">
                                        <p>{noticia.noticia}</p>
                                        <img src={noticia.img} alt="UMG"/>
                                        <p>{noticia.txt}</p>
                                    </div>
                                )
                            }
                          })
                        }

                    </div>
           
           </div>


           
        </div>
    );
}