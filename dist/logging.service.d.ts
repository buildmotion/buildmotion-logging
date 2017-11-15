import { loggingServiceConfig } from './logging.service.config';
import { Severity } from './severity.enum';
export declare class LoggingService {
    private config;
    applicationName: string;
    serviceName: string;
    source: string;
    severity: Severity;
    message: string;
    private timestamp;
    /**
     * The [LoggingService] constructor.
     */
    constructor(config: loggingServiceConfig);
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
    log(source: string, severity: Severity, message: string): void;
}
