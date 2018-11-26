CREATE DATABASE usuarios;
USE usuarios;

CREATE TABLE info_usuarios(
	ID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    NOME VARCHAR(30) UNIQUE NOT NULL,
    SENHA VARCHAR(255) NOT NULL    
)CHARSET = utf8;


insert info_usuarios(NOME, SENHA) values('admin', 'nimda') where = "pinto";

truncate info_usuarios;



SELECT * FROM info_usuarios;

SELECT SENHA from info_usuarios where NOME = "kim3dis";

SELECT NOME FROM info_usuarios;

CREATE TABLE equipes(
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    equipe VARCHAR(30) UNIQUE NOT NULL,
    pontos INT(4)
)CHARSET = utf8;

SELECT * FROM equipes;

INSERT INTO `usuarios`.`equipes` (`id`, `equipe`, `pontos`) VALUES ('1', 'amarela', '0');
INSERT INTO `usuarios`.`equipes` (`id`, `equipe`, `pontos`) VALUES ('2', 'azul', '0');
INSERT INTO `usuarios`.`equipes` (`id`, `equipe`, `pontos`) VALUES ('3', 'cinza', '2');
INSERT INTO `usuarios`.`equipes` (`id`, `equipe`, `pontos`) VALUES ('4', 'laranja', '0');
INSERT INTO `usuarios`.`equipes` (`id`, `equipe`, `pontos`) VALUES ('5', 'marrom', '0');
INSERT INTO `usuarios`.`equipes` (`id`, `equipe`, `pontos`) VALUES ('6', 'roxa', '0');
INSERT INTO `usuarios`.`equipes` (`id`, `equipe`, `pontos`) VALUES ('7', 'verde', '0');
INSERT INTO `usuarios`.`equipes` (`id`, `equipe`, `pontos`) VALUES ('8', 'vermelha', '0');


UPDATE equipes SET pontos = '0' WHERE equipe = 'amarela';

SELECT * FROM equipes order by pontos;

SELECT equipe FROM equipes;

SELECT pontos from equipes where equipe = "amarela";

