import './Maincontent.css'

function Maincontent () {
    return (

        <>

                <Firstimgdiv />

                <Secondinfo />

                <TableofContent />

                <Smartfeatures />   
                
                <Testimonials />

                <JioAds />
        
        </>

    );
}

function Firstimgdiv () {
    return (

        <>
        
            <div className='first-img-div'>

                <div className='content-container'>
                    <div className='content-head'>
                        <img src="https://pngimagesfree.com/wp-content/uploads/Jio-Logo-Vector-PNG_RED@.png" alt="" />
                        <h2>MyJio</h2>
                    </div>
                    <h3>Find all the awesomeness <br/> 
                        of Jio in one app</h3>
                    <p>Stream, shop, pay and do much more.</p>
                    <button id='content-container'>Download</button>
                </div>

            </div>
        
        </>

    );
}

function Secondinfo () {
    return (

        <>
        
            <div className='second-info'>

                <h3>The only app you need!</h3>
                <p>Manage your accounts, watch movies,<br />play the latest songs, back up data, play games and do much more</p>
                <button>Get Now</button>


            </div>
        
        </>

    );
}

function TableofContent () {
    return (

        <>


        <div className='table'>
        
            <table>

                <tr>
                    <td><img src="https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/myjio-tile2.png" alt="" /></td>
                    <td>
                        <div className="table-info">
                            <h2>MyJio - supercharged and better than ever!</h2>
                            <p>We've made MyJio easier and more fun! Our new design makes managing your mobile and Wi-Fi connections incredibly easy. Whether you're streaming content, making UPI payments, shopping, or handling your finances, everything is now more exciting and user-friendly.</p>
                            </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="table-info">
                            <h2>Recharging or paying bills now super easy</h2>
                            <p>Got multiple SIMs or Jio connections like AirFiber or JioFiber? No problem! You can handle them all with MyJio. From paying bills to recharging, enjoy instant transactions with zero extra fees. It's super simple, fast, and totally hassle-free!</p>
                            </div>
                    </td>
                    <td><img src="https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/myjioo-3.webp" alt="" /></td>
                </tr>

                <tr>
                    <td><img src="https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/myjio-6.webp" alt="" /></td>
                    <td>
                        <div className="table-info">
                            <h2>Managing Jio services is now a breeze</h2>
                            <p>Now easily stay on top of services related to your Jio connections. Whether managing a mobile, JioFiber, or AirFiber, just tap on the new Home Account tile and here you can view real-time usage, set up JioAutoPay, and customise your settings—all from a single dashboard.</p>
                            </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="table-info">
                            <h2>All your entertainment in one place</h2>
                            <p>Entertainment just got a major upgrade with our dedicated dashboard! Now you can dive into your favourite music, enjoy live TV, binge-watch popular shows, and play top games—all from one place. And while you are at it, exclusive discount vouchers and coupons level up the fun</p>
                            </div>
                    </td>
                    <td><img src="https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/myjioo-7.webp" alt="" /></td>
                </tr>

                <tr>
                    <td><img src="https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/myjioo-5.webp" alt="" /></td>
                    <td>
                        <div className="table-info">
                            <h2>Shopping means savings here</h2>
                            <p>Now shop to your heart's content and save like never before. With exclusive in-app discounts and deals, every purchase is a win. Whether you're shopping for groceries, household supplies, or dairy, you'll find everything you need at prices lower than MRP.</p>
                            </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="table-info">
                            <h2>Manage your money effortlessly</h2>
                            <p>Our Finance feature helps you manage your finances effortlessly. Whether making UPI payments, paying bills, or exploring instant rewards on transactions, it's secure and seamless. You can also open an account with Jio Payments Bank in minutes and track your expenses. How cool is that?</p>
                            </div>
                    </td>
                    <td><img src="https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/myjioo-2.webp" alt="" /></td>
                </tr>

                <tr>
                    <td><img src="https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/myjio-4.webp" alt="" /></td>
                    <td>
                        <div className="table-info">
                            <h2>We're always here to help you</h2>
                            <p>Need help? JioCare is here to assist you. Easily access support through the app to troubleshoot issues, manage your account, and get answers to all your questions. Our team is always ready to guide you with everything you need for a smooth Jio experience.</p>
                        </div>
                    </td>
                </tr>
                
            </table>
        
        </div>

        </>

    );
}

