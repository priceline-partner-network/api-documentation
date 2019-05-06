import configs from './getConfigs';
import logger from './logger';
import baseConfig from './../../webpack.config';
import webpack from 'webpack';
import fs from 'fs';

const BUILD_FOLDER_PATH = `${process.env.PWD}/build`;

const build = () => {
    logger.logInfo('Starting Build of project');

    const config = {...baseConfig};

    config.entry = {};

    configs.forEach((configPath, index) => {
        config.entry[index] = configPath;
    });

    webpack(config, handleBuild);
};

const handleBuild = () => {
    const processedIDs = {};

    configs.forEach((config, index) => {
        const filePath = `${BUILD_FOLDER_PATH}/${index}.js`;

        if(fs.existsSync(filePath)) {
            const module = require(filePath).default;

            if(module.id && !processedIDs[module.id]) {
                fs.renameSync(filePath, `${BUILD_FOLDER_PATH}/${module.id}.js`);
                processedIDs[module.id] = true;
                logger.logSuccess(`Successfully built ${module.id}`);
            } else {
                logger.logError(`Duplicate id ${module.id}`);
            }
        }
    });

    createdMain(processedIDs);
};

const createdMain = (files) => {
    let jsonString = '';

    Object.keys(files).forEach((file) => {
        jsonString += `"${file}": require('./${file}'),`;
    });

    fs.writeFileSync(`${BUILD_FOLDER_PATH}/index.js`, `
        module.exports = {${jsonString}};
    `);

    logger.logSuccess('Build Main index file');
};

build();