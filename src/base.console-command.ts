import { IConsoleCommand } from "./interfaces";

export class BaseConsoleCommand implements IConsoleCommand {

    readonly name = 'test';
    readonly description = 'test';

    execute() {

    }
}
