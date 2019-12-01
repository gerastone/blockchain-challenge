import { Injectable } from '@angular/core';
import { BaseCRUDService } from 'src/app/core/services/http-client.service';
import { HomeSerializer } from '../serializer/home.serializer';

@Injectable()
export class HomeService extends BaseCRUDService<any> {
    protected path: any = '/trial';
    public serializer = new HomeSerializer();

}