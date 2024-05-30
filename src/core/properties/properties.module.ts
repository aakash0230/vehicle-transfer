import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import propertiesYaml from "./properties.yaml"

@Module({
    imports : [
        ConfigModule.forRoot({
            load : [propertiesYaml],
            isGlobal : true
        })
    ],
})

export default class Properties { }