
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import addData from "./addData";
 import { useRouter } from "next/navigation";

export const handleForm = async (email : string,name : string, path : string) => {
    "use client"

    

    if (validateEmail(email) && name != "") {
            const { result, error } = await addData(path, name, {
                    email: email
            },)

            if (error) {
                    return console.log(error)
            } else{
                return "done"
            }
    } else {
            return ("Votre email n'est pas valide")
    }
}

const validateEmail = (email: String) => {
    return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
