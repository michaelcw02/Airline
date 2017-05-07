-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  `lastname1` VARCHAR(20) NOT NULL,
  `lastname2` VARCHAR(20) NOT NULL,
  `email` VARCHAR(40) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `celular` VARCHAR(20) NOT NULL,
  `address` VARCHAR(50) NOT NULL,
  `birthday` DATE NOT NULL,
  `administrator` TINYINT(1) NOT NULL,
  `cliente` TINYINT(1) NOT NULL,
  PRIMARY KEY (`username`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`TypeAirplane`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`TypeAirplane` (
  `type_airline` VARCHAR(20) NOT NULL,
  `year` VARCHAR(4) NOT NULL,
  `brand` VARCHAR(20) NOT NULL,
  `qty_of_seats` INT NOT NULL,
  `qty_of_rows` INT NOT NULL,
  `seats_per_row` INT NOT NULL,
  PRIMARY KEY (`type_airline`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Airplane`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Airplane` (
  `id_airplane` VARCHAR(20) NOT NULL,
  `type_airplane` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_airplane`),
  INDEX `type_airplane_idx` (`type_airplane` ASC),
  CONSTRAINT `type_airplane`
    FOREIGN KEY (`type_airplane`)
    REFERENCES `mydb`.`TypeAirplane` (`type_airline`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`City`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`City` (
  `id_city` VARCHAR(20) NOT NULL,
  `name_city` VARCHAR(20) NOT NULL,
  `country` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_city`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Trip`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Trip` (
  `id_trip` VARCHAR(20) NOT NULL,
  `distance` INT NOT NULL,
  `duration` INT NOT NULL,
  `departure_city` VARCHAR(20) NOT NULL,
  `arrival_city` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_trip`),
  INDEX `departure_city_idx` (`departure_city` ASC),
  INDEX `arrival_city_idx` (`arrival_city` ASC),
  CONSTRAINT `departure_city`
    FOREIGN KEY (`departure_city`)
    REFERENCES `mydb`.`City` (`id_city`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `arrival_city`
    FOREIGN KEY (`arrival_city`)
    REFERENCES `mydb`.`City` (`id_city`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Flight`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Flight` (
  `flight_num` VARCHAR(10) NOT NULL,
  `cost` INT NOT NULL,
  `departure_date` MEDIUMTEXT NOT NULL,
  `arrival_date` MEDIUMTEXT NOT NULL,
  `available_seats` INT NOT NULL,
  `id_trip` VARCHAR(255) NOT NULL,
  `id_airplane` VARCHAR(255) NOT NULL,
  `discount` INT NULL,
  `discount_description` VARCHAR(45) NULL,
  `discount_image_path` VARCHAR(45) NULL,
  PRIMARY KEY (`flight_num`),
  INDEX `id_airplane_idx` (`id_airplane` ASC),
  INDEX `id_trip_idx` (`id_trip` ASC),
  CONSTRAINT `fk_flight1`
    FOREIGN KEY (`id_airplane`)
    REFERENCES `mydb`.`Airplane` (`id_airplane`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_flight2`
    FOREIGN KEY (`id_trip`)
    REFERENCES `mydb`.`Trip` (`id_trip`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ticket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Ticket` (
  `ticket_num` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(20) NOT NULL,
  `flight_num` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`ticket_num`),
  INDEX `id_user_idx` (`user_id` ASC),
  INDEX `flight_num_idx` (`flight_num` ASC),
  CONSTRAINT `fk_ticket1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`User` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ticket2`
    FOREIGN KEY (`flight_num`)
    REFERENCES `mydb`.`Flight` (`flight_num`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Passenger`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Passenger` (
  `passport` VARCHAR(20) NOT NULL,
  `ticket_num` INT NOT NULL,
  `name` VARCHAR(20) NULL,
  `lastname` VARCHAR(20) NULL,
  `seat` VARCHAR(5) NULL,
  `Passengercol` VARCHAR(45) NULL,
  PRIMARY KEY (`passport`, `ticket_num`),
  INDEX `ticket_num_idx` (`ticket_num` ASC),
  CONSTRAINT `fk_passenger1`
    FOREIGN KEY (`ticket_num`)
    REFERENCES `mydb`.`Ticket` (`ticket_num`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


--INSERT USER
INSERT INTO `mydb`.`user` (`username`, `password`, `name`, `lastname1`, `lastname2`, `email`, `phone`, `celular`, `address`, `birthday`, `administrator`, `cliente`) 
VALUES ('superuser', 'superuser', 'Sistemas', 'Ingenieria', 'UNA', 'superuser@est.una.ac.cr', '22334455', '88776655', 'Lagunilla, Heredia', '02/01/1996', '1', '1');

--INSERT TYPE/PLANE
--QTY SEATS IS ACTUAL, QTY OF ROWS IS NOT.
INSERT INTO `mydb`.`typeairplane` (`type_airline`, `year`, `brand`, `qty_of_seats`, `qty_of_rows`, `seats_per_row`) 
VALUES ('A380-800', '2013', 'AIRBUS', '489', '88', '9');

--INSERT PLANE
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A001', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A002', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A003', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A004', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A005', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A006', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A007', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A008', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A009', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A010', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A011', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A012', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A013', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A014', 'A380-800');
INSERT INTO `mydb`.`airplane` (`id_airplane`, `type_airplane`) VALUES ('A015', 'A380-800');


