export default class Utils {
    constructor() {}

    static firstToUpperCase(stringToConvert: string) {
        return stringToConvert[0].toUpperCase() + stringToConvert.substring(1, stringToConvert.length);
    }

    static firstToLowerCase(stringToConvert: string) {
        return stringToConvert[0].toLowerCase() + stringToConvert.substring(1, stringToConvert.length);
    }

    static convertToKebapCase(stringToConvert: string) {
        const result: string = stringToConvert.replace(/[A-Za-z][a-z]+/g, (fragment: string) => {
            return `-${fragment.toLowerCase()}`;
        });
        return result.slice(1, result.length);
    }

    static convertToSnakeCase(stringToConvert: string) {
        const result: string = stringToConvert.replace(/[A-Za-z][a-z]+/g, (fragment: string) => {
            return `_${fragment.toLowerCase()}`;
        });
        return result.slice(1, result.length);
    }

    static trimComponentName(componentName: string) {
        let regex = new RegExp('Component|Element|-element|-component|-', 'g');
        return componentName.replace(regex, "");
    }
}