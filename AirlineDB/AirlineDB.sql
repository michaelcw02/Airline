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
  `departure_time` INT NOT NULL,
  `departure_day` VARCHAR(10) NOT NULL,
  `cost` INT NOT NULL,
  `discount` INT NOT NULL,
  `discount_description` VARCHAR(45) NOT NULL,
  `discount_image_path` VARCHAR(45) NOT NULL,
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
  `departure_date` DATE NOT NULL,
  `available_seats` INT(11) NOT NULL,
  `id_trip` INT(11) NOT NULL,
  `id_airplane` VARCHAR(20) NOT NULL,
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


INSERT INTO TYPEAIRPLANE VALUES ('A380-800', '2009', 'Airbus', '800', '88', '9');

INSERT INTO airplane VALUES ('ASA-001', 'A380-800');
INSERT INTO airplane VALUES ('ASA-002', 'A380-800');
INSERT INTO airplane VALUES ('ASA-003', 'A380-800');
INSERT INTO airplane VALUES ('ASA-004', 'A380-800');
INSERT INTO airplane VALUES ('ASA-005', 'A380-800');
INSERT INTO airplane VALUES ('ASA-006', 'A380-800');
INSERT INTO airplane VALUES ('ASA-007', 'A380-800');
INSERT INTO airplane VALUES ('ASA-008', 'A380-800');
INSERT INTO airplane VALUES ('ASA-009', 'A380-800');
INSERT INTO airplane VALUES ('ASA-010', 'A380-800');
INSERT INTO airplane VALUES ('ASA-011', 'A380-800');
INSERT INTO airplane VALUES ('ASA-012', 'A380-800');
INSERT INTO airplane VALUES ('ASA-013', 'A380-800');
INSERT INTO airplane VALUES ('ASA-014', 'A380-800');
INSERT INTO airplane VALUES ('ASA-015', 'A380-800');
INSERT INTO airplane VALUES ('ASA-016', 'A380-800');
INSERT INTO airplane VALUES ('ASA-017', 'A380-800');
INSERT INTO airplane VALUES ('ASA-018', 'A380-800');
INSERT INTO airplane VALUES ('ASA-019', 'A380-800');
INSERT INTO airplane VALUES ('ASA-020', 'A380-800');
INSERT INTO airplane VALUES ('ASA-021', 'A380-800');
INSERT INTO airplane VALUES ('ASA-022', 'A380-800');
INSERT INTO airplane VALUES ('ASA-023', 'A380-800');
INSERT INTO airplane VALUES ('ASA-024', 'A380-800');
INSERT INTO airplane VALUES ('ASA-025', 'A380-800');
INSERT INTO airplane VALUES ('ASA-026', 'A380-800');
INSERT INTO airplane VALUES ('ASA-027', 'A380-800');
INSERT INTO airplane VALUES ('ASA-028', 'A380-800');
INSERT INTO airplane VALUES ('ASA-029', 'A380-800');
INSERT INTO airplane VALUES ('ASA-030', 'A380-800');
INSERT INTO airplane VALUES ('ASA-031', 'A380-800');
INSERT INTO airplane VALUES ('ASA-032', 'A380-800');
INSERT INTO airplane VALUES ('ASA-033', 'A380-800');
INSERT INTO airplane VALUES ('ASA-034', 'A380-800');
INSERT INTO airplane VALUES ('ASA-035', 'A380-800');
INSERT INTO airplane VALUES ('ASA-036', 'A380-800');
INSERT INTO airplane VALUES ('ASA-037', 'A380-800');
INSERT INTO airplane VALUES ('ASA-038', 'A380-800');
INSERT INTO airplane VALUES ('ASA-039', 'A380-800');
INSERT INTO airplane VALUES ('ASA-040', 'A380-800');
INSERT INTO airplane VALUES ('ASA-041', 'A380-800');
INSERT INTO airplane VALUES ('ASA-042', 'A380-800');
INSERT INTO airplane VALUES ('ASA-043', 'A380-800');
INSERT INTO airplane VALUES ('ASA-044', 'A380-800');
INSERT INTO airplane VALUES ('ASA-045', 'A380-800');
INSERT INTO airplane VALUES ('ASA-046', 'A380-800');
INSERT INTO airplane VALUES ('ASA-047', 'A380-800');
INSERT INTO airplane VALUES ('ASA-048', 'A380-800');
INSERT INTO airplane VALUES ('ASA-049', 'A380-800');
INSERT INTO airplane VALUES ('ASA-050', 'A380-800');
INSERT INTO airplane VALUES ('ASA-051', 'A380-800');
INSERT INTO airplane VALUES ('ASA-052', 'A380-800');
INSERT INTO airplane VALUES ('ASA-053', 'A380-800');
INSERT INTO airplane VALUES ('ASA-054', 'A380-800');

