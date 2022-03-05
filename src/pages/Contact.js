const Contact = () => {
    return (
        <div className="container">
        <div>
            <h1>Kontakta Mig</h1>
            <p>Skicka ett meddelande om du vill.</p>

            <form>      
            <input name="name" type="text" class="feedback-input" placeholder="Namn" />   
            <input name="email" type="text" class="feedback-input" placeholder="Email" />
            <textarea name="text" class="feedback-input" placeholder="Meddelande"></textarea>
            <input type="submit" value="Skicka"/>
          </form>
        </div>


        <footer>
        <div class="footer-social-links">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <a href="https://www.facebook.com/jonathan.johansson.7524" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a>
            <a href="https://twitter.com/SuspectVM" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a>
            <a href="#" title="LinkedIn+" target="_blank"><i class="fa fa-linkedin"></i></a>
            <a href="https://github.com/J-Johansson" title="Github" target="_blank"><i class="fa fa-github"></i></a>
        </div>
        <p id="copyright">
            Copyright &copy; 2022 by JJ.
        </p>
        </footer>
        </div>
    );
};

export default Contact