const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', // ou l'IP du serveur MySQL
    user: 'enludzodka_admin',
    password: 'Seinzen777!',
    database: 'enludzodka_Home',
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});
