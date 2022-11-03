export interface Document {
  title: string;
  body: string;
}

export interface Provider {
  name: string;
  url: string;
  resourcePath: string;
  dataPath: string;
  versions: string[];
}

export interface Resource {
  name: string;
  url: string;
  doc?: Document;
}

export interface Data {
  name: string;
  url: string;
  doc?: Document;
}

export interface Source extends Resource, Data {}
