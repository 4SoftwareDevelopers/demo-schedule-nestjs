import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';

@Injectable()
export class AppService {

  private readonly logger = new Logger(AppService.name);
  
  @Cron(CronExpression.EVERY_5_SECONDS)
  showEveryFiveSeconds() {
    this.logger.debug("Este mensaje se muestra cada cinco segundos");
  }

  @Interval(5000)
  intervalMethod() {
    this.logger.debug("Este mensaje se muestra cada cinco segundos desde un intervalo");
  }
}
