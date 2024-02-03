import icon from "../assets/logo.png";
import hero from "../assets/hero.png";
import Image from 'next/image';
import "./home-style.css";
import Link from "next/link";

export default () => <>
  
    <main>
        <div className="main-content">
            <div className="text">
                <h1>
                    Élevez votre
                    Parcours
                    d'Apprentissage
                </h1>
                <h2>Decouvrez nos services :</h2>
                <Link href={"/student"}>
                    <button className="check-offer"> élève </button>
                </Link>
                <Link href={"/teacher"}>
                    <button className="check-offer"> enseignant </button>
                </Link>

            </div>
            <div className="hero-icon-div"><Image src={hero} alt="hero" className="hero-icon" /></div>

        </div>
    </main></>


/**
 * 
            <div className="comments">
                <div className="students">
                    <h2>Les avis de nos étudiants :</h2>
                    <div className="comments-boxes" >
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae minus cumque ipsa ipsam nihil rerum eaque aspernatur tempore et voluptate saepe magni necessitatibus suscipit sit blanditiis enim quia eligendi!
                        </div>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae minus cumque ipsa ipsam nihil rerum eaque aspernatur tempore et voluptate saepe magni necessitatibus suscipit sit blanditiis enim quia eligendi!
                        </div>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae minus cumque ipsa ipsam nihil rerum eaque aspernatur tempore et voluptate saepe magni necessitatibus suscipit sit blanditiis enim quia eligendi!
                        </div>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae minus cumque ipsa ipsam nihil rerum eaque aspernatur tempore et voluptate saepe magni necessitatibus suscipit sit blanditiis enim quia eligendi!
                        </div>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae minus cumque ipsa ipsam nihil rerum eaque aspernatur tempore et voluptate saepe magni necessitatibus suscipit sit blanditiis enim quia eligendi!
                        </div>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae minus cumque ipsa ipsam nihil rerum eaque aspernatur tempore et voluptate saepe magni necessitatibus suscipit sit blanditiis enim quia eligendi!
                        </div>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae minus cumque ipsa ipsam nihil rerum eaque aspernatur tempore et voluptate saepe magni necessitatibus suscipit sit blanditiis enim quia eligendi!
                        </div>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae minus cumque ipsa ipsam nihil rerum eaque aspernatur tempore et voluptate saepe magni necessitatibus suscipit sit blanditiis enim quia eligendi!
                        </div>
                    </div>
                    <div className="seperator"></div>
                    <div className="teachers">
                        <h2 className="tt">Les avis de nos professeurs :</h2>
                        <div className="comments-boxes" >
                            <div>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae minus cumque ipsa ipsam nihil rerum eaque aspernatur tempore et voluptate saepe magni necessitatibus suscipit sit blanditiis enim quia eligendi!
                            </div>
                            <div>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae minus cumque ipsa ipsam nihil rerum eaque aspernatur tempore et voluptate saepe magni necessitatibus suscipit sit blanditiis enim quia eligendi!
                            </div>
                            <div>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae minus cumque ipsa ipsam nihil rerum eaque aspernatur tempore et voluptate saepe magni necessitatibus suscipit sit blanditiis enim quia eligendi!
                            </div>
                            <div>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae minus cumque ipsa ipsam nihil rerum eaque aspernatur tempore et voluptate saepe magni necessitatibus suscipit sit blanditiis enim quia eligendi!
                            </div>
                            <div>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae minus cumque ipsa ipsam nihil rerum eaque aspernatur tempore et voluptate saepe magni necessitatibus suscipit sit blanditiis enim quia eligendi!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 * 
 * 
 * 
 */