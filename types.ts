export type User = {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}


export type AnimationData = {
    v: string;
    fr: number;
    ip: number;
    op: number;
    w: number;
    h: number;
    nm: string;
    ddd: number;
    assets: any[];
    layers: any[];
  }