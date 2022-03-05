import Taxi from "../images/Taxi.png"

const About = () => {
    return (
        <div className="container">
        <div>
            <h1>Om Mig</h1>
            <article>
            <header class="second-head">
                <h2>Kort presentation om mig.</h2>
                <img class="taxi" src={Taxi} alt="Susge Picture" height="150" width="150" />
            </header>
           
            <p>
                Mitt namn är Jonathan Johansson, 27 år gammal kommer ursprungligen från Bjästa men nu bor jag i Domsjö. 
                Jag studerade El och Energi med inriktning Dator och Kommunikation på Parkskolan. 
                Sedan jag tog studenten har jag arbetat som IT-konsult, Lagerarbete, Chaufför för PostNord och
                senaste 5 åren har jag kört taxi. 
            </p>
            <br />
            <p> 
                Men till slut så kände jag att jag behövde göra något nytt och då hittade jag utbildningen
                Systemutvecklare med AI-Kompetens och det lät ju helt perfekt! <br />
                Mitt slutmål är väl att bli klar med utbildningen och hitta ett trevligt jobb. 
            </p>
            <br />

        </article>
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

export default About