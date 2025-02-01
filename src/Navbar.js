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
                        <div>
                            <span class="badge">New</span>  <br />
                            <a href="/">AirFiber</a></div>
                        <div><a href="/">Business</a></div>
                        <div> <a href="/">Devices</a></div>
                        <div><a href="/">Apps</a></div>
                        <div><a href="/">Support</a></div>
                    </div>

                </div>            

                <div className="search-login">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.KWSsBYMfXfzdlrDZlQPA-wAAAA&pid=Api&P=0&h=180" alt="" />
                    <img src="https://tse1.mm.bing.net/th?id=OIP.rcgY01LTCMJTv42lgWJpigHaHw&pid=Api&P=0&h=180" alt="" />
                </div>

            </div>

        </>

    );
}

export default Navbar;