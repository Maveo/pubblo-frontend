import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { MockApiRoutes } from "./mock-routes";

@Injectable()
export class MockApiHttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    console.log('[MockApi] request url:', req);

    let response = new HttpResponse({ status: 404, body: {}, statusText: 'Not Found' });
    // Actual matching logic
    for (const route of MockApiRoutes) {
      const expectedUrl = route.req.url;
      const methodMatches = req.method === route.req.method;
      const isDynamic = expectedUrl.includes('{');

      const urlMatches = isDynamic
        ? this.matchDynamicUrl(expectedUrl, req.url)
        : req.url === expectedUrl;

      if (methodMatches && urlMatches) {
        response = route.res(req);
        break;
      }
    }

    // No route matched
    return of(response).pipe(delay(500));
  }

  private matchDynamicUrl(routeUrl: string, actualUrl: string): boolean {
    const routeSegments = routeUrl.split('/');
    const actualSegments = actualUrl.split('/');

    if (routeSegments.length !== actualSegments.length) return false;

    return routeSegments.every((seg, i) =>
      seg.startsWith('{') && seg.endsWith('}') ? true : seg === actualSegments[i]
    );
  }
}
