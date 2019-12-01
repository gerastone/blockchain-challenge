import { IUser } from './../../../core/interfaces/user.interface';
import { BaseSerializer } from 'src/app/core/serializer/base-serializer';

export class ProfileSerializer implements BaseSerializer {

    fromJson(json: IUser): any {
        return json
    }

    toJson(resource: any) {
        return JSON.stringify(resource)
    }
}