import { Injectable } from '@nestjs/common';

const COURSES = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
    durationHours: 20,
    instructor: 'Alice Johnson',
    level: 'Beginner',
    price: 0,
    tags: ['web', 'html', 'css', 'javascript'],
  },
  {
    id: 2,
    title: 'Advanced Node.js',
    description: 'Deep dive into Node.js, NestJS, and backend patterns.',
    durationHours: 30,
    instructor: 'Bob Smith',
    level: 'Advanced',
    price: 49.99,
    tags: ['node', 'nestjs', 'backend'],
  },
  {
    id: 3,
    title: 'Database Design and SQL',
    description: 'Design relational schemas and write efficient SQL queries.',
    durationHours: 25,
    instructor: 'Carol Lee',
    level: 'Intermediate',
    price: 29.99,
    tags: ['database', 'sql', 'design'],
  },
];


@Injectable()
export class CourseService {

    getall(){
        return COURSES;
    }
    getbyid(id:number){
        console.log(id);
        return COURSES.find(e=> e.id == id);
    }
    addcourse(course:any){
        if(COURSES.find(e=> e.id == course.id)){
            return `Course ID ${course.id} already exist`;
        }
        COURSES.push(course);
        return COURSES;
    }
    updatefullcourse(id:number, course:any){
      console.log(id);
      const index = COURSES.findIndex(e=> e.id == id);
    }
    updatepartialcourse(id:number, course:any){
      console.log(id);
      const index = COURSES.findIndex(e=> e.id == id);
    }
}
