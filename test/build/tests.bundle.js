/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/tests.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src sync recursive \\.test\\.ts$":
/*!******************************!*\
  !*** ./src sync \.test\.ts$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Application/Application.test.ts": "./src/Application/Application.test.ts",
	"./FetchRemoteRepository/FetchRemoteRepository.test.ts": "./src/FetchRemoteRepository/FetchRemoteRepository.test.ts",
	"./Utils/Utils.test.ts": "./src/Utils/Utils.test.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive \\.test\\.ts$";

/***/ }),

/***/ "./src/Application/Application.test.ts":
/*!*********************************************!*\
  !*** ./src/Application/Application.test.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __webpack_require__(/*! ./Application */ "./src/Application/Application.ts");
const assert_1 = __importDefault(__webpack_require__(/*! assert */ "assert"));
const fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
let application;
let foobarClassTemplate = `
    import { LitElement, html, css, property, customElement } from 'lit-element';

    @customElement('foobar-element')
    export class FoobarElement extends LitElement {
        private _name: string;

        @property({ type: String }) public get name() {
            return this._name;
        } 
        public set name(value: string) {
            const oldValue = this.name;
            this._name = value;
            this.requestUpdate('name', oldValue)
        }
        
        constructor() {
            super();
            this.name = "FoobarElement";
        }

        render() {
            return html\`
                <h1>\${this.name} <span class=".blink">Works!</span></h1>
            \`;
        }
        
        static get styles() {
            const style = css\`
                :host {
                    color: red;
                    // create a blink css property
                }
                @keyframes blink {
                    from { color: red; }
                    to { color: white; }
                }
                .blink {
                    animation-name: blink;
                    animation-duration: 2s;
                }
            \`;
            return [style];
        }
    }
`;
describe("Test Case for the Application Class", () => {
    beforeEach(() => {
        application = new Application_1.Application("Application");
    });
    afterEach(() => {
        application = null;
    });
    it("should return a new Template from a preset in-class template called 'foobar'", () => {
        assert_1.default.deepStrictEqual(Application_1.Application.generateNewComponent('foobar'), foobarClassTemplate.replace(/^(?:    ){3}/gm, ''));
    });
    it("should create a folder with a new component named 'baz' in current working directory if path not supplied", () => {
        Application_1.Application.createNewComponent('baz');
        console.log(__dirname);
        console.log(process.cwd());
        const folderIsCreated = fs_1.default.existsSync(path_1.default.resolve(process.cwd(), 'baz-element'));
        assert_1.default.strictEqual(folderIsCreated, true);
        fs_1.default.rmdirSync(path_1.default.resolve(process.cwd(), 'baz-element'), { recursive: true });
    });
    it('should fetch the template repo from upstream', () => __awaiter(void 0, void 0, void 0, function* () {
        const repo = yield Application_1.Application.fetchTemplateProjectFromRepo('Test');
        assert_1.default.notStrictEqual(repo, null);
    }));
});


/***/ }),

/***/ "./src/Application/Application.ts":
/*!****************************************!*\
  !*** ./src/Application/Application.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const path = __importStar(__webpack_require__(/*! path */ "path"));
