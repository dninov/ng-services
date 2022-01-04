import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService {
  logStatusChange(status: string, name: string): void {
    console.log(`A server ${name} status changed, new status: ${status}`);
  }
}
