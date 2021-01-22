CREATE TABLE Mission (
		id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL UNIQUE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    modulo INT NOT NULL
);

CREATE TABLE Student (
		id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    birthdate DATE NOT NULL,
    mission_id INT NOT NULL, FOREIGN KEY (mission_id) REFERENCES Mission(id) );


CREATE TABLE Teacher (
		id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    birthdate DATE NOT NULL,
    mission_id INT NOT NULL, FOREIGN KEY (mission_id) REFERENCES Mission(id) );    



CREATE TABLE Hobby (
		id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
    
);

CREATE TABLE Student_Hobby (
        student_id INT NOT NULL, FOREIGN KEY (student_id) REFERENCES Student(id),
        hobby_id INT NOT NULL, FOREIGN KEY (hobby_id) REFERENCES Hobby(id),
		   PRIMARY KEY (student_id, hobby_id) 
);

CREATE TABLE Specialty (
		id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
    
);

CREATE TABLE Teacher_Specialty (
        teacher_id INT NOT NULL, FOREIGN KEY (teacher_id) REFERENCES Teacher(id),
        specialty_id INT NOT NULL, FOREIGN KEY (specialty_id) REFERENCES Specialty(id),
		    PRIMARY KEY (teacher_id, specialty_id)
);

INSERT INTO Mission (`name`,`start_date`,`end_date`,`modulo`) VALUES ('Jackson','2020-07-1','2021-01-15','7');
INSERT INTO Mission (`name`,`start_date`,`end_date`,`modulo`) VALUES ('Tang','2020-08-1','2021-02-15','3');

SELECT * FROM Mission;