export const fetchCategories = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Accept-Language", "en");
  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3VzZXIvYXV0aC9sb2dpbiIsImlhdCI6MTczMDQ1Mzg3MCwiZXhwIjoxNzMwNDU3NDcwLCJuYmYiOjE3MzA0NTM4NzAsImp0aSI6IktUZFBIVXVOQVd1UFpGbmwiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.sa5XKQIZOJ1H2smPSdVk1BEXLwlcm5fX-lKATQHu-7A");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Assuming it's JSON
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
};
