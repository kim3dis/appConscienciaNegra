CREATE DATABASE usuarios;
USE usuarios;

CREATE TABLE info_usuarios(
	ID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    NOME VARCHAR(30) UNIQUE NOT NULL,
    SENHA VARCHAR(255) NOT NULL,
    clareza TEXT
)CHARSET = utf8;

ALTER TABLE info_usuarios ADD COLUMN clareza TEXT;
ALTER TABLE info_usuarios ADD COLUMN considera TEXT;
ALTER TABLE info_usuarios ADD COLUMN abordado TEXT;

insert info_usuarios(NOME, SENHA) values('kim3dis', 'root');

truncate info_usuarios;

UPDATE `usuarios`.`info_usuarios` SET `clareza`='t', `considera`='t', `abordado`='t' WHERE `ID`='1';
UPDATE equipes SET pontos = '0' WHERE equipe = 'amarela';

UPDATE info_usuarios SET clareza = 't', considera = 't', abordado = 't' WHERE NOME = 'kim3dis';

SELECT NOME, clareza, considera, abordado FROM info_usuarios;
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
UPDATE equipes SET pontos = '0' WHERE equipe = 'amarela';

SELECT * FROM equipes order by pontos;

SELECT equipe FROM equipes;

SELECT pontos from equipes where equipe = "amarela";

SELECT ID, considera FROM info_usuarios WHERE considera = "Pardo(a)";