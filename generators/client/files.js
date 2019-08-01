// const mkdirp = require('mkdirp');
const constants = require('generator-jhipster/generators/generator-constants');

const MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;
// const TEST_SRC_DIR = constants.CLIENT_TEST_SRC_DIR;
// const ANT_DIR = 'ant';
const CLIENT_ANT_TEMPLATES_DIR = 'ant';

module.exports = {
    writeFiles
};

const antFiles = {
    common: [
        {
            path: MAIN_SRC_DIR,
            templates: ['ant-proj/tsconfig.json', 'ant-proj/tslint.json', 'ant-proj/tsconfig2.json']
        }
    ]
};

function writeFiles() {
    this.copy('_dummy.txt', 'dummy.txt');
    // mkdirp(ANT_DIR);
    // write ant files
    this.writeFilesToDisk(antFiles, this, false, `${CLIENT_ANT_TEMPLATES_DIR}`);
}