function Smartfeatures () {
    return (

        <>

            <div className="features-head">
                <h3>Smart app, smart feature</h3>
            </div>

            <div className="features-container">

                <div className="feature-card">

                    <img src="https://static.vecteezy.com/system/resources/previews/000/573/519/non_2x/sign-of-microphone-icon-vector.jpg" alt="" />
                    <h4>HelloJio</h4>
                    <p>Use voice search to get answers to queries.</p>

                </div>

                <div className="feature-card">

                    <img src="https://static.vecteezy.com/system/resources/previews/022/994/426/non_2x/voucher-icon-design-vector.jpg" alt="" />
                    <h4>Vouchers</h4>
                    <p>Recharge in a single click. Buy and transfer vouchers to family and friends.</p>

                </div>

                <div className="feature-card">

                    <img src="https://tse1.mm.bing.net/th?id=OIP.JPU2rkU_bQkEmR7UZiTyEQHaHa&pid=Api&P=0&h=180https://tse1.mm.bing.net/th?id=OIP.JPU2rkU_bQkEmR7UZiTyEQHaHa&pid=Api&P=0&h=180" alt="" />
                    <h4>Universal QR</h4>
                    <p>Link accounts, save contacts and do much more.</p>

                </div>

                <div className="feature-card">

                    <img src="https://cdn-icons-png.flaticon.com/512/60/60524.png" alt="" />
                    <h4>Usage details</h4>
                    <p>Check details of Voice, Data and SMS consumption.</p>

                </div>

                <div className="feature-card">

                    <img src="https://cdn2.iconfinder.com/data/icons/world-currency/512/05-512.png" alt="" />
                    <h4>JioAutoPay</h4>
                    <p>Setup JioAutoPay and never miss a recharge.</p>

                </div>

                <div className="feature-card">

                    <img src="https://thumbs.dreamstime.com/b/white-customer-support-customer-service-icon-logo-dark-background-customer-support-customer-service-icon-logo-dark-133611514.jpg" alt="" />
                    <h4>JioCare</h4>
                    <p>Get answers to your queries. Refer helpful tips, videos, FAQs.</p>

                </div>

                <div className="feature-card">

                    <img src="https://i.pinimg.com/736x/20/e4/84/20e48411c9fdfc088bb24fdb72c9ab85.jpg" alt="" />
                    <h4>Statement</h4>
                    <p>View and download account statement for last 180 days.</p>

                </div>

                <div className="feature-card">

                    <img src="https://static.vecteezy.com/system/resources/previews/000/449/433/original/location-vector-icon.jpg" alt="" />
                    <h4>Locate us</h4>
                    <p>Find the Jio store closest to you.</p>

                </div>

            </div>
        
        </>

    );
}

function Testimonials () {
    return (

        <>
        

                    <h3 id='Testimonials-title'>Testimonials</h3>

                <div className="Testimonials-container">


                        <div className="Testimonials-card">

                            <div className="Testimonials-cardbody">
                                <p>Since the day I got to know about MyJio, it is the most used app on my phone. I watch movies, listen to music, play games, read news, make payments, recharge Jio numbers in the family... on MyJio. It’s like a super app.</p>
                            </div>

                            <div className="Testimonials-carduser-info">

                                <div className='Testimonials-carduser-img'>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/Ameya.jpeg" alt="" />
                                </div>

                                <div className='Testimonials-carduser-name'>
                                    <p>Ameya</p>
                                </div>

                            </div>

                        </div>


                        <div className="Testimonials-card">

                            <div className="Testimonials-cardbody">
                                <p>I was under impression that MyJio is for some premium plan buyers until my friend told me that it is free for every Jio customer. It feels great to be eligible for so many digital experiences just by recharging my mobile number.</p>
                            </div>

                            <div className="Testimonials-carduser-info">

                                <div className='Testimonials-carduser-img'>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/sameer.jpeg" alt="" />
                                </div>

                                <div className='Testimonials-carduser-name'>
                                    <p>Sameer</p>
                                </div>

                            </div>

                        </div>


                        <div className="Testimonials-card">

                            <div className="Testimonials-cardbody">
                                <p>Trust me, I have deleted many other apps from my phone ever since I discovered MyJio. Why would you need to download ever since anything else when a multi-purpose app like MyJio, is on your phone. That saves my phone memory.</p>
                            </div>

                            <div className="Testimonials-carduser-info">

                                <div className='Testimonials-carduser-img'>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/Rajesh.jpeg" alt="" />
                                </div>

                                <div className='Testimonials-carduser-name'>
                                    <p>Rajesh</p>
                                </div>

                            </div>

                        </div>


                        <div className="Testimonials-card">

                            <div className="Testimonials-cardbody">
                                <p>My experience with MyJio has been awesome because awesome because not once or twice, I have won discount awesome because vouchers 3 times from JioEngage in the last one month - all the more reason to use MyJio.</p>
                            </div>

                            <div className="Testimonials-carduser-info">

                                <div className='Testimonials-carduser-img'>
                                <img src="https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/Rajshree.jpeg" alt="" />
                                </div>

                                <div className='Testimonials-carduser-name'>
                                    <p>Rajshree</p>
                                </div>

                            </div>

                        </div>


                </div>
        
        </>

    );
}

function JioAds () {
    return (

        <>
        
        <div className='table'>
        
        <table id='ads-table'>

            <tr>
                <td><img src="https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/mobile_phone_1-24-09.webp" alt="" /></td>
                <td>
                   <div className='content-container' id='last-content'>
                    <div className='content-head'>
                        <img src="https://pngimagesfree.com/wp-content/uploads/Jio-Logo-Vector-PNG_RED@.png" alt="" id='jioimg' />
                        <h2>MyJio</h2>
                    </div>
                    <h3>There’s more to Jio than just unlimited data and free voice calls</h3>
                    <p>Get rewarded for recharges, earn discount vouchers every day, stream movies and music for free, and much more.</p>
                    <button>Get Now</button>
                </div>
                </td>
            </tr>

        </table>

        </div>
        
        </>
        
    );
}

export default Maincontent;