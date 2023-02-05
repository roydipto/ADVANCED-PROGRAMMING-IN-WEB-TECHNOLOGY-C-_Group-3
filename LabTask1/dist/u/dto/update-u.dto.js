"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_u_dto_1 = require("./create-u.dto");
class UpdateUDto extends (0, mapped_types_1.PartialType)(create_u_dto_1.CreateUDto) {
}
exports.UpdateUDto = UpdateUDto;
//# sourceMappingURL=update-u.dto.js.map