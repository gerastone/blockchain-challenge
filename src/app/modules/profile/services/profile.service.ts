import { IUser } from '../../../core/interfaces/user.interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseCRUDService } from 'src/app/core/services/http-client.service';
import { ProfileSerializer } from '../serializer/profile.serializer';

@Injectable()
export class ProfileService extends BaseCRUDService<IUser> {
    protected path: any = '/auth/me';
    public serializer = new ProfileSerializer();

    getUserProfile(): Observable<IUser[]> {
       return super.list(); 
    }
}