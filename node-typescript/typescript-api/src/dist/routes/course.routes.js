"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCoursesService_1 = require("../CreateCoursesService");
function createCourse(request, response) {
    const createCoursesService = new CreateCoursesService_1.CreateCoursesService();
    const course = {
        name: 'Node.js',
        duration: 30,
        educator: 'John Wick',
    };
    createCoursesService.execute(course);
    return response.send();
}
exports.createCourse = createCourse;
