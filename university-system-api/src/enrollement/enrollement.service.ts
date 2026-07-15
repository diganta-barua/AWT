import { Injectable } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class EnrollementService {
    constructor(private readonly courseService: CourseService) {}
    getEnrollments(){
        return "...."
    }

    enrolstudent( name:string , id:string){
         const checkid = this.courseService.getCoursesbyid(id);
        if(checkid == null){
            return "course not found"
        }
        return  {message:"student enrollerd succesfully",
            student:name,
            course:{message: `course fetched , id ${id}`}
        }
    }
}