INSERT INTO city (`code`, `name`, `country`) VALUES ('SJO', 'San Jose', 'Costa Rica');
INSERT INTO city (`code`, `name`, `country`) VALUES ('LAX', 'Los Angeles', 'United States');
INSERT INTO city (`code`, `name`, `country`) VALUES ('BOS', 'Boston', 'United States');
INSERT INTO city (`code`, `name`, `country`) VALUES ('MIA', 'Miami', 'United States');
INSERT INTO city (`code`, `name`, `country`) VALUES ('ATL', 'Atlanta', 'United States');
INSERT INTO city (`code`, `name`, `country`) VALUES ('JFK', 'New York', 'United States');
INSERT INTO city (`code`, `name`, `country`) VALUES ('TPE', 'Taipei', 'Taiwan');
INSERT INTO city (`code`, `name`, `country`) VALUES ('LHR', 'London', 'United Kingdom');
INSERT INTO city (`code`, `name`, `country`) VALUES ('NRT', 'Narita', 'Japan');
INSERT INTO city (`code`, `name`, `country`) VALUES ('CCS', 'Caracas', 'Venezuela');

INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('344', '383', 'SJO', 'ATL', '4', 'MONDAY', 750, 0, 'Have you thought about Atlanta?', 'images/background-5.jpg');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('344', '383', 'ATL', 'SJO', '10', 'TUESDAY', 750, 0, 'None', 'None');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('222', '379', 'SJO', 'BOS', '5', 'WEDNESDAY', 750, 0, 'Let us take you to Boston!', 'images/background-6.jpg');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('222', '379', 'BOS', 'SJO', '9', 'THURSDAY', 750, 0, 'None', 'None');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('429', '865', 'SJO', 'CCS', '6', 'FRIDAY', 750, 0, 'None', 'None');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('429', '865', 'CCS', 'SJO', '14', 'SATURDAY', 750, 0, 'None', 'None');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('318', '743', 'SJO', 'JFK', '7', 'SUNDAY', 750, 0, 'The City That Never Sleeps?', 'images/background-17.jpg');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('318', '743', 'JFK', 'SJO', '13', 'MONDAY', 750, 0, 'None', 'None');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('301', '739', 'SJO', 'LAX', '8', 'TUESDAY', 750, 0, 'Let\'s go to Los Angeles!', 'images/background-3.jpg');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('301', '739', 'LAX', 'SJO', '14', 'WEDNESDAY', 750, 0, 'None', 'None');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('444', '653', 'SJO', 'LHR', '9', 'THURSDAY', 750, 0, 'How about London?', 'images/background-1.jpg');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('444', '653', 'LHR', 'SJO', '17', 'FRIDAY', 750, 0, 'None', 'None');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('303', '798', 'SJO', 'MIA', '10', 'SATURDAY', 750, 0, 'Wanna go to Miami?', 'images/background-2.jpg');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('303', '798', 'MIA', 'SJO', '16', 'SUNDAY', 750, 0, 'None', 'None');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('351', '1078', 'SJO', 'NRT', '11', 'MONDAY', 750, 0, 'None', 'None');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('351', '1078', 'NRT', 'SJO', '17', 'TUESDAY', 750, 0, 'None', 'None');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('293', '894', 'SJO', 'TPE', '13', 'WEDNESDAY', 750, 0, 'Taipei is just Amazing!', 'images/background-17.jpg');
INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('293', '894', 'TPE', 'SJO', '18', 'THURSDAY', 750, 0, 'None', 'None');


INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST001', 'ASA-001', 1, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST002', 'ASA-002', 1, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST003', 'ASA-003', 1, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST004', 'ASA-004', 2, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST005', 'ASA-005', 2, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST006', 'ASA-006', 2, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST007', 'ASA-007', 3, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST008', 'ASA-008', 3, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST009', 'ASA-009', 3, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST010', 'ASA-010', 4, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST011', 'ASA-011', 4, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST012', 'ASA-012', 4, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST013', 'ASA-013', 5, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST014', 'ASA-014', 5, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST015', 'ASA-015', 5, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST016', 'ASA-016', 6, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST017', 'ASA-017', 6, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST018', 'ASA-018', 6, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST019', 'ASA-019', 7, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST020', 'ASA-020', 7, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST021', 'ASA-021', 7, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST022', 'ASA-022', 8, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST023', 'ASA-023', 8, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST024', 'ASA-024', 8, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST025', 'ASA-025', 9, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST026', 'ASA-026', 9, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST027', 'ASA-027', 9, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST028', 'ASA-028', 10, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST029', 'ASA-029', 10, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST030', 'ASA-030', 10, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST031', 'ASA-031', 11, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST032', 'ASA-032', 11, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST033', 'ASA-033', 11, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST034', 'ASA-034', 12, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST035', 'ASA-035', 12, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST036', 'ASA-036', 12, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST037', 'ASA-037', 13, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST038', 'ASA-038', 13, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST039', 'ASA-039', 13, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST040', 'ASA-040', 14, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST041', 'ASA-041', 14, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST042', 'ASA-042', 14, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST043', 'ASA-043', 15, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST044', 'ASA-044', 15, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST045', 'ASA-045', 15, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST046', 'ASA-046', 16, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST047', 'ASA-047', 16, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST048', 'ASA-048', 16, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST049', 'ASA-049', 17, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST050', 'ASA-050', 17, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST051', 'ASA-051', 17, '2017-07-03', 800);

INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST052', 'ASA-052', 18, '2017-07-01', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST053', 'ASA-053', 18, '2017-07-02', 800);
INSERT INTO flight(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`) VALUES ('ST054', 'ASA-054', 18, '2017-07-03', 800);
