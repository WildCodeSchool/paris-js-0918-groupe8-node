-- MySQL Workbench Synchronization
-- Generated: 2018-12-06 12:16
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Monica TARABUSI

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

ALTER TABLE `conteurDigitalDB`.`comment` 
DROP FOREIGN KEY `fk_comment_admin`;

ALTER TABLE `conteurDigitalDB`.`comment` 
DROP COLUMN `admin_id_user`,
DROP PRIMARY KEY,
ADD PRIMARY KEY (`id_comment`, `article_id_article`),
DROP INDEX `fk_comment_admin_idx` ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
