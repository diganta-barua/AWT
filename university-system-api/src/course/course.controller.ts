import { Body, Controller, Get , Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService ) {}
  
  @Get()
  getAllCourses() {
    return this.courseService.getAllCourses();
  }
  
  @Get(":id")
  getCoursebyid(@Param('id') id:string){
    return this.courseService.getCoursesbyid(id);
  }

  @Post()
  createCourse(@Body() course:any){
    return this.courseService.createCourse(course);
  }

}
