module.exports.formulario_inclusao_noticia = function (application, req, res) {
  res.render('admin', { validacao: {}, noticia: {} })
}

module.exports.noticias_salvar = function (application, req, res) {
  var noticia = req.body

  req.assert('titulo', 'Titulo é obrigatório').notEmpty();
  req.assert('resumo', 'Resumo é obrigatório').notEmpty();
  req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
  req.assert('autor', 'Autor é obrigatório').notEmpty();
  req.assert('data_noticia', 'Data é obrigatório').notEmpty();
  req.assert('data_noticia', 'Data não está em um formato válido').isDate({ format: 'YYYY-MM-DD' })
  req.assert('noticia', 'Noticia é obrigatório').notEmpty();

  var erros = req.validationErrors()

  if (erros) {
    res.render('admin', { validacao: erros, noticia })
    return
  }

  var connection = application.config.dbConnection()
  var noticiasDAO = new application.app.models.NoticiasDAO(connection)

  noticiasDAO.salvarNoticia(noticia, (error, result) => {
    res.redirect('/noticias')
  })
}


