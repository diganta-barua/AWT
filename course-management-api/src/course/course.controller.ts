import { Body, Controller , Get, Param ,Patch,Post, Put} from '@nestjs/common';
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

  @Put(":id")
  updatefullCourse(@Param("id") id:number, @Body() course : any){
    return this.courseService.updatefullcourse(id, course);
  }
  @Patch(":id")
  updatepartialCourse(@Param("id") id:number, @Body() course : any){
    return this.courseService.updatepartialcourse(id, course);
  }

}

