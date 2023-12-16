function Cards(props) {
    const { image,title,para } = props

    return(
        <>
        <div className="card">
           <div className="cont">
                <img src={image} alt=""/>
           </div>
           <div className="title">
                <h2>{title}</h2>
                <p>{para}</p>
           </div>
        </div>
        
        
        
        </>
    )
    
}

export default Cards