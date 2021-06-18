import {Client} from '@company/http-client-sdk';
import {Core} from '@company/core-sdk';
import {Logger} from '@company/utils-sdk';

describe('core unit tests', () => {
    describe('and makeCall', () => {
        test('should do call', async () => {
            const logger = new Logger();

            const c = new Core(logger, new Client());

            const actual = await c.makeCall();

            expect(actual).toEqual({
                url: 'https://example.com',
                method: 'GET',
                response: {statusCode: 200}
            });
        });
    });
});
