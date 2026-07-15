import { forwardRef, Module } from '@nestjs/common';
import { EnrollementService } from './enrollement.service';
import { EnrollementController } from './enrollement.controller';
import { CourseService } from 'src/course/course.service';
import { CourseModule } from 'src/course/course.module';
import { NotifcationModule } from 'src/notifcation/notifcation.module';

@Module({
  imports:[forwardRef(()=>NotifcationModule),CourseModule],
  exports:[EnrollementService],
  controllers: [EnrollementController],
  providers: [EnrollementService],
})
export class EnrollementModule {}
