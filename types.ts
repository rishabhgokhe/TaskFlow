import { ReactNode } from "react";

export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};


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
};

export type Task = {
  id: string;
  title: string;
  description: string;
  list: string;
  date: string
}

export type SideBarDataType = {
  name: string;
  link: string | { url: string; target?: string };
  icon: ReactNode;
};
