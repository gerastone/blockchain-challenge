import { Injectable } from '@angular/core';
import { BaseCRUDService } from 'src/app/core/services/http-client.service';
import { ProfileSerializer } from '../serializer/profile.serializer';

@Injectable()
export class UserService extends BaseCRUDService<any> {
    protected path: any = '/user';
    public serializer = new ProfileSerializer();

}