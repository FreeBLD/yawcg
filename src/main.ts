import { Help as help }  from './Help/Help';
import { Application as app } from './Application/Application';

const argv = process.argv;
const argc = argv.length;

if (argc < 3 || argc > 5) {
    console.log(help.displayHelp());
} else {
    switch(argv[2]) {
        case 'new':
            if (argv[3] === 'app') {
                //app.createNewApplication(cliArgs[4]);
                app.createNewApplicationFromRepo(argv[4]);
            } else if (argv[3] === 'component') {
                app.createNewComponent(argv[4], argv[5]);
            }
        break;
        default:
            console.log(help.displayHelp());
        break;
    }
}

//TODO: rewrite and create a proper division into options module, subcommands module, ?commands module?