import { checkReachableUrls, checkUrlsByPriority } from '../src/services/urlService';
import * as httpClient from '../src/utils/httpClient';
import { urls } from '../src/data';

describe('URL Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return reachable URLs ordered by priority', async () => {
        jest.spyOn(httpClient, 'isReachable').mockResolvedValue(true);
        const result = await checkReachableUrls();

        expect(result).not.toBeNull();
        expect(result).toHaveLength(urls.length);

        if (result) {
            expect(result[0]?.priority).toBe(1);  
        }
    });

    it('should return reachable URLs by given priority', async () => {
        const priority = 4;
        jest.spyOn(httpClient, 'isReachable').mockResolvedValue(true);
        const result = await checkUrlsByPriority(priority);

        // Add null check before using 'every' method
        expect(result).not.toBeNull();

        if (result) {
            expect(result.every((url) => url?.priority === priority)).toBeTruthy();
        }
    });
});
