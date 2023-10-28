import ApiClient from './ApiClient';
import {MarketDataApi} from "./api/marketDataApi"; // adjust the path to match your file structure

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', async () => {
        const client = ApiClient.instance;
        const result = await new MarketDataApi().publicGetBookSummaryByInstrumentGet('BTC-10NOV23-40000-C');
        const body = result.body;
        console.log(client);
        // expect(sum(1, 2)).toBe(3);
    });
});
