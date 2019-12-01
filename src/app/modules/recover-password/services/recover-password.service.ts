import { Injectable } from '@angular/core';
import { BaseCRUDService } from 'src/app/core/services/http-client.service';
import { RecoverPasswordSerializer } from '../serializer/recover-password.serializer';
import { Environment } from 'src/app/core/config/environtments';

@Injectable()
export class RecoverPasswordService extends BaseCRUDService<any> {
    protected path: any = '/auth/password/create';
    public serializer = new RecoverPasswordSerializer();


    recoverPassword(item) {
        let formData = new FormData();
        formData.set("email", item);
        return this.http.post(Environment.HOSTS.development + `${this.path}`, formData);

    }

}