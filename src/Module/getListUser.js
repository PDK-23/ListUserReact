const mainAPI = "https://randomuser.me/api/?results=40&seed=";

export const fetchUserList = async (seed = "dev") => {
    const response = await fetch(`${mainAPI}${seed}`);
    const data = await response.json();
    return data.results;
}