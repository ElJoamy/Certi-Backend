<<<<<<< HEAD

export interface ICacheService {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, ttl?:number): Promise<void>;
=======
export interface ICacheService {
    get(key: string): Promise<string | null>;
    set(key: string, value: string, ttl?: number): Promise<void>;
>>>>>>> a835975f115a8c3727601bff87a8535648678367
}
