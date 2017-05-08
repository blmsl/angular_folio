export interface StyleObj {
  [key: string]: string;
}

export class TemplateContent {

  constructor(
    public rows: [{
      'style'?: StyleObj,
      'background-image'?: string,
      'background-color'?: string,
      'content': [{
        'style'?: StyleObj,
        'type': string,
        'class': string,
        'value': string
      }]
    }]
  ) {}

}