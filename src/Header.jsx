import { Link , Outlet } from "react-router-dom"


function Header() {
    let image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAviO-V6Mn2Yxp2H-DkCGBH91TdmpMAW8T7w&usqp=CAU"
    return(

        <>
            <header className="header">
                <div className="header-logo">
                    <img src={image} alt=""/><span>FOODY</span>
                </div>
                <div className="links">
                    <ul>
                        <li>HOME</li>
                        <li><Link to = "/menu" >MENU</Link></li>
                        <li>OFFERS</li>
                        <li>CONTACT US</li>

                    </ul>
                    <div className="btn">
                    <button></button>
                    <button></button>

                    </div>
                    
                </div>
            </header>
        
        
        
        
        </>
    )
    
}
 
export default Header