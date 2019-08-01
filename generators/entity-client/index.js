/* eslint-disable consistent-return */
const chalk = require('chalk');
const EntityClientGenerator = require('generator-jhipster/generators/entity-client');
const writeFiles = require('./files').writeFiles;

module.exports = class extends EntityClientGenerator {
    constructor(args, opts) {
        super(args, Object.assign({ fromBlueprint: true }, opts)); // fromBlueprint variable is important

        const jhContext = (this.jhipsterContext = this.options.jhipsterContext);

        if (!jhContext) {
            this.error(`This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprint jhipster-ant')}`);
        }

        this.configOptions = jhContext.configOptions || {};
    }

    get writing() {
        const phaseFromJHipster = super._writing();
        const myCustomPhaseSteps = {
            writeAdditionalFile() {
                writeFiles.call(this);
            }
        };
        return Object.assign(phaseFromJHipster, myCustomPhaseSteps);
    }

    get end() {
        return super._end();
    }
};
