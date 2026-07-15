import { Module } from '@nestjs/common';
import { CourseModule } from 'src/course/course.module';
import { NotifcationService } from './notifcation.service';
import { NotifcationController } from './notifcation.controller';

@Module({
  imports: [CourseModule],
  controllers: [NotifcationController],
  providers: [NotifcationService],
  exports: [NotifcationService],
})
export class NotifcationModule {}
