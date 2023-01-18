export interface BaseItem {
    target_url: string;
}

export interface Url extends BaseItem{
    id:number;
    short_url:string;
}