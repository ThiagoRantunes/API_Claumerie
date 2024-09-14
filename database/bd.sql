CREATE DATABASE banco_teste;

USE banco_teste;

CREATE TABLE usuarios(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(20)
);

INSERT INTO usuarios (nome, email, senha) VALUES ("Thiago", "thiagorantunes@gmail.com", "testeteste");