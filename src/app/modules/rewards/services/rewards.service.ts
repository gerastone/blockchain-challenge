import { Injectable } from '@angular/core';
import { BaseCRUDService } from 'src/app/core/services/http-client.service';
import { RewardsSerializer } from '../serializer/recover-password.serializer';

@Injectable()
export class RewardService extends BaseCRUDService<any> {
    protected path: any = '/rewards';
    public serializer = new RewardsSerializer();

}