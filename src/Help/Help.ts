export class Help {
    constructor() {}

    static displayHelp() {
        return `
            usage commands:
            
            -new            --- Create New Item
                -app        --- create New litElement-based Application
                -component  --- Create New litElement Component
                    -t      --- Create New Component Based on Type
                        js  --- Create New Javascript Based Component
                        ts  --- Create New Typescript Based Component

            -compile
                -app        --- Compile Entire App to dist Folder
                -component  --- Compile the Specified Component to a Web Components Conforming Component
                    -jsver  --- Target Javascript version to compile to
        `;
    }
}