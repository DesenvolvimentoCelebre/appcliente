import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Webhook } from './webhook.entity';

@Injectable()
export class WebhookService {
  constructor(
    @InjectRepository(Webhook)
    private notificationRepository: Repository<Webhook>,
  ) {}

  async handleWebhook(data: any) {
    const notification = this.notificationRepository.create({
      userid: data.data.userid,
      content: data.data.content,
      createdat: new Date(),
    });

    await this.notificationRepository.save(notification);
    console.log('Notification saved:', notification);
  }
}
