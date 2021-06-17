jest.mock('@company/utils-sdk');

import { IClient } from '@company/http-client-sdk';
import { Core } from '@company/core-sdk';
import { Logger } from '@company/utils-sdk';

describe('core unit tests', () => {
    afterEach(() => {
        jest.resetModules();
        jest.restoreAllMocks();
    });

    describe('and makeCall', () => {
        test('should do call', async () => {
            const expectedValue = {foo: 'bar'};

            const client: jest.Mocked<IClient> = {
                send: jest.fn().mockResolvedValueOnce(expectedValue)
            };

            const logger = new Logger();

            const c = new Core(logger, client);

            const actual = await c.makeCall();

            expect(actual).toEqual(expectedValue);
            expect(logger.logStuff).toBeCalledWith({
                url: 'https://example.com',
                method: 'GET'
            });
            expect(logger.logStuff).toBeCalledWith(expectedValue);
        });
    });
});
