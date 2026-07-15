import { Injectable } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class NotifcationService {
    constructor( private readonly course:CourseService){}
    sendnotification( studentname:string, msg?:string){
        return {
            studentname:`studentname: ${studentname}`,
            message:`message ${msg}`
        }
    }
    checkenrol(sname:string , id:string){
        const check = this.course.getCoursesbyid(id);
        return { student:sname,
            enroled: check == null ? "student not found" : "student found enroled in" + id  
        }
    }
}
