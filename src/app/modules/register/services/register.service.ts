import { Injectable } from '@angular/core';
import { BaseCRUDService } from 'src/app/core/services/http-client.service';
import { RegisterSerializer } from '../serializer/register.serializer';
import { Environment } from 'src/app/core/config/environtments';

@Injectable()
export class RegisterService extends BaseCRUDService<any> {
    protected path: any = '/users';
    public serializer = new RegisterSerializer();

}