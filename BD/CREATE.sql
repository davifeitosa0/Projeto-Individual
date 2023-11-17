create database rapStudio;

use rapStudio;

create table Usuario(
idUsuario int primary key auto_increment,
Nome varchar(45),
email varchar(255),
senha varchar(45),
dtNasc date
);

create table Endereco(
idEndereco int,
UF char(2),
cidade varchar(45),
fkUsuario int,
constraint fkUsuarioEndereco foreign key (fkUsuario) references Usuario(idUsuario)
);



create user 'userRapStudio'@'localhost' identified by 'Studio123';

grant insert, select on rapStudio.* to 'userRapStudio'@'localhost';