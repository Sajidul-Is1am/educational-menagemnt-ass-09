import logo from '../../assets/logo/eduAct.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 grid md:grid-cols-4 grid-cols-2 justify-between  text-white bg-blue-950">
                <aside className='md:col-span-1 col-span-2'>
                    <img src={logo} alt="" />
                    <p>EduAct Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Development</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Internship</a>
                    <a className="link link-hover">Tranning</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Team</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;