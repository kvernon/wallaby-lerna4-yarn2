import { Client, IClient } from './../../lib';

describe('client unit tests', () => {
    afterEach(() => {
        jest.resetModules();
        jest.restoreAllMocks();
    });

    describe('and makeCall', () => {
        test('should do call', async () => {
            const client: IClient = new Client();

            let options = {url: 'http://example.com', method: 'GET', data: {foo: 'bar'}};
            const actual = await client.send(options);

            expect(actual).toEqual({
                ...options,
                response: {
                    statusCode: 200
                }
            });
        });
    });
});
