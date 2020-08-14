"use strict";

export * from "./my-module.js";
export * as myNameSpace from "./my-module.js";
export { foo, bar } from "./my-module.js";
export { foo as myModuleFoo, ba as MyModuleBar } from "./my-module.js";
export { default } from "./my-module.js";
export { default as myModuleDefault } from "./my-module.js";
export { foo as default } from "./my-module.js";

