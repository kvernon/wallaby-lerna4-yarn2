import { IClient } from '@company/http-client-sdk';
import { Logger } from '@company/utils-sdk';

export class Core {
    private readonly _client: IClient;
    private readonly _logger: Logger;

    constructor(logger: Logger, client: IClient) {
        this._logger = logger;
        this._client = client;
    }

    makeCall(): Promise<Record<string, unknown>> {
        let options = {
            url: 'https://example.com',
            method: 'GET'
        };
        this._logger.logStuff(options);

        return this._client.send(options).then(res => {
            this._logger.logStuff(res);
            return res;
        });
    }
};
