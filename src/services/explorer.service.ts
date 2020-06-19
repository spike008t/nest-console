import { Injectable, Type } from "@nestjs/common";
import { ModulesContainer } from "@nestjs/core"
import { Module } from "@nestjs/core/injector/module";
import { InstanceWrapper } from "@nestjs/core/injector/instance-wrapper";
import { IConsoleCommand } from "../interfaces/console-command.interface";
import { CONSOLE_COMMAND_METADATA } from "../decorators";

@Injectable()
export class ExplorerService {
    constructor(
        private readonly _modulesContainer: ModulesContainer
    ) { }

    explore() {
        console.log(`Explorer`);
        const modules = [...this._modulesContainer.values()];
        const commands = this.flatMap<IConsoleCommand>(modules, instance => 
            this.filterProvider(instance, CONSOLE_COMMAND_METADATA)
        );
        return { commands }
    }
    
    flatMap<T>(
        modules: Module[],
        callback: (instance: InstanceWrapper) => Type<any> | undefined,
    ): Type<T>[] {
        const items = modules
            .map(module => [...module.providers.values()].map(callback))
            .reduce((a, b) => a.concat(b), []);
        return items.filter(i => !!i);
    }

    filterProvider(
        wrapper: InstanceWrapper,
        metadataKey: string,
    ): Type<any> | undefined {
        const { instance } = wrapper;
        if (!instance) {
            return undefined;
        }
        return this.extractMetadata(instance, metadataKey);
    }

    extractMetadata(instance: Object, metadataKey: string): Type<any> {
        if (!instance.constructor) {
            return;
        }
        const metadata = Reflect.getMetadata(metadataKey, instance.constructor);
        return metadata ? (instance.constructor as Type<any>) : undefined;
    }
}
