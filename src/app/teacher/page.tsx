"use client"

import Image from "next/image";
import teachers from "../../assets/teachers.png"
import './style.css';
import addData from "../addData";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { handleForm } from "../components";

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
            <Image src={teachers} alt="happy" className="hero-student" width={600} />

            <div className="letter">

                <div>
                    <h3>
                        Nous sommes enchantés de vous dévoiler en avant-première "Naja7i", une plateforme révolutionnaire offrant une liberté totale aux enseignants ! Grâce à Naja7i, vous avez l'opportunité unique de définir le tarif de vos cours, vous octroyant ainsi un contrôle absolu sur votre rémunération.
                    </h3>
                </div>
                <div className="offre">
                    <h3>
                        En vue de faciliter l'accès à l'éducation en ligne, Naja7i présente une offre spéciale : la plateforme retient seulement une commission de 15%, vous laissant ainsi savourer pleinement les fruits de votre enseignement.
                    </h3>
                </div>
                <div>
                    <h3>
                        Préinscrivez-vous dès à présent pour faire partie des premiers enseignants à rejoindre Naja7i, une aventure éducative incomparable. Ensemble, façonnons un monde d'apprentissage en ligne raffiné, innovant et équitable !
                    </h3>
                </div>

                <input type="email" placeholder="votre email" value={email} onChange={
                    (e) => {
                        setEmail(e.target.value)
                    }
                }></input>
                <input type="text" placeholder="votre nome" value={email} onChange={
                    (e) => {
                        setName(e.target.value)
                    }
                }></input>

<Link href="/merci" as="/merci"><button onClick={done}>Envoyer</button></Link>
            </div>


        </main>
    );
}
