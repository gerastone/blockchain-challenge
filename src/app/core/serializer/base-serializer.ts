import { BaseInterface } from '../interfaces/base.interface';

export interface BaseSerializer {
    fromJson(json: any): BaseInterface;
    toJson(resource: BaseInterface): any;
}