const fs = __importStar(__webpack_require__(/*! fs */ "fs"));
const LitElementTemplate_1 = __importDefault(__webpack_require__(/*! ../templates/typescript/LitElementTemplate */ "./src/templates/typescript/LitElementTemplate.ts"));
const MochaTestCaseTemplate_1 = __importDefault(__webpack_require__(/*! ../templates/typescript/MochaTestCaseTemplate */ "./src/templates/typescript/MochaTestCaseTemplate.ts"));
const Utils_2 = __importDefault(__webpack_require__(/*! ../Utils/Utils */ "./src/Utils/Utils.ts"));
const ConfigTemplates_1 = __importDefault(__webpack_require__(/*! ../templates/config/ConfigTemplates */ "./src/templates/config/ConfigTemplates.ts"));
const FetchRemoteRepository_2 = __webpack_require__(/*! ../FetchRemoteRepository/FetchRemoteRepository */ "./src/FetchRemoteRepository/FetchRemoteRepository.ts");
class Application {
    constructor(name) {
        this._name = name;
    }
    static createNewApplication(name) {
        const templateName = 'my-element';
        console.log(__dirname);
        const pathToComponent = path.resolve('./', `${name}`, `src/`);
        console.log(pathToComponent);
        fs.mkdirSync(pathToComponent, { recursive: true });
        console.log(`Creating App Folder on Path ${__dirname}/${name}`);
        console.log(`Creating Folder ${__dirname}/${name}/src`);
        console.log(`Creating Folder ${__dirname}/${name}/src/my-element`);
        this.createNewComponent(templateName, pathToComponent);
        console.log(`Creating Folder ${__dirname}/${name}/test`);
        const testFolderPath = path.resolve('./', `${name}`, `test/`);
        this.createConfigurationFiles(testFolderPath);
    }
    static createNewApplicationFromRepo(appName) {
        this.fetchTemplateProjectFromRepo(appName);
    }
    static fetchTemplateProjectFromRepo(appName) {
        const REPOREDIRECTLINK = 'https://codeload.github.com/FreeBLD/lit-element-template/zip/master';
        const repoFetcher = new FetchRemoteRepository_2.FetchRemoteRepository(REPOREDIRECTLINK);
        repoFetcher.getRepo(process.cwd()).then((pathToFile) => {
            //Should create a working dir for archives and unarchived directories that are cleaned after all operations
            if (pathToFile.includes('.zip')) {
                repoFetcher.extractArchive(pathToFile, process.cwd()).then((whatIsThis) => {
                    repoFetcher.deleteFile(pathToFile);
                    console.log(whatIsThis);
                    // Rename here template repo after extraction.
                });
            }
        });
    }
    static createConfigurationFiles(path) {
        fs.mkdirSync(path, { recursive: true });
        const config = new ConfigTemplates_1.default();
        let bundler = config.getDefaultWebpackTemplate();
        fs.writeFileSync(`${path}/webpack.config.js`, bundler);
        let compiler = config.getDefaultWebpackTemplate();
        fs.writeFileSync(`${path}/tsconfig.json`, compiler);
    }
    static createNewComponent(name, pathToComponent) {
        let trimmedName = Utils_2.default.trimComponentName(name);
        const newFileName = `${trimmedName.toLowerCase()}-element`;
        pathToComponent = !!pathToComponent ? pathToComponent : process.cwd();
        const newFolderName = path.resolve(pathToComponent, newFileName);
        console.log(`Created New Folder ${newFolderName}`);
        fs.mkdirSync(newFolderName, { recursive: true });
        console.log(`Created New Element ${newFolderName}/${newFileName}.ts`);
        fs.writeFileSync(`${newFolderName}/${newFileName}.ts`, this.generateNewComponent(trimmedName));
        console.log(`Created New Test ${newFolderName}/${newFileName}.ts`);
        fs.writeFileSync(`${newFolderName}/${newFileName}.test.ts`, this.generateNewTestCase(trimmedName));
    }
    static generateNewComponent(name) {
        let elementTemplate = new LitElementTemplate_1.default().renderTypescriptTemplate();
        elementTemplate = elementTemplate.replace(/^(?:    ){3}/gm, '');
        elementTemplate = elementTemplate.replace(/\n/, '');
        const pascalCase = Utils_2.default.firstToUpperCase(name);
        const camelCase = Utils_2.default.firstToLowerCase(name);
        const kebapCase = Utils_2.default.convertToKebapCase(name);
        let litElementComponent = elementTemplate.replace(/%%PascalCase%%/g, pascalCase);
        litElementComponent = litElementComponent.replace(/%%camelCase%%/g, camelCase);
        litElementComponent = litElementComponent.replace(/\\/g, '');
        return litElementComponent.replace(/%%kebap-case%%/g, kebapCase);
    }
    static generateNewTestCase(name) {
        const pascalCase = Utils_2.default.firstToUpperCase(name);
        const camelCase = Utils_2.default.firstToLowerCase(name);
        const kebapCase = Utils_2.default.convertToKebapCase(name);
        let testCaseTemplate = new MochaTestCaseTemplate_1.default().renderTestCaseTemplate();
        testCaseTemplate = testCaseTemplate.replace(/^(?:    ){3}/gm, '');
        testCaseTemplate = testCaseTemplate.replace(/\n/, '');
        testCaseTemplate = testCaseTemplate.replace(/%%PascalCase%%/g, pascalCase);
        testCaseTemplate = testCaseTemplate.replace(/%%camelCase%%/g, camelCase);
        return testCaseTemplate.replace(/%%kebap-case%%/g, kebapCase);
    }
    static generateNewTestCaseFromTemplate(name, templateURL) {
        let pascalCase = Utils_2.default.firstToUpperCase(name);
        const testTemplate = fs.readFileSync(path.join(__dirname, templateURL), { encoding: "utf-8" });
        const testBuffer = testTemplate.replace(/%%PascalCase%%/g, pascalCase);
        return testBuffer.replace(/%%kebap-case%%/g, name.toLowerCase());
    }
    static generateNewComponentFromTemplate(name, templateURL) {
        let pascalCase = Utils_2.default.firstToUpperCase(name);
        const litElementTemplate = fs.readFileSync(path.join(__dirname, templateURL), { encoding: "utf-8" });
        const litElementComponent = litElementTemplate.replace(/%%PascalCase%%/g, pascalCase);
        return litElementComponent.replace(/%%kebap-case%%/g, name.toLowerCase());
    }
}
exports.Application = Application;


