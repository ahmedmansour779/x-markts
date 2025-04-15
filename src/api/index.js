export const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Accept-Language", "en");
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...");
export const returnData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    return data
}