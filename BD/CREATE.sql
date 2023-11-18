create database rapStudio;

use rapStudio;

create table Usuario(
idUsuario int primary key auto_increment,
Nome varchar(45),
email varchar(255),
senha varchar(45),
UF char(2),
cidade varchar(45),
dtNasc date
);
select * from usuario;
CREATE TABLE Recomendacao (
	idPost int primary key auto_increment,
	titulo varchar(100),
	descricao varchar(150),
	fk_usuario int,
	constraint idUsuario foreign key (fk_usuario) references usuario(idUsuario)
);

create user 'userRapStudio'@'localhost' identified by 'Studio123';

grant insert, select on rapStudio.* to 'userRapStudio'@'localhost';