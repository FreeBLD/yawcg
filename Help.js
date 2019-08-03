module.exports = class Help {
    constructor() {}

    static displayHelp() {
        return `
            usage commands:
            
            -new            --- Create New Item
                -app        --- create New litElement-based Application
                -component  --- Create New litElement Component

            -compile
                -app        --- Compile Entire App to dist Folder
                -component  --- Compile the Specified Component to a Web Components Conforming Component
        `;
    }
}