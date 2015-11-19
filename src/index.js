import { component } from './component';

const app = document.createElement('div');
require('./main.css');

document.body.appendChild(app);

app.appendChild(component());