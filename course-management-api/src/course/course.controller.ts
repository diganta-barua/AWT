import { Body, Controller , Get, Param ,Post} from '@nestjs/common';
import { CourseService } from './course.service';
import { get } from 'http';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getCourses() {
    return this.courseService.getall();
  }
  @Get(":id")
  getbyid(@Param("id") id:number){
    return this.courseService.getbyid(id);
  }

  @Post()
  CreateCourse(@Body() course : any){
    return this.courseService.addcourse(course);
  }


}

