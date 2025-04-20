import { returnData } from "..";

export const handelVerifiedEmail = async (e, setMassage) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = returnData(e)

    console.log(data);

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "en");
    myHeaders.append("Authorization", "Bearer {{vault:authorization-secret}}");

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/verify-email`, {
            method: "POST",
            headers: myHeaders,
            body: formData,
            redirect: "follow"
        });
        const result = await response.json();
        console.log(result);
        if (response.status === 422) {
            setMassage(result.error);
        } else if (response.status === 200) {
            window.location.replace("/login")
        }
    } catch (error) {
        console.error("Error verifying email:", error);
    }

}