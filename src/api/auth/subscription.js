
export const subscribeUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Data = Object.fromEntries(formData.entries());
    try {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Accept-Language", "en");
        myHeaders.append(
            "Authorization",
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3VzZXIvbG9naW4iLCJpYXQiOjE3MzE1OTE4MzksImV4cCI6MTczMTU5NTQzOSwibmJmIjoxNzMxNTkxODM5LCJqdGkiOiJTVXRSVW0yZjJYNXZRTGluIiwic3ViIjoiNyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ppAUnMvpJ5eiMSbO7_s_YWEa4rngzbDaC7SMH8DTPcI"
        );

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
        };

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/subscription?email=${Data.emailForm}`,
            requestOptions
        );

        const data = await response.json();

        console.log(data);
        return data;
    } catch (error) {
        console.error("Subscription error:", error);
        return null;
    }
};
