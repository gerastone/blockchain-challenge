import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseCRUDService } from 'src/app/core/services/http-client.service';
import { ProfileSerializer } from '../serializer/profile.serializer';

@Injectable()
export class LogoutService extends BaseCRUDService<any> {
    protected path: any = '/auth/logout';
    public serializer = new ProfileSerializer();

    logout(): Observable<any> {
        return super.list()
    }

}