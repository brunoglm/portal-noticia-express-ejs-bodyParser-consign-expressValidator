module.exports.index = function (application, req, res) {
  var connection = application.config.dbConnection()
  var noticiasDAO = new application.app.models.NoticiasDAO(connection)

  noticiasDAO.getNoticiasByLimit(5, (error, result) => {
    res.render('home', { noticias: result })
  })
}
