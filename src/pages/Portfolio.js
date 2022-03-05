import scripts from './scripts'
import susge from '../images/susge.png';
const Portfolio = () => {
    return (
        <div className="container">
        <div>
            <h1>Portfolio</h1>
            <p>Projekt nedan.</p>
            <p>Ladda om sidan genom att trycka F5 innan du klickar på någon av dem 2 knapparna :) </p>

            <div class="wrap">
                <h3>Repo 1</h3>
                <a href="#modal-one" class="btn btn-big">Klicka Här</a>
                <hr />
            </div>

            <div class="modal" id="modal-one" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-header">
                    <h2>Namn:<p className="first-project-name"></p></h2>
                    
                </div>
                <div class="modal-body">
                    <p>Beskrivning:</p>
                    <p className="first-project-desc"> </p>

                </div>
                <div class="modal-footer">
                    <a href="#" class="btn">Stäng</a>
                </div>
            </div>
            </div>
        </div>

        <div class="wrap">
        <h3>Repo 2</h3>

        <a href="#modal-two" class="btn btn-big">Klicka Här</a>
        <hr />
        </div>

        <div class="modal" id="modal-two" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-header">
                    <h2>Namn:<p className="second-project-name"></p></h2>
                </div>
                <div class="modal-body">
                    <p>Beskrivning:</p>
                    <p className="second-project-desc"></p>
                        <img src={susge} alt="Susge Picture" height="100" width="100" />
                </div>
                <div class="modal-footer">
                    <a href="#" class="btn">Stäng</a>
                </div>
            </div>
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

export default Portfolio
