import { Injectable } from '@angular/core';
import { BaseCRUDService } from 'src/app/core/services/http-client.service';
import { RegisterSerializer } from '../serializer/register.serializer';
@Injectable()
export class ValidationCodeService extends BaseCRUDService<any> {
    protected path: any = '/users/code';
    public serializer = new RegisterSerializer();
}
