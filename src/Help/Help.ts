export class Help {
    constructor() {}

    static displayHelp() {
        return `
            usage commands:
            
            -new            --- Create New Item
                -app        --- create New litElement-based Application
                -component  --- Create New litElement Component
        `;
    }
}