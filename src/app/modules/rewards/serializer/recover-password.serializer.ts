import { BaseSerializer } from 'src/app/core/serializer/base-serializer';

export class RewardsSerializer implements BaseSerializer {

    fromJson(json: any): any {
        return json;
    }

    toJson(resource: any) {
        return resource
    }
}