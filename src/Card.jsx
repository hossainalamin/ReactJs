import react from 'react'
function Card(probs) {
    return (
        <>
            <div className="card">
                <img src={probs.imgsrc} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{probs.heading}</h5>
                        <p className="card-text">{probs.detail}</p>
                        <a href={probs.link} className="btn btn-primary">See more</a>
                    </div>
            </div>
        </>
    )
}
export default Card;