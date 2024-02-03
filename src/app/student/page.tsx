"use client"

import Image from "next/image";
import student from "../../assets/student.png"
import './style.css';
import addData from "../addData";
import { useState } from "react";
import Link from "next/link";
import { handleForm } from "../components";
import { useRouter } from "next/navigation";
export default function Home() {
        const [email, setEmail] = useState("")
        const [name, setName] = useState("")

        const router = useRouter()
        const done =async () => {
                if( await handleForm(email, name, "student") == "done"){
                        router.push("/merci")
                }else{
                        alert("Votre email et nome ne sont pas valide")
                }
        }
        return (
                <main>
                        <Image src={student} alt="happy" className="hero-student" width={600} />

                        <div className="letter">

                                <div><h3>
                                        Nous sommes ravis de vous accueillir sur notre futur espace éducatif en ligne.
                                </h3></div>
                                <div><h3>
                                        Pour célébrer ce lancement à venir, nous avons une offre spéciale pour les premiers inscrits
                                </h3></div>
                                <div className="offre"><h3>
                                        bénéficiez d'une réduction exclusive de 30% sur vos cours à venir !
                                </h3></div>
                                <div><h3>
                                        Pour être parmi les premiers à profiter de cette offre, <br /> pré-inscrivez-vous en laissant votre adresse e-mail ci-dessous.
                                </h3></div>


                                <input type="email" placeholder="votre email" value={email} onChange={
                                        (e) => {
                                                setEmail(e.target.value)
                                        }
                                }></input>
                                <input type="text" placeholder="votre nome" value={name} onChange={
                                        (e) => {
                                                setName(e.target.value)
                                        }
                                }></input>

                          
                                        <button onClick={done}>Envoyer</button>
                        </div>


                </main>
        );
}
