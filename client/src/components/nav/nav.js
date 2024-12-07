import './nav.css';
import { FaBasketballBall, FaBars } from 'react-icons/fa';

const Nav = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = 80; // Height of the nav bar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const goToSignUp = () => {
        window.location.href = '/register';
    };

    return (
        <div className="nav-container">
            <div className="nav-container-in">
                <div className="nav-container-in-one">
                    <FaBasketballBall />
                    <h1><span>SportSync</span></h1>
                </div>
                <div className="nav-container-in-two">
                    <div className="nav-container-in-two-in">
                        <div className="nav-container-in-two-in-one">
                            <h1 onClick={() => scrollToSection('features')}>Features</h1>
                            <h1 onClick={() => scrollToSection('stats')}>Statistics</h1>
                            <h1 onClick={() => scrollToSection('testimonials')}>Testimonials</h1>
                        </div>
                        <div className="nav-container-in-two-in-two">
                            <button onClick={goToSignUp}>
                                <h1>Get Started</h1>
                            </button>
                        </div>
                        <div className="mobile-menu-icon">
                            <FaBars />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;