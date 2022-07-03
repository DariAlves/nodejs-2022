import { Request, Response } from 'express';
import { CreateCoursesService } from '../CreateCoursesService';

function createCourse(request: Request, response: Response) {
  const createCoursesService = new CreateCoursesService();

  const course = {
    name: 'Node.js',
    duration: 30,
    educator: 'John Wick',
  };

  const course2 = {
    name: 'React.js',
    educator: 'John Snow',
  };

  createCoursesService.execute(course);
  createCoursesService.execute(course2);

  return response.send();
}

export { createCourse };
