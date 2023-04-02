
USE freedb_grupo7;
CREATE TABLE projects (
	idprojects INT not null auto_increment primary key,
	name VARCHAR(100) not null,
    description VARCHAR(1024) not null,
    slogan VARCHAR(1024) not null,
    repo VARCHAR(1024) not null,
    demo VARCHAR(1024) not null,
    technologies VARCHAR(1024) not null,
	image LONGTEXT not null
    );
CREATE TABLE authors (
	idauthor INT not null auto_increment primary key,
    author VARCHAR(1024) not null,
    job VARCHAR(1024) not null,
    image LONGTEXT not null
    );
    
    
    
INSERT INTO projects (name, description, slogan, repo, demo, technologies, image)
-- Virginia
VALUES (
-- name
"Elaboración proyecto final",
-- descr
'Con este proyecto vamos a dar por concluido nuestro bootcamp de Adalab', 
-- slogan
'A por ello',
-- link repo
'https://github.com/Adalab/modulo-3-evaluacion-final-Virlucero ',
-- beta
'http://beta.adalab.es/modulo-3-evaluacion-final-Virlucero/',
-- tech stack
'react,HTML,SCSS', 
-- image
'https://www.freeimages.com/photo/christ-church-college-2-1380712'); 
INSERT INTO projects (name, description, slogan, repo, demo, technologies, image)
VALUES 
("Vexillologist", 
-- descr
'A site that is dedicated to providing information about the history, design, and symbolism of flags from around the world.', 
-- slogan
'Flags are fun!',
-- link repo
'https://github.com/irenemez/vexillologist', 
-- beta
'https://github.com/irenemez/vexillologist',
-- tech stack
'Github Pages, HTML, Sass, React', 
-- image
 'Image'); 
 INSERT INTO projects (name, description, slogan, repo, demo, technologies, image)
VALUES 
('Final evaluation project Harry Potter', 
-- descr
'Web application made with React for the final evaluation in Adalab bootcamp 2023 promo Salas', 
-- slogan
'My first app with React',
-- link repo
'https://github.com/Adalab/modulo-3-evaluacion-final-ErriGarcia', 
-- beta
'http://beta.adalab.es/modulo-3-evaluacion-final-ErriGarcia/',
-- tech stack
'Github Pages, HTML, Sass, React', 
-- image
 'Image'),
('Harry Potter', 
-- descr
'El propósito de este proyecto es el de poner en práctica todos los conocimientos adquiridos en el módulo del Bootcamp de Adalab de Programación Web.', 
-- slogan
'Magia potagia',
-- link repo
'https://github.com/patriciabog', 
-- beta
'http://beta.adalab.es/modulo-3-evaluacion-final-patriciabog/',
-- tech stack
'React,HTML,SCSS', 
-- image
 'https://www.freeimages.com/photo/candles-at-church-1641345'),
('Cocktail Search Application', 
-- descr
'This web application grant you access to a cocktail database. You can search cocktails by its name, mark and unmark them as favorites and storage them for later. These resuts will be kept in the local storage in case you want to retrieve them after closing this website.', 
-- slogan
'All your cocktail recipes',
-- link repo
'https://github.com/Adalab/modulo-2-evaluacion-final-AlmuLloret', 
-- beta
'http://beta.adalab.es/modulo-2-evaluacion-final-AlmuLloret/',
-- tech stack
'Github Pages, HTML, Sass, JS', 
-- image
 'https://user-images.githubusercontent.com/121821529/228499719-dc58096d-c440-4433-9826-ada55a519fbb.jpeg');

 SELECT * FROM projects; 
INSERT INTO authors (author, job, image)
VALUES 
('Virginia Lucero',
'Front-end developer', 
'?'),
('Irene Mezquita',
'Front-end developer', 
'?'),
('Enrica Garcia',
'Front-end developer', 
'?'),
('Patricia Montes',
'Front-end developer', 
'?'),
('Almudena Lloret',
'Front-end developer', 
'?');

ALTER TABLE projects 
ADD  fkIdAuthor INT not null; 

SELECT *
FROM authors inner join projects 
on authors.idauthor = projects.fkIdAuthor; 

 SELECT * FROM projects; 

 SELECT * FROM authors; 