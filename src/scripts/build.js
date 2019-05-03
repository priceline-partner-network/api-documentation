import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import logger from './logger';
import config from './../../webpack.config';

const PROJECT_ROOT = `${process.env.PWD}/src`;

const build = () => {
    const modules = {};

    fs.readdir(PROJECT_ROOT, (err, files) => {
        files.forEach(file => {

        });
    })
};

build();

