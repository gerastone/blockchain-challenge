import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseSerializer } from '../serializer/base-serializer';
import { BaseInterface } from '../interfaces/base.interface';
import { Environment } from '../config/environtments'
import { LoadingController } from '@ionic/angular';
@Injectable()
export abstract class BaseCRUDService<T extends BaseInterface> {

    protected abstract readonly path;
    private loading;
    public abstract serializer: BaseSerializer;

    constructor(protected http: HttpClient, private loadingController: LoadingController) {
    }



    protected async showLoading() {
        this.loading = await this.loadingController.create({
            showBackdrop: true
        });
        await this.loading.present()
    }

    protected async hideLoading(error = '') {
        await this.loading && this.loading.dismiss();
        if (error) {
            return throwError(error);
        }
    }

    public list(params?: any, loading: boolean = true): Observable<T[]> {
        loading && this.showLoading();
        if (params) {

            return this.http
                .get(Environment.HOSTS.development + `${this.path}?${params}`)
                .pipe(
                    tap({
                        next: () => {
                            this.hideLoading();
                        },
                        error: (err) => {
                            this.hideLoading(err)
                        }
                    }),
                    map((data: any) => this.convertData(data))
                );
        } else {
            return this.http
                .get(Environment.HOSTS.development + `${this.path}`)
                .pipe(
                    tap({
                        error: (err) => {
                            this.hideLoading(err)
                        },
                        complete: () => {
                            this.hideLoading();
                        },
                    }),
                    map((data: any) => {
                        return this.convertData(data)
                    })
                );
        }
    }

    public getById(id: number): Observable<T> {
        return this.http
            .get(Environment.HOSTS.development + `${this.path}/${id}`)
            .pipe(
                map((data: any) => this.serializer.fromJson(data) as T),
                tap({
                    error: (err) => {
                        this.hideLoading(err)
                    },
                    complete: () => {
                        this.hideLoading();
                    },
                })
            );
    }

    public create(item: T): Observable<any> {
        return this.http
            .post(Environment.HOSTS.development + `${this.path}`, this.serializer.toJson(item)).pipe(
                tap({
                    error: (err) => {
                        this.hideLoading(err)
                    },
                    complete: () => {
                        this.hideLoading();
                    },
                })
            )
    }

    public update(item: T): Observable<T> {
        return this.http
            .put(Environment.HOSTS.development + `${this.path}/${item.id}`,
                this.serializer.toJson(item))
            .pipe(
                map(data => this.serializer.fromJson(data) as T),
                tap({
                    error: (err) => {
                        this.hideLoading(err)
                    },
                    complete: () => {
                        this.hideLoading();
                    },
                })
            );
    }

    public delete(id: number) {
        return this.http
            .delete(Environment.HOSTS.development + `${this.path}/${id}`).pipe(
                tap({
                    error: (err) => {
                        this.hideLoading(err)
                    },
                    complete: () => {
                        this.hideLoading();
                    },
                })
            );
    }

    private convertData(data: any): T[] {

        if (data && Array.isArray(data)) {
            data.map(item => this.serializer.fromJson(item))
        } else if (data != "") {
            return [this.serializer.fromJson(data)] as T[];
        } else {
            return []
        }
    }
}
