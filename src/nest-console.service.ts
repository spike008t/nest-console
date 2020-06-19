import { Injectable, Type } from "@nestjs/common";
import Vorpal = require("vorpal");
import { IConsoleCommand } from "./interfaces";

@Injectable()
export class NestConsoleService {

    _vorpal: Vorpal;

    constructor() {
        this._vorpal = new Vorpal();
        this._vorpal.delimiter('$>');
    }

    register(commands: Type<IConsoleCommand>[] = []) {
        commands.forEach(command => {
            console.log(`register command => `, command);
            // this._vorpal
            //     .command(command.name, command.description)
            //     .action(async (args) => {
            //         command.execute.call(args);
            //     })
        });
    }

    show() {
        this._vorpal.show();
    }
}
