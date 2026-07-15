import { Controller, Get, Post ,Body, Param } from '@nestjs/common';
import { EnrollementService } from './enrollement.service';
import { enrollmentDTO } from './DTO/enrollment.dto';

@Controller('enrollement')
export class EnrollementController {
  constructor(private readonly enrollementService: EnrollementService) {}

  @Get()
  getEnrollments(){
    return this.enrollementService.getEnrollments();
  }

  @Post()
  enrollStudent(@Body() data:enrollmentDTO){
    return this.enrollementService.enrolstudent(data.name , data.courseid);
  }
}
