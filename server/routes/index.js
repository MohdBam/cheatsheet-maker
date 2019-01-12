const CategoryControllers = require('../controllers/CategoryControllers')
const SheetControllers = require('../controllers/SheetControllers')

module.exports = (app) => {
  app.post('/categories',CategoryControllers.post)
  app.get('/categories',CategoryControllers.getAll)
  app.delete('/categories/:id',CategoryControllers.delete)
  app.get("/categories/:id",CategoryControllers.getOne)
  app.post("/categories/:id",CategoryControllers.edit)
  app.get('/categories/:id/sheets',SheetControllers.getAll)
  app.post('/categories/:id/add',SheetControllers.post)
  app.delete('/sheets/:id',SheetControllers.delete)
  app.post('/sheets/:id',SheetControllers.edit)
}
