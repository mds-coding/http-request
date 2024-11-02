import { HttpMethod } from "@mds-coding/http-method";

export class HttpRequest<T> {
  method: HttpMethod;
  path: string;
  headers: Record<string, string>;
  body: T;

  constructor(method: HttpMethod, path: string, headers: Record<string, string>, body: T) {
    this.method = method;
    this.path = path;
    this.headers = headers;
    this.body = body;
  }
}

