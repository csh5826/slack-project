# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.7.29)
# Database: slack-project.sql
# Generation Time: 2020-10-21 18:30:11 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table channels
# ------------------------------------------------------------

DROP TABLE IF EXISTS `channels`;

CREATE TABLE `channels` (
  `channel_Id` int(11) NOT NULL,
  `channelName` char(11) DEFAULT NULL,
  `firstUser_Id` int(11) DEFAULT NULL,
  `secondUser_Id` int(11) DEFAULT NULL,
  PRIMARY KEY (`channel_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `channels` WRITE;
/*!40000 ALTER TABLE `channels` DISABLE KEYS */;

INSERT INTO `channels` (`channel_Id`, `channelName`, `firstUser_Id`, `secondUser_Id`)
VALUES
	(101,'General',NULL,NULL),
	(102,'Javascript',NULL,NULL),
	(103,'Clark/Jim',1,3),
	(104,'Daniel/PJ',2,4);

/*!40000 ALTER TABLE `channels` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table messages
# ------------------------------------------------------------

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `message_Id` int(11) NOT NULL,
  `channel_Id` int(11) DEFAULT NULL,
  `user_Id` int(11) DEFAULT NULL,
  `content` text,
  `timestamp` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`message_Id`),
  KEY `user_ID` (`user_Id`),
  KEY `channel_ID` (`channel_Id`),
  CONSTRAINT `channel_ID` FOREIGN KEY (`channel_Id`) REFERENCES `channels` (`channel_Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_ID` FOREIGN KEY (`user_Id`) REFERENCES `users` (`user_Id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;

INSERT INTO `messages` (`message_Id`, `channel_Id`, `user_Id`, `content`, `timestamp`)
VALUES
	(1,101,1,'\"Welcome to General!\"',NULL),
	(2,101,2,'\"Thank you!\n',NULL),
	(3,102,3,'\"I love Javascript!\"',NULL),
	(4,102,4,'\"It is so fun to learn\"',NULL),
	(5,103,1,'\"Hi, my name is Clark\"',NULL),
	(6,103,3,'\"hey man, I\'m Jim\"',NULL),
	(7,104,2,'\"i\'m so into learning guitar\"',NULL),
	(8,104,4,'\"i know\"',NULL);

/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_Id` int(11) NOT NULL,
  `username` char(25) DEFAULT NULL,
  `active` binary(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`user_Id`, `username`, `active`)
VALUES
	(1,'Clark',X'30'),
	(2,'Daniel',X'30'),
	(3,'Jim',X'30'),
	(4,'PJ',X'30'),
	(5,'Aissa',X'30'),
	(18837,'frank',X'31'),
	(26630,'frank',X'31');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
