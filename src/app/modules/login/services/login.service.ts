import { Injectable } from '@angular/core';
import { BaseCRUDService } from 'src/app/core/services/http-client.service';
import { LoginSerializer } from '../serializer/login.serializer';

@Injectable()
export class LoginService extends BaseCRUDService<any> {
    protected path: any = '/auth/login';
    public serializer = new LoginSerializer();

}