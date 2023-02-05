"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_me_dto_1 = require("./create-me.dto");
class UpdateMeDto extends (0, mapped_types_1.PartialType)(create_me_dto_1.CreateMeDto) {
}
exports.UpdateMeDto = UpdateMeDto;
//# sourceMappingURL=update-me.dto.js.map