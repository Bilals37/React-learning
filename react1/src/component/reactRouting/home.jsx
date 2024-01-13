import './home.css';

const Home = () => {
  return (
    <>
    <div  className='c'>
    <header className="header">
        <i className="icon fa fa-user" aria-hidden="true"></i> <span className="contactInfo">Mohit Sharma</span>
        <i className="icon fa fa-phone-square" aria-hidden="true"></i> <span className="contactInfo">8452 13 6954</span>
        <i className="icon fa fa-envelope" aria-hidden="true"></i><span className="contactInfo">example@yahoo.com</span>
      </header>


      

      <footer className="footer">
        <label htmlFor=""> <strong> Follow me </strong> </label>
        <a href="https://in.linkedin.com/">
          <i className="socialIcon fa fa-2x fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a href="https://www.google.com/">
          <i className="socialIcon fa fa-2x fa-google" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i className="socialIcon fa fa-2x fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/">
          <i className="socialIcon fa fa-2x fa-facebook-official" aria-hidden="true"></i>
        </a>
      </footer>
    </div>
      
    </>
  );
};

export default Home;
