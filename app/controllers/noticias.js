module.exports.noticia = function (application, req, res) {
  var connection = application.config.dbConnection()
  var noticiasDAO = new application.app.models.NoticiasDAO(connection)

  var idNoticia = req.query.id_noticia;

  noticiasDAO.getNoticia(idNoticia, (error, result) => {
    res.render('noticias/noticia', { noticia: result })
  })
}

module.exports.noticias = function (application, req, res) {
  var connection = application.config.dbConnection()
  var noticiasDAO = new application.app.models.NoticiasDAO(connection)

  noticiasDAO.getNoticias((error, result) => {
    res.render('noticias/noticias', { noticias: result })
  })
}