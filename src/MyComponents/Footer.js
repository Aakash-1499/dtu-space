import React from 'react'
import "../Styles/PreFooter.css"
import "../Styles/Footer.css"

const gmailIcon = <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" /></svg>

const linkedinIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>

const youtubeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-35.20005 -41.33325 305.0671 247.9995"><path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85" /><path d="M93.333 117.558l61.334-34.89-61.334-34.893z" fill="#fff" /></svg>


const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg>

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
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer">{gmailIcon}</a>
                    <a href="https://www.linkedin.com/in/aakash-singh-052160ba/" target="_blank" rel="noopener noreferrer">{linkedinIcon} </a>
                    <a href="https://www.youtube.com/c/dtustudio" target="_blank" rel="noopener noreferrer">{youtubeIcon}</a>
                    <a href="https://www.facebook.com/groups/dceites/">{facebookIcon}</a>
                </div>
            </div>

            <div className="footer" >
                

                <div>
                    
                    <p>  <a href="http://github.com" target="_blank" rel="noopener noreferrer">{githubIcon}</a> Want to contribute</p>
                    
                </div>

                <div>
                    <p> DTU Space</p>
                    
                </div>

                <div>
                    
                    <p><a href="https://www.google.com/maps/d/u/0/viewer?mid=1rQQ1fphljUW4dQvPCGxo6EU_vO4&hl=en&ll=28.749200562304065%2C77.11751649999998&z=16" target="_blank" rel="noopener noreferrer">{locationIcon}</a>  DTU (Formely DCE)</p>
                </div>



            </div>

        </>
    )
}

export default Footer