/***/ }),

/***/ "./src/FetchRemoteRepository/FetchRemoteRepository.test.ts":
/*!*****************************************************************!*\
  !*** ./src/FetchRemoteRepository/FetchRemoteRepository.test.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FetchRemoteRepository_1 = __webpack_require__(/*! ./FetchRemoteRepository */ "./src/FetchRemoteRepository/FetchRemoteRepository.ts");
const assert_2 = __importDefault(__webpack_require__(/*! assert */ "assert"));
const fs_2 = __importDefault(__webpack_require__(/*! fs */ "fs"));
let fetchRemoteRepository;
describe('Test Case for FetchRemoteRepositoryClass', () => {
    const tempPath = './temp';
    beforeEach(() => {
        fetchRemoteRepository = new FetchRemoteRepository_1.FetchRemoteRepository();
    });
    afterEach(() => {
        fetchRemoteRepository = null;
    });
    describe('FS operations', () => {
        beforeEach(() => {
        });
        afterEach(() => {
        });
        it('Should create a folder named "temp"', () => {
            fs_2.default.mkdirSync(tempPath);
            assert_2.default.strictEqual(fs_2.default.existsSync('./temp'), true);
            fs_2.default.rmdirSync('./temp');
        });
        it('Should rename "temp" folder to "tenp"', () => {
            fs_2.default.mkdirSync(tempPath);
            fs_2.default.renameSync(tempPath, './tenp');
            assert_2.default.strictEqual(fs_2.default.existsSync('./tenp'), true);
            fs_2.default.rmdirSync('./tenp');
        });
    });
});


/***/ }),

