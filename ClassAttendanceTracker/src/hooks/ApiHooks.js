import { ApiUrl } from "../utils/variables";

export const loginUser = async (username, password) => {
    try {
        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        const data = await response.json();
        console.log("vastaus", data);

        if (response.ok && data.staff) {
            return data;
        } else {
            throw new Error(data.message || 'Invalid username or password');
        }
    } catch (error) {
        throw error;
    }
};
