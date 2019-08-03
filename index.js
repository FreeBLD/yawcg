#!/usr/bin/env node
const help = require('./Help');
const app = require('./Application');

const cliArgs = process.argv;
console.log(process.argv);

if (cliArgs.length < 3) {
    console.log(help.displayHelp());
} else {
    switch(cliArgs[2]) {
        case 'new':
            if (cliArgs[3] === 'app') {
                app.createNewApplication(cliArgs[4]);
            } else if (cliArgs[3] === 'component') {
                app.createNewComponent(cliArgs[4]);
            }
        break;
        case 'compile':
            if (cliArgs[3] === 'app') {
                app.compileApp();
            } else {
                app.compileComponent(cliArgs[3]);
            }
        break;
    }
}