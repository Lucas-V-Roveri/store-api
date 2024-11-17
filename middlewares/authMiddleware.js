const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Pega o token do cabeçalho de autorização
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });

  const parts = authHeader.split(' ');

  if (parts.length !== 2) return res.status(401).json({ error: 'Erro no token' });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) return res.status(401).json({ error: 'Token mal formatado' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Token inválido' });

    req.userId = decoded.userId;
    return next();
  });
}; 