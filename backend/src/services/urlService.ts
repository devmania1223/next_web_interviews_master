import { urls } from '../data';
import { isReachable } from '../utils/httpClient';

export const checkReachableUrls = async () => {
    const reachableUrls = await Promise.all(
        urls.map(async (urlObj) => {
        const reachable = await isReachable(urlObj.url);
        return reachable ? urlObj : null;
        })
    );

    return reachableUrls
        .filter((url) => url !== null)
        .sort((a, b) => a!.priority - b!.priority);
};

export const checkUrlsByPriority = async (priority: number) => {
    const filteredUrls = urls.filter((urlObj) => urlObj.priority === priority);
    const reachableUrls = await Promise.all(
        filteredUrls.map(async (urlObj) => {
        const reachable = await isReachable(urlObj.url);
        return reachable ? urlObj : null;
        })
    );

    return reachableUrls.filter((url) => url !== null);
};
