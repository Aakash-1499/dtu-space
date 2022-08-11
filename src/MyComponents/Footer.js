import React from 'react'
import "../Styles/PreFooter.css"
import "../Styles/Footer.css"

const aakash = <img className='profile' src={require('../data/1.jpg')} alt="aakash_img" />
const arpit = <img className='profile' src={require('../data/2.jpg')} alt="arpit_img" />


const githubIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" /></svg>

const locationIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 16l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 4-9 3.96-1.584c.38.516.741 1.08 1.061 1.729l-3.523 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789.495-2.021.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.581-1.415c.319-.65.681-1.215 1.062-1.731l4.021 1.588 3.936 9z" /></svg>



const Footer = () => {
    return (
        <>
            

            <div className="PreFooter">
                <div> <p>LET'S STAY IN TOUCH</p><span>Get latest updates</span></div>

                <div>
                    <div>
                        <input type="email" name="email" placeholder="Enter Email Address" />
                        <button>›</button>
                    </div>
                    <span>Thanks. You're on our email list for latest updates.</span>
                </div>

                <div>
                    <p>FOLLOW US</p>
                    <span>We want to hear from you!</span>
                </div>

                <div>
                    <a href="https://linktr.ee/Aakash_1499" target="_blank" rel="noopener noreferrer">{aakash}</a>
                    <a href="https://linktr.ee/arpit_mantri" target="_blank" rel="noopener noreferrer">{arpit} </a>
                </div>
            </div>

            <div className="footer" >
                

                <div>
                    
                    <p>  <a href="https://github.com/Aakash-1499/dtu-space" target="_blank" rel="noopener noreferrer">{githubIcon} Want to contribute</a></p>
                    
                </div>

                <div>
                    <p> DTU Space</p>
                    
                </div>

                <div>
                    
                    <p><a href="https://www.google.com/maps/d/u/0/viewer?mid=1rQQ1fphljUW4dQvPCGxo6EU_vO4&hl=en&ll=28.749200562304065%2C77.11751649999998&z=16" target="_blank" rel="noopener noreferrer">{locationIcon}DTU (Formely DCE)</a>  </p>
                </div>



            </div>

        </>
    )
}

export default Footer
