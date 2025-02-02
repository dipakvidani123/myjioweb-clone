import './Navbar.css'

function Navbar () {
    return (

        <>
        
            <div className="navbar">

                <div className="logo-nav">

                    <div className="jiologo">
                        <img src="https://logos-world.net/wp-content/uploads/2020/11/Jio-Logo.png" alt="" />
                    </div>

                    <div className="links-nav">
                        <div><a href="/">Mobile</a></div>
                        <div><a href="/">True 5G</a></div>
                        <div><a href="/">JioFiber</a> </div>
                        <div className='badge-div'>
                            <span class="badge">New</span>  <br />
                            <a href="/">AirFiber</a></div>
                        <div><a href="/">Business</a></div>
                        <div> <a href="/">Devices</a></div>
                        <div><a href="/">Apps</a></div>
                        <div><a href="/">Support</a></div>
                    </div>

                </div>            

                <div className="search-login">
                    <img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png" alt="" />
                    <img src="https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg" alt="" />
                </div>

            </div>

        </>

    );
}

export default Navbar;