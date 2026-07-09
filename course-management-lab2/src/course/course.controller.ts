import { Body, Controller , Get, Param ,ParseIntPipe,Patch,Post, Put} from '@nestjs/common';
import { CourseService } from './course.service';
import { createcoursedto } from './DTO/create-course.dto';
import { UpdateCourseDTO } from './DTO/update-course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getCourses() {
    console.log("hit");
    return this.courseService.getall();
  }
  @Get(":id")
  getbyid(@Param("id") id:string){
    return this.courseService.getbyid(id);
  }

  @Post()
  CreateCourse(@Body() course : createcoursedto){
    console.log(course);
    return this.courseService.addcourse(course);
  }

  @Put(":id")
  updatefullCourse(@Param("id") id:string, @Body() course : createcoursedto){
    return this.courseService.updatefullcourse(id, course);
  }
  @Patch(":id")
  updatepartialCourse(@Param("id") id:string, @Body() course : UpdateCourseDTO){
    return this.courseService.updatepartialcourse(id, course);
  }
}

