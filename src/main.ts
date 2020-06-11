#!/usr/bin/env node
import { Help as help }  from './Help/Help';
import { Application as app } from './Application/Application';

const cliArgs = process.argv;
console.log(__dirname);

if (cliArgs.length < 3) {
    console.log(help.displayHelp());
} else {
    switch(cliArgs[2]) {
        case 'new':
            if (cliArgs[3] === 'app') {
                app.createNewApplication(cliArgs[4]);
            } else if (cliArgs[3] === 'component') {
                app.createNewComponent(cliArgs[4], cliArgs[5]);
            }
        break;
        default:
            console.log(help.displayHelp());
        break;
    }
}

//TODO: rewrite and create a proper division into options module, subcommands module, ?commands module?