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
	idRecomendacao int primary key auto_increment,
	nomeMusica varchar(150),
	fk_usuario int,
	constraint idUsuario foreign key (fk_usuario) references usuario(idUsuario)
);

create table QuizMusica(
	idQuizMusica int primary key auto_increment,
	Nome varchar(45),
    descricao varchar(100)
);

create table Resultado (
	fkUsuario int,
	fkQuizMusica int,
	idResultado int,
    primary key(fkUsuario, fkQuizMusica, idResultado),
    Nota float,
    constraint fkUsuario foreign key (fkUsuario) references Usuario(idUsuario),
    constraint fkQuizMusica foreign key (fkQuizMusica) references QuizMusica(idQuizMusica)
);

create user 'userRapStudio'@'localhost' identified by 'Studio123';

grant insert, select on rapStudio.* to 'userRapStudio'@'localhost';