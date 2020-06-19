import { IConsoleCommand } from "../interfaces";
import { CONSOLE_COMMAND_METADATA } from "./constants";

export const ConsoleCommandHandler = (consoleCommand: IConsoleCommand): ClassDecorator => {
    return (target: object) => {
        Reflect.defineMetadata(CONSOLE_COMMAND_METADATA, consoleCommand, target);
    };
};
