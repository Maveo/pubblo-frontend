import { HttpRequest, HttpResponse } from "@angular/common/http";

export interface MockRoute<T, T2> {
  req: HttpRequest<T>,
  res: (req: HttpRequest<T>) => HttpResponse<T2>,
}