/***/ "./src/FetchRemoteRepository/FetchRemoteRepository.ts":
/*!************************************************************!*\
  !*** ./src/FetchRemoteRepository/FetchRemoteRepository.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchRemoteRepository = void 0;
const fs_3 = __importDefault(__webpack_require__(/*! fs */ "fs"));
const https_1 = __importDefault(__webpack_require__(/*! https */ "https"));
const extract_zip_1 = __importDefault(__webpack_require__(/*! extract-zip */ "extract-zip"));
// Needs unit tests :(
class FetchRemoteRepository {
    constructor(repositoryLink) {
        this.repoLink = repositoryLink;
    }
    set RepositoryLink(url) {
        const validURI = new RegExp(/^\w{,5}:\/\/\w+\.\w{,3}/, "i"); //Is this a valid URI parser? Non-functional
        this.repoLink = url;
    }
    getFileFromURL(url, target) {
        if (target === null) {
            const currentISODate = new Date().toISOString();
            target = `${__dirname}/repo${currentISODate}.zip`;
        }
        return new Promise((resolve, reject) => {
            https_1.default.get(url, (stream) => {
                this.saveStreamToFile(stream, target).then((path) => {
                    console.log(`File Successfully Saved on ${path}`);
                    resolve(path);
                });
            });
        });
    }
    getRepo(target) {
        const currentISODate = new Date().toISOString();
        const archiveName = `repo${currentISODate}.zip`;
        if (target === undefined) {
            target = `${__dirname}/${archiveName}`;
        }
        else {
            target = `${target}/${archiveName}`;
        }
        return new Promise((resolve, reject) => {
            https_1.default.get(this.repoLink, (stream) => {
                this.saveStreamToFile(stream, target).then((path) => {
                    console.log(`File Successfully Saved on ${path}`);
                    resolve(path);
                });
            });
        });
    }
    saveStreamToFile(stream, destination) {
        const file = fs_3.default.createWriteStream(destination);
        stream.pipe(file);
        return new Promise((resolve, reject) => {
            file.on("finish", () => {
                file.close();
                resolve(destination);
            });
            file.on("error", (error) => {
                reject(error);
            });
        });
    }
    //Should this be spun out to a separate class?! Probably!
    extractArchive(pathToFile, destination) {
        return new Promise((resolve, reject) => {
            extract_zip_1.default(pathToFile, { dir: `${destination}` })
                .then((data) => {
                console.log("Archive Extracted!");
                resolve(destination);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    deleteFile(filePath) {
        fs_3.default.unlink(filePath, () => {
            console.log(`Successfully deleted temp archive ${filePath}`);
        });
    }
}
exports.FetchRemoteRepository = FetchRemoteRepository;


/***/ }),

/***/ "./src/Utils/Utils.test.ts":
/*!*********************************!*\
  !*** ./src/Utils/Utils.test.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __importDefault(__webpack_require__(/*! ./Utils */ "./src/Utils/Utils.ts"));
const assert_3 = __importDefault(__webpack_require__(/*! assert */ "assert"));
describe('Test Case for the Utils Class', () => {
    it("firstToLowerCase() should return first 'Test' as 'test'", () => {
        assert_3.default.strictEqual(Utils_1.default.firstToLowerCase("Test"), 'test');
    });
    it("firstToUppercase() should return first letter in 'test as 'Test'", () => {
        assert_3.default.strictEqual(Utils_1.default.firstToUpperCase('test'), 'Test');
    });
    it("trimComponentName() should strip any string containing 'component' token", () => {
        assert_3.default.strictEqual(Utils_1.default.trimComponentName("UtilsComponent"), "Utils");
    });
    it("trimComponentName() should strip any string containing 'element' token", () => {
        assert_3.default.strictEqual(Utils_1.default.trimComponentName("UtilsElement"), "Utils");
    });
    it("trimComponentName() should strip any string containing any number of 'element' token", () => {
        assert_3.default.strictEqual(Utils_1.default.trimComponentName("UtilsElementElement"), "Utils");
    });
    it("convertToKebapCase() should return a 'PascalCase' string with a hyphen token", () => {
        assert_3.default.strictEqual(Utils_1.default.convertToKebapCase('PascalCase'), 'pascal-case');
    });
    it("convertToKebapCase() should return a 'camelCase' string with a hyphen token", () => {
        assert_3.default.strictEqual(Utils_1.default.convertToKebapCase('camelCase'), 'camel-case');
    });
    it("convertToSnakeCase() should return a 'camelCase' string with and an underscore separator token", () => {
        assert_3.default.strictEqual(Utils_1.default.convertToSnakeCase('camelCase'), 'camel_case');
    });
});


/***/ }),

/***/ "./src/Utils/Utils.ts":
/*!****************************!*\
  !*** ./src/Utils/Utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    constructor() { }
    static firstToUpperCase(stringToConvert) {
        return stringToConvert[0].toUpperCase() + stringToConvert.substring(1, stringToConvert.length);
    }
    static firstToLowerCase(stringToConvert) {
        return stringToConvert[0].toLowerCase() + stringToConvert.substring(1, stringToConvert.length);
    }
    static convertToKebapCase(stringToConvert) {
        const result = stringToConvert.replace(/[A-Za-z][a-z]+/g, (fragment) => {
            return `-${fragment.toLowerCase()}`;
        });
        return result.slice(1, result.length);
    }
    static convertToSnakeCase(stringToConvert) {
        const result = stringToConvert.replace(/[A-Za-z][a-z]+/g, (fragment) => {
            return `_${fragment.toLowerCase()}`;
        });
        return result.slice(1, result.length);
    }
    static trimComponentName(componentName) {
        let regex = new RegExp('Component|Element|-element|-component|-', 'g');
        return componentName.replace(regex, "");
    }
}
exports.default = Utils;


/***/ }),

