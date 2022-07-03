interface Course {
  name: string;
  duration: number;
  educator: string;
}

class CreateCoursesService {
  execute({ name, duration, educator }: Course) {
    console.log(`${name} ${duration} ${educator}`);
  }
}

export { CreateCoursesService };
