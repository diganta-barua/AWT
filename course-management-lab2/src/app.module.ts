import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestssssModule } from './testssss/testssss.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [TestssssModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
