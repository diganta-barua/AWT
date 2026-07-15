import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { NotifcationModule } from './notifcation/notifcation.module';
import { EnrollementModule } from './enrollement/enrollement.module';

@Module({
  imports: [CourseModule, NotifcationModule, EnrollementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
