function NoticiasDAO(connection) {
  this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function (callback) {
  this._connection.query('select * from noticias order by id_noticia desc', callback)
}

NoticiasDAO.prototype.getNoticia = function (filtro, callback) {
  this._connection.query('select * from noticias where id_noticia = ?', filtro, callback)
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
  this._connection.query('insert into noticias set ?', noticia, callback)
}

NoticiasDAO.prototype.getNoticiasByLimit = function (limit, callback) {
  this._connection.query('select * from noticias order by id_noticia desc limit ?', limit, callback)
}

module.exports = () => {
  return NoticiasDAO
}