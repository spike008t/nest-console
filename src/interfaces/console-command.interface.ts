
export interface IConsoleCommand {

    readonly name: string;
    readonly description: string;
    
    /**
     * This method will be exec
     */
    execute(...args: string[]): void;

}
