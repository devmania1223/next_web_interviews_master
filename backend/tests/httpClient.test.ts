import { isReachable } from '../src/utils/httpClient';
import axios from 'axios';

jest.mock('axios');

describe('HTTP Client', () => {
    it('should return true if URL is reachable', async () => {
        (axios.get as jest.Mock).mockResolvedValue({ status: 200 });
        const result = await isReachable('https://example.com');
        expect(result).toBe(true);
    });

    it('should return false if URL is not reachable', async () => {
        (axios.get as jest.Mock).mockRejectedValue(new Error('Network error'));
        const result = await isReachable('https://invalid-url.com');
        expect(result).toBe(false);
    });
});
