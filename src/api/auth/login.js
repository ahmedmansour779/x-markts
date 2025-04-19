import { returnData } from "..";

export const handelLogin = async (e) => {
    e.preventDefault();
    const data = returnData(e)
    console.log(data);

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "en");
    myHeaders.append(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3d3dy54cGFydHMtZWd5cHQuY29tL2FwaS91c2VyL2xvZ2luIiwiaWF0IjoxNzMzMDg0Mjc2LCJleHAiOjE3MzMwODc4NzYsIm5iZiI6MTczMzA4NDI3NiwianRpIjoieXhUa0xRYW9OSmNuUmR6QyIsInN1YiI6IjkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.9Tc9S0W9uaE8Ay2KrTQIjIKTC_3LLjPZ4hxHITvFG88"
    );

    const formdata = new FormData();
    formdata.append("email", data.email);
    formdata.append("password", data.password);

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow",
        });
        const result = await response.text(); // Or use .json() if expecting JSON
        console.log(result);
    } catch (error) {
        console.error("Login failed:", error);
    }


}