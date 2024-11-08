import axios from 'axios';

export const isReachable = async (url: string) => {
    try {
        const response = await axios.get(url, { timeout: 5000 });
        return response.status >= 200 && response.status < 300;
    } catch {
        return false;
    }
};
