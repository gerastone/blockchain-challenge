import { Injectable } from '@angular/core';
import { BaseCRUDService } from 'src/app/core/services/http-client.service';
import { HelpSerializer } from '../serializer/help.serializer';

@Injectable()
export class HelpService extends BaseCRUDService<any> {
    protected path: any = '/user';
    public serializer = new HelpSerializer();

}