/***/ "./src/templates/config/ConfigTemplates.ts":
/*!*************************************************!*\
  !*** ./src/templates/config/ConfigTemplates.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ConfigFilesTemplates {
    constructor() { }
    getDefaultTsConfigTemplate() {
        return `
            {
                "compilerOptions": {
                    "outDir": "./dist/",
                    "sourceMap": true,
                    "noImplicitAny": true,
                    "module": "CommonJS",
                    "target": "ES2015",
                    "allowJs": true,
                    "experimentalDecorators": true,
                    "moduleResolution": "Node"
                }
            }
        `;
    }
    getDefaultWebpackTemplate() {
        return `
            const HtmlWebpackPlugin = require('html-webpack-plugin');
            const CopyWebpackPlugin = require('copy-webpack-plugin');
            const { CleanWebpackPlugin } = require('clean-webpack-plugin');
            const path = require('path');
            
            module.exports = ({ mode }) => {
                return {
                    mode,
                    entry: path.join(__dirname, 'src', 'index.ts'),
                    output:  {
                        path: path.join(__dirname, "/dist"),
                        filename: "bundle.js"
                    }, 
                    plugins: [
                        new CleanWebpackPlugin(),
                        new HtmlWebpackPlugin({
                            entry: 'index.ts',
                            template: path.resolve(__dirname, 'src/', 'index.html')
                        }),
                        new CopyWebpackPlugin({
                            patterns: [
                                {
                                    context: 'node_modules/@webcomponents/webcomponentsjs',
                                    from: '**/*.js',
                                    to: 'webcomponents'
                                }
                            ]
                        })
                    ],
                    module: {
                    rules: [
                        {
                            test: /\.ts$/,
                            use: 'ts-loader',
                            exclude: /node_modules/
                        },
                        {
                            test: /\.test\.js$/,
                            use: 'mocha-loader',
                            exclude: /node_modules/
                        },
                        {
                            test: /\.test\.ts$/,
                            use: 'mocha-loader',
                            exclude: /node_modules/
                        },
                        { 
                            enforce: 'pre',
                            test: /\.js$/,
                            loader: 'source-map-loader'
                        }
                        ]
                    },
                    resolve: {
                        extensions: ['.ts', '.js']
                    },
                    devtool: mode === 'development' ? 'source-map' : 'none',
                    watchOptions: {
                        ignored: /node_modules/
                    },
                    devServer: {
                        contentBase: path.join(__dirname, '/dist'),
                        compress: true,
                        port: 9000,
                        inline: true,
                        hot: true //If this is false then liveReload implicitly true
                    }
                };
            };
        `;
    }
    getDefaultUnitTestingBuffersTemplate() {
        return [
            `
            var context = require.context('../src', true, /\.test\.ts$/);
            context.keys().forEach(context);
            module.exports = context;
            `,
            `
            const HtmlWebpackPlugin = require('html-webpack-plugin');
            const { CleanWebpackPlugin } = require('clean-webpack-plugin');
            const path = require('path');
            
            module.exports = ({ mode }) => {
                return {
                    mode,
                    entry: path.resolve(__dirname, '.', 'all.tests.js'),
                    output: {
                        path: path.join(__dirname, '/build'),
                        filename: '[name].bundle.js',
                    },
                    plugins: [
                        new CleanWebpackPlugin(),
                        new HtmlWebpackPlugin({
                            template: path.resolve(__dirname, '.', 'test.html')
                        })
                    ],
                    module: {
                    rules: [
                        {
                            test: /\.ts$/,
                            use: 'ts-loader',
                            exclude: /node_modules/
                        },
                        {
                            test: /\.test\.js$/,
                            use: 'mocha-loader',
                            exclude: /node_modules/
                        },
                        {
                            test: /\.test\.ts$/,
                            use: [ 'mocha-loader', 'ts-loader' ],
                            exclude: /node_modules/
                        },
                        { 
                            enforce: 'pre',
                            test: /\.js$/,
                            loader: 'source-map-loader'
                        }
                        ]
                    },
                    resolve: {
                        extensions: ['.ts', '.js']
                    },
                    devtool: mode === 'development' ? 'source-map' : 'none',
                    watchOptions: {
                        ignored: /node_modules/
                    },
                    devServer: {
                        contentBase: path.join(__dirname, '/build'),
                        compress: true,
                        port: 9010,
                        inline: true,
                        //hot: true //If this is false then liveReload implicitly true
                    },
                    optimization: {
                        minimize: mode === 'production' ? true : false,
                    }
                };
            };
            `,
            `
            <!DOCTYPE html>

            <html lang="en">
             
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Mocha Testing</title>
            </head>
             
            <body>
            </body>
            </html>
            `,
            `
            var webpackConf = require('./webpack-test.config');

            module.exports = function (config) {
                return config.set({
                    browsers: ['Chrome'],
                    frameworks: ['mocha'],
                    files: ['./index.ts'],
                    preprocessors: {
                        './index.ts': ['webpack']
                    },
                    plugins: [
                        'karma-chrome-launcher',
                        'karma-mocha',
                        'karma-webpack'
                    ],
                    webpack: webpackConf,
                    webpackMiddleware: {
                        noInfo: true
                    }
                })
            }
            `
        ];
    }
}
exports.default = ConfigFilesTemplates;


/***/ }),

/***/ "./src/templates/typescript/LitElementTemplate.ts":
/*!********************************************************!*\
  !*** ./src/templates/typescript/LitElementTemplate.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LitElementTemplate {
    constructor() {
    }
    renderTypescriptTemplate() {
        return `
            import { LitElement, html, css, property, customElement } from 'lit-element';

            @customElement('%%kebap-case%%-element')
            export class %%PascalCase%%Element extends LitElement {
                private _name: string;

                @property({ type: String }) public get name() {
                    return this._name;
                } 
                public set name(value: string) {
                    const oldValue = this.name;
                    this._name = value;
                    this.requestUpdate('name', oldValue)
                }
                
                constructor() {
                    super();
                    this.name = "%%PascalCase%%Element";
                }

                render() {
                    return html\`
                        <h1>\${this.name} <span class=".blink">Works!</span></h1>
                    \`;
                }
                
                static get styles() {
                    const style = css\`
                        :host {
                            color: red;
                            // create a blink css property
                        }
                        @keyframes blink {
                            from { color: red; }
                            to { color: white; }
                        }
                        .blink {
                            animation-name: blink;
                            animation-duration: 2s;
                        }
                    \`;
                    return [style];
                }
            }
        `;
    }
}
exports.default = LitElementTemplate;


