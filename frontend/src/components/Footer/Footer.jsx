import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section about">
                    <h2>About Hospital</h2>
                    <p>
                        Our hospital provides world-class medical care with advanced facilities
                        and experienced doctors. We are dedicated to serving our community with
                        compassion and excellence.
                    </p>
                </div>

                <div className="footer-section map">
                    <h2>Location</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609958436!2d72.74110192892022!3d19.082197839345654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63a7f93e3e3%3A0xdeadbeef12345678!2sCity%20Hospital!5e0!3m2!1sen!2sin!4v1680451214562!5m2!1sen!2sin"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="footer-section contact">
                    <h2>Contact</h2>
                    <ul>
                       
                        <li> <i class="fa-solid fa-location-dot"></i> 123 Health Street, Mumbai, India</li>
                        <li><i className="fa fa-phone"></i> +91 9876543210</li>
                        <li><i className="fa fa-envelope"></i> info@cityhospital.com</li>
                    </ul>
                </div>

                {/* <div className="footer-section team">
                    <h2>Development Team</h2>
                    <ul>
                        <li>Chandan Sharma  – Frontend Developer</li>
                        <li>Koushik Jaiswal – UI/UX Designer</li>
                        <li>Dhananjay Kadam – Backend Developer</li>
                    </ul>
                </div> */}
            </div>

            <div className="footer-bottom">
                <p>© 2025 City Hospital. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
