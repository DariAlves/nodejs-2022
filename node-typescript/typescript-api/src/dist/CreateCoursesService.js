"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCoursesService = void 0;
class CreateCoursesService {
    execute({ name, duration = 10, educator }) {
        console.log(`${name} ${duration} ${educator}`);
    }
}
exports.CreateCoursesService = CreateCoursesService;
