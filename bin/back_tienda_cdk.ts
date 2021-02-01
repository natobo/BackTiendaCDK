#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { BackTiendaCdkStack } from '../lib/back_tienda_cdk-stack';

const app = new cdk.App();
new BackTiendaCdkStack(app, 'BackTiendaCdkStack');
