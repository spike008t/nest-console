import { Module, OnModuleInit } from '@nestjs/common';
import { NestConsoleService } from './nest-console.service';
import { ExplorerService } from './services/explorer.service';

@Module({
    providers: [
        NestConsoleService,
        ExplorerService,
    ],
    exports: [
        NestConsoleService,
    ]
})
export class NestConsoleModule implements OnModuleInit {

    constructor(
        private readonly _service: NestConsoleService,
        private readonly _explorerService: ExplorerService,
    ) {
        console.log(`NestConsoleModule::constructor`);
    }

    onModuleInit() {

        console.log(`NestConsoleModule::onModuleInit`);

        const { commands } = this._explorerService.explore();

        this._service.register(commands);
        this._service.show();
    }

}
