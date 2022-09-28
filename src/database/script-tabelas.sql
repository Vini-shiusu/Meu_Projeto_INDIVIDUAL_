create database BestAnimes;
use BestAnimes;


create table votacao (
idVotacao int PRIMARY KEY AUTO_INCREMENT,
nomeCategoria varchar(45)
)AUTO_INCREMENT = 100;


create table Usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha varchar (45),
fkVotacao int,
constraint Usuario_fkVotacao foreign key (fkVotacao) references votacao (idVotacao),
acessoJogos boolean default 0
);

	

create table mensalidade (
fkUsuario int,
idMensalidade int,
primary key (fkUsuario, idMensalidade),
dataMensalidade date,
dataVencimento date,
valor decimal (5,2)
);

CREATE TABLE aviso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(250),
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

select count(idUsuario) as QtdVotos, nomeCategoria from Usuario inner join votacao on fkVotacao = idVotacao GROUP BY idVotacao ORDER BY idVotacao;

DESC Usuario;

insert into votacao(nomeCategoria) value 
('Isekai'),
('Comédia'),
('Aventura'),
('Romance'),
('slice of life'),
('Mistério'),
('Drama'),
('Sci-Fi');


select * from votacao;

select * from aviso;

select * from Usuario;


select nomeCategoria, count(idUsuario) as QtdVotos from Usuario, votacao where FkVotacao = idvotacao GROUP BY fkVotacao ORDER BY fkVotacao;