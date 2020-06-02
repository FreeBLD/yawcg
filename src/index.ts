#!/usr/bin/env node
import { Help as help }  from './Help/Help';
import { Application as app } from './Application/Application';
import * as path from 'path';

const cliArgs = process.argv;

if (cliArgs.length < 3) {
    console.log(help.displayHelp());
} else {
    switch(cliArgs[2]) {
        case 'new':
            if (cliArgs[3] === 'app') {
                app.createNewApplication(cliArgs[4]);
            } else if (cliArgs[3] === 'component') {
                if (cliArgs[4] == '-t') {
                    app.createNewComponentFromType(cliArgs[6], cliArgs[5])
                } else {
                    app.createNewComponent(cliArgs[4], path.resolve(__dirname, './'));
                }
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


//TODO: rewrite and create a proper division into options module, subcommands module, ?commands module?