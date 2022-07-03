import { Request, Response } from 'express';
import { CreateCoursesService } from '../CreateCoursesService';

function createCourse(request: Request, response: Response) {
  const createCoursesService = new CreateCoursesService();

  const course = {
    name: 'Node.js',
    duration: 30,
    educator: 'John Wick',
  };
  createCoursesService.execute(course);

  return response.send();
}

export { createCourse };
