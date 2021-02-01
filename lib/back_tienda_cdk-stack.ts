import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class BackTiendaCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    // construye el stack a partir de la libreria cdk
    super(scope, id, props);
    //contruye la funcion lambda hola 
    const hola = new lambda.Function(this, 'HolaHandler', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler'
    });
  }
}
