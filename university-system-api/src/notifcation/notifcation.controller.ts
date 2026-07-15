import { Body, Controller ,Param,Post } from '@nestjs/common';
import { NotifcationService } from './notifcation.service';
import { notificationdto } from './DTO/notification.dto';

@Controller('notifcation')
export class NotifcationController {
  constructor(private readonly notifcationService: NotifcationService) {}
    @Post()
    sendnotification(@Body() data:notificationdto){
      return this.notifcationService.sendnotification(data.studentname, data.message);
    }

    @Post("check")
    checkenrol(@Body() data:notificationdto ){
      return this.notifcationService.checkenrol(data.studentname, data.id);
    }
    
    
  
}
