import {config} from './config.js';
import {getRndInteger} from './tools.js';
import {picturesSetup} from './view.js';
import {generateData} from './data.js';

let data = generateData();
picturesSetup( data );
