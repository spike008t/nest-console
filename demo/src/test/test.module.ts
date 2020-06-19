import { Module } from "@nestjs/common";
import { OnModuleInit } from "@nestjs/common";

@Module({})
export class TestModule implements OnModuleInit {
    onModuleInit() {
        console.log(`test`);
    }
}