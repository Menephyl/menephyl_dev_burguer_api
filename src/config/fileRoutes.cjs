const { resolve } = require('node:path');
const express = require('express');

const uploadPath = resolve(__dirname, '..', '..', 'uploads'); // navegação para a pasta uploads

const fileRouteConfig = express.static(uploadPath); // express busca arquivos estaticos

module.exports = fileRouteConfig;
