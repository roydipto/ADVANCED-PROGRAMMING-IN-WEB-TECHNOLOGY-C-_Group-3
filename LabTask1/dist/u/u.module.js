"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UModule = void 0;
const common_1 = require("@nestjs/common");
const u_service_1 = require("./u.service");
const u_controller_1 = require("./u.controller");
let UModule = class UModule {
};
UModule = __decorate([
    (0, common_1.Module)({
        controllers: [u_controller_1.UController],
        providers: [u_service_1.UService]
    })
], UModule);
exports.UModule = UModule;
//# sourceMappingURL=u.module.js.map