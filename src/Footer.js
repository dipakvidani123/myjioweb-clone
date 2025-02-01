import './Maincontent.css'

function Footer () {
    return (

        <>
        
            <div className='footer'>

                <div className='footer-links'>

                    <div className="footer-individual">
                        <h3>Our offerings</h3>
                        <p>Prepaid</p>
                        <p>Postpaid</p>
                        <p>Services</p>
                        <p>Devices</p>
                    </div>

                    <div className="footer-individual">
                        <h3>Support</h3>
                        <p>Relocate JioFiber</p>
                        <p>My account</p>
                        <p>FAQ</p>
                        <p>Locate Us</p>
                        <p>Claim Refund</p>
                        <p>Feedback</p>
                        <p>Contact Us</p>
                    </div>

                    <div className="footer-individual">
                        <h3>Our Company</h3>
                        <p>About us</p>
                        <p>Relience Industries</p>
                        <p>Reliance Fondation</p>
                        <p>JioLife</p>
                        <p>Careers</p>
                        <p>Investor Relation</p>
                    </div>

                    <div className="footer-individual">
                        <h3>Useful Links</h3>
                        <p>Get JioFiber</p>
                        <p>JioAutoPay</p>
                        <p>SiteMap</p>
                        <p>Jio Customer <br />Associate</p>
                    </div>

                </div>

                <div className="playstore-links">
                        
                        <div className='connectwithus'>
                            <h3>Connect with Us</h3>
                            <div className='social-icon'>
                                <img src="https://i.pinimg.com/originals/30/44/2a/30442a06ccf25e328e68a78c606b74f0.png" alt="" />
                                <img src="https://www.pngmart.com/files/13/Instagram-Logo-PNG-Image-File.png" alt="" />
                                <img src="https://www.freeiconspng.com/uploads/facebook-logo-png-white-image-galleries--imagekbm-25.png" alt="" />
                                <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt="" />
                            </div>
                        </div>

                        <div className="play-link">

                            <h3>Download MyJio</h3>
                            <div className="play-link-img">
                                <img src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/G-Play.svg" alt="" />   
                                <img src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/AppStore.svg" alt="" />
                            </div>

                        </div>

                    </div>

            </div>
        
        </>

    );
}


export default Footer;