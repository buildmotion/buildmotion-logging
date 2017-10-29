import { Injectable, Optional } from '@angular/core';

import { loggingServiceConfig } from './index';
import { Severity } from './severity.enum';

@Injectable()
export class LoggingService {
    applicationName: string = 'AngularApplication';
    serviceName: string = 'LoggingService';
    source: string;
    severity: Severity;
    message: string;
    private timestamp;

    /**
     * The [LoggingService] constructor.
     */
    constructor(
        @Optional() private config: loggingServiceConfig
    ) {
        this.log(this.serviceName, Severity.Information, `Starting logging service at: ${this.timestamp}`);
        if(config && config.applicationName) {
            this.applicationName = config.applicationName;
        }
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
        this.source = `${this.applicationName}.${source}`;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date();

        const msg = `${this.message}`;
        console.log(`${this.severity} from ${this.source}: ${msg} (${this.timestamp})`);
    }
}
