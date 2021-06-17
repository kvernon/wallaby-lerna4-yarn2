export interface IClient {
    send(options: { url, method, data?: Record<string, unknown> }): Promise<Record<string, unknown>>;
}

export class Client implements IClient {
    async send(options: { url, method, data?: Record<string, unknown> }): Promise<Record<string, unknown>> {
        return {...options, response: {statusCode: 200}};
    }
}

