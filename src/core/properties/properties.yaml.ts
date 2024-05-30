const fs = require("fs")
import * as yaml from "js-yaml";
import { join } from "path";

const YAML_CONFIG = `/dev.properties.yaml`;

export default () => {
    let temp = yaml.load(
        fs.readFileSync(join(__dirname, YAML_CONFIG), 'utf-8'),
    ) as Record<string, any>
    return temp
}

