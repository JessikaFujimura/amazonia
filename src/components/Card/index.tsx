import Icone from "assets/img/i1.png"
function Card(params: any) {
    return (
        <div className="card border-success" style={{ width: '15rem' }} >
            <img className="card-img-top" width="98" height="98" src={Icone} alt="" />
            <div className ="card-body text-center color-primary">
            <h5 className ="card-title text-success">Consultoria Ambiental</h5>
            </div>
        </div>
    )
}

export default Card;