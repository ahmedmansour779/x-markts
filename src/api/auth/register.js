
import { returnData } from "..";

export async function handelSignup(e, setMassage) {
    e.preventDefault();
    const data = returnData(e)
    console.log(data);

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "en");
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...");

    // start data
    const formdata = new FormData();
    const wordsName = data.Username.trim().split(/\s+/)
    console.log(wordsName);
    if (wordsName.length > 1) {
        formdata.append("first_name", wordsName[0]);
        formdata.append("last_name", wordsName[1]);
    } else {
        formdata.append("first_name", wordsName[0]);
        formdata.append("last_name", wordsName[0]);
    }
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("password_confirmation", data.password);

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/register`, {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        });
        if (response.status === 200) {
            window.location.replace("/verifiedEmailOtp")
            console.log("done");
        }
        const result = await response.json();
        console.log(result);
        if (result.message.includes("The email has already been taken")) {
            setMassage("The email has already been taken")
        } else {
            window.location.replace("/verifiedEmailOtp")
            console.log("done");
        }
    } catch (error) {
        console.log("Login failed:", error);
    }
}