import Card from "components/Card";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Fundo from 'assets/img/fundo.png'

function Home() {
    return (
        <>
            <Navbar />
            <div className="d-flex justify-content-around align-items-center" style={{ background:`url(${Fundo})`, height: "100rem"}}>
                <Card />
                <Card />
                <Card />
            </div>
            <div className="bg-secondary text-center d-flex flex-column align-items-center"  style={{ height:"50rem"}}>
                <h5>Quem somos</h5>
                <p className="ms-5 me-5">Somos uma empresa na área ambiental, com profissionais atuantes em todas as áreas ambientais, temos em nossa equipe: geólogos, engenheiros ambientais, topografo, Eng. Civil, Eng. Agrônomo, Biologos, Eng. Segurança do trabalho, Eng. florestal. </p>
            </div>
            <Footer />
        </>
    )
}

export default Home;