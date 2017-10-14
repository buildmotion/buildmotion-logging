import { Injectable } from '@angular/core';


import { Severity } from './severity.enum';

@Injectable()
export class LoggingService {
    serviceName: string = 'LoggingService';
    source: string;
    severity: Severity;
    message: string;
    private timestamp;

    /**
     * The [LoggingService] constructor.
     */
    constructor() {
        this.log(this.serviceName, Severity.Information, `Starting logging service at: ${this.timestamp}`);
    }

    /**
     * Use this method to send a log message with severity and source information
     * to the application's logger.
     * 
     * If the application environment mode is [Production], the information will
     * be sent to a centralized repository.
     * 
     * @param source
     * @param severity
     * @param message
     */
    log(source: string, severity: Severity, message: string) {
        this.source = source;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date();

        const msg = `${this.message}`;
        console.log(`${this.severity} from ${this.source}: ${msg} (${this.timestamp})`);
    }
}
