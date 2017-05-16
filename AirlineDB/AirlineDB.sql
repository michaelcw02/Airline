-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema airlinedb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema airlinedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `airlinedb` DEFAULT CHARACTER SET utf8 ;
USE `airlinedb` ;

-- -----------------------------------------------------
-- Table `airlinedb`.`typeairplane`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airlinedb`.`typeairplane` (
  `type_airline` VARCHAR(20) NOT NULL,
  `year` VARCHAR(4) NOT NULL,
  `brand` VARCHAR(20) NOT NULL,
  `qty_of_seats` INT(11) NOT NULL,
  `qty_of_rows` INT(11) NOT NULL,
  `seats_per_row` INT(11) NOT NULL,
  PRIMARY KEY (`type_airline`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `airlinedb`.`airplane`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airlinedb`.`airplane` (
  `id_airplane` VARCHAR(20) NOT NULL,
  `type_airplane` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_airplane`),
  INDEX `type_airplane_idx` (`type_airplane` ASC),
  CONSTRAINT `type_airplane`
    FOREIGN KEY (`type_airplane`)
    REFERENCES `airlinedb`.`typeairplane` (`type_airline`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `airlinedb`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airlinedb`.`city` (
  `code` VARCHAR(3) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  `country` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`code`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `airlinedb`.`trip`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airlinedb`.`trip` (
  `id_trip` INT(11) NOT NULL AUTO_INCREMENT,
  `distance` INT(11) NOT NULL,
  `duration` INT(11) NOT NULL,
  `departure_city` VARCHAR(3) NOT NULL,
  `arrival_city` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`id_trip`),
  INDEX `departure_city_idx` (`departure_city` ASC),
  INDEX `arrival_city_idx` (`arrival_city` ASC),
  CONSTRAINT `arrival_city`
    FOREIGN KEY (`arrival_city`)
    REFERENCES `airlinedb`.`city` (`code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `departure_city`
    FOREIGN KEY (`departure_city`)
    REFERENCES `airlinedb`.`city` (`code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `airlinedb`.`flight`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airlinedb`.`flight` (
  `flight_num` VARCHAR(10) NOT NULL,
  `cost` INT(11) NOT NULL,
  `departure_date` MEDIUMTEXT NOT NULL,
  `available_seats` INT(11) NOT NULL,
  `id_trip` INT(11) NOT NULL,
  `id_airplane` VARCHAR(20) NOT NULL,
  `discount` INT(11) NULL DEFAULT NULL,
  `discount_description` VARCHAR(45) NULL DEFAULT NULL,
  `discount_image_path` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`flight_num`),
  INDEX `id_airplane_idx` (`id_airplane` ASC),
  INDEX `id_trip_idx` (`id_trip` ASC),
  CONSTRAINT `fk_flight1`
    FOREIGN KEY (`id_airplane`)
    REFERENCES `airlinedb`.`airplane` (`id_airplane`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_flight2`
    FOREIGN KEY (`id_trip`)
    REFERENCES `airlinedb`.`trip` (`id_trip`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `airlinedb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airlinedb`.`user` (
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
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `airlinedb`.`ticket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airlinedb`.`ticket` (
  `number` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL,
  `flight_num` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`number`),
  INDEX `id_user_idx` (`username` ASC),
  INDEX `flight_num_idx` (`flight_num` ASC),
  CONSTRAINT `fk_ticket1`
    FOREIGN KEY (`username`)
    REFERENCES `airlinedb`.`user` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ticket2`
    FOREIGN KEY (`flight_num`)
    REFERENCES `airlinedb`.`flight` (`flight_num`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `airlinedb`.`passenger`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airlinedb`.`passenger` (
  `passport` VARCHAR(20) NOT NULL,
  `ticket_num` INT(11) NOT NULL,
  `name` VARCHAR(20) NULL DEFAULT NULL,
  `lastname` VARCHAR(20) NULL DEFAULT NULL,
  `seat` VARCHAR(5) NULL DEFAULT NULL,
  PRIMARY KEY (`passport`, `ticket_num`),
  INDEX `ticket_num_idx` (`ticket_num` ASC),
  CONSTRAINT `fk_passenger1`
    FOREIGN KEY (`ticket_num`)
    REFERENCES `airlinedb`.`ticket` (`number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
