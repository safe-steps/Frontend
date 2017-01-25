
const routes = [
  {
  	method: 'get',
  	path: '/api/scenario',
  	handler: require('./serverHandlers/getAllScenarios.handler.js')
  },
  {
    method: 'get',
    path: '/*',
    handler: require('./serverHandlers/render.handler.js')
  }
]

export default routes;