/***/ }),

/***/ "./src/templates/typescript/MochaTestCaseTemplate.ts":
/*!***********************************************************!*\
  !*** ./src/templates/typescript/MochaTestCaseTemplate.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class MochaTestCaseTemplate {
    renderTestCaseTemplate() {
        return `
            import  { %%PascalCase%%Element } from "./%%kebap-case%%-element";
            import * as assert from 'assert';

            let %%camelCase%%: %%PascalCase%%Element;
            let shadow: shadowRoot;

            describe("Test Case for the %%PascalCase%%Element Class", () => {
                beforeEach(() => {
                    %%camelCase%% = new %%PascalCase%%Element();
                    document.body.appendChild(%%camelCase%%);
                    shadow = %%camelCase%%.shadowRoot;
                });

                afterEach(() => {
                    document.body.removeChild(%%camelCase%%);
                    %%camelCase%% = null;
                });

                it("%%camelCase%% has a property 'name' with value of '%%PascalCase%%'", function() {
                    assert.equal(%%camelCase%%.name, '%%PascalCase%%');
                });

                it("%%camelCase%% has a 'color' red applied to its children", function() {
                    const host = window.getComputedStyle(%%camelCase%%, ':host');
                    const color = host.getPropertyValue('color');
                    assert.equal(%%camelCase%%, color);
                });
            })
        `;
    }
}
exports.default = MochaTestCaseTemplate;


/***/ }),

/***/ "./test/tests.js":
/*!***********************!*\
  !*** ./test/tests.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

let tests = __webpack_require__("./src sync recursive \\.test\\.ts$");
tests.keys().forEach(tests);
module.exports = tests;

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "extract-zip":
/*!******************************!*\
  !*** external "extract-zip" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("extract-zip");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=tests.bundle.js.map