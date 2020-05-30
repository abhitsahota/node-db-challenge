const express = require('express');

const ResourcesRouter = require('./api/resources/resources-router');
const ProjectsRouter = require('./api/projects/projects-router')

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);

module.exports = server;