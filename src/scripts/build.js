import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import logger from './logger';
import config from './../../webpack.config';

const PROJECT_ROOT = `${process.env.PWD}/src`;
const HERODOTUS_CONFIG_JS = 'herodotus.config.js';
const HERODOTUS_CONFIG_JSON = 'herodotus.config.json';

const HERODOTUS_CONFIG_NAMES = [
    HERODOTUS_CONFIG_JS,
    HERODOTUS_CONFIG_JSON
];

const build = () => {
    const configPaths = getConfigs();

    console.log('configs', configPaths);
};

const getConfigs = (directory = PROJECT_ROOT) => {
    let configs = [];
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const filePath = `${directory}/${file}`;
        const stats = fs.statSync(filePath);

        if(stats.isDirectory()) {
            configs = configs.concat(getConfigs(filePath));
        } else if(stats.isFile() && HERODOTUS_CONFIG_NAMES.includes(file)) {
            configs.push(filePath);
        }
    });

    return configs;
};

build();

