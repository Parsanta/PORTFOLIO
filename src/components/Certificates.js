import AI from "../assets/img/intro_AI.jpg";
import genAi from "../assets/img/genAi.jpg";
import MLWP from "../assets/img/MLWP.jpg"
import DB from "../assets/img/DBSQL.jpg";
import pyAI from "../assets/img/python_AI.jpg";
import AI_foundations from "../assets/img/AI_foundations.jpg";
import chatbot from "../assets/img/chatbot.jpg";
import genAiIntro from "../assets/img/genAiIntro.jpg";

export const Certificates = () => {
  return (
    <div className="container">
      <section id="certifications" className="certifications">
        <h1>Certifications</h1>
        <div className="certifications-list">
        <div className="certification">
            <img src={MLWP} alt="Certificate" />
            <div className="certification-content">
              <h3>Machine Learning with Python</h3>
              <p>February 7, 2024</p>
              <a
                href="https://coursera.org/share/ae8140bb7579715028f160ac0726fbf7"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>

          <div className="certification">
            <img src={AI_foundations} alt="Certificate" />
            <div className="certification-content">
              <h3>AI Foundations for Everyone</h3>
              <p>December 28, 2023</p>
              <a
                href="https://coursera.org/share/bc66d478bcae18bc4a0751b030109589"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>

          <div className="certification">
            <img src={chatbot} alt="Certificate" />
            <div className="certification-content">
              <h3>Building AI Powered Chatbots Without Programming</h3>
              <p>December 28, 2023</p>
              <a
                href="https://coursera.org/share/a4ba41da19efbfcb6bf9049e3162f182"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        
          <div className="certification">
            <img src={genAi} alt="Certificate" />
            <div className="certification-content">
              <h3>Generative AI: Prompt Engineering Basics</h3>
              <p>December 16, 2023</p>
              <a
                href="https://coursera.org/share/7bf5016017f50e2f3fd5ef03cfe5d3d8"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>

          <div className="certification">
            <img src={genAiIntro} alt="Certificate" />
            <div className="certification-content">
              <h3>Generative AI: Introduction and Applications</h3>
              <p>November 25, 2023</p>
              <a
                href="https://coursera.org/share/67cfa76226c6eccffa0fbfad667fe395"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>

          <div className="certification">
            <img src={AI} alt="Certificate" />
            <div className="certification-content">
              <h3>Introduction to Artificial Intelligence (AI)</h3>
              <p>November 23, 2023</p>
              <a
                href="https://coursera.org/share/a68ab1949759613065a49e89fc3ab940"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>

          <div className="certification">
            <img src={DB} alt="Certificate" />
            <div className="certification-content">
              <h3>Databases and SQL for Data Science with Python</h3>
              <p>September 19, 2023</p>
              <a
                href="https://coursera.org/share/00b0f0834a873c553cee3c700119d7d0"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>

          <div className="certification">
            <img src={pyAI} alt="Certificate" />
            <div className="certification-content">
              <h3>Python for Data Science, AI & Development</h3>
              <p>September 8, 2023</p>
              <a
                href="https://coursera.org/share/0fc4aff4af0d8ffc9123f9608474a039"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
