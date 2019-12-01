import { ProfileSerializer } from './../serializer/profile.serializer';
import { IUser } from './../../../core/interfaces/user.interface';
import { Injectable } from '@angular/core';
import { BaseCRUDService } from 'src/app/core/services/http-client.service';
import { Environment } from 'src/app/core/config/environtments';

@Injectable()
export class ChangePasswordService extends BaseCRUDService<IUser> {
    protected path: any = '/auth/changePassword' 
    public serializer = new ProfileSerializer();
    
    changePassword(params) {
        let formData = new FormData();
        formData.set('password', params.password);
        formData.set('newPassword', params.newPassword);
        return this.http.post(Environment.HOSTS.development + `${this.path}`, formData);
    }

}