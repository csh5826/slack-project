# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: us-cdbr-east-02.cleardb.com (MySQL 5.5.62-log)
# Database: heroku_87415cfbb182aa9
# Generation Time: 2020-11-21 13:48:52 +0000
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
  `channelName` char(35) DEFAULT NULL,
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
	(103,'Ice cream',1,3),
	(104,'React/redux',2,4),
	(105,'Firecrackers',1,2);

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
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
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
	(3,102,3,'I love Javascript!',NULL),
	(6,103,3,'hey man, I am jim',NULL),
	(7,104,2,'I am so into learning guitar',NULL),
	(87,105,3,'Can\'t wait to see it, man','2020-11-04 17:02:27'),
	(1201,101,42905,'Hey Pj!','2020-11-04 17:16:24'),
	(9876,105,2,'I got a sweet fountain firework last weekend!','2020-11-04 17:01:48'),
	(13697,101,29618,'hi guys!','2020-11-04 17:16:34'),
	(15627,101,2,'what is the latest?','2020-10-22 12:24:13'),
	(30490,101,3,'I just went snowboarding!','2020-10-22 12:25:24'),
	(36052,101,4630,'Hey, friends!  Whats up!?','2020-11-04 17:16:22'),
	(47032,104,4630,'Hello! This is in React!','2020-11-04 17:16:52');

/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_Id` int(11) NOT NULL,
  `username` char(25) DEFAULT NULL,
  `active` int(11) NOT NULL DEFAULT '0',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`user_Id`, `username`, `active`, `timestamp`)
VALUES
	(2,'Daniel',0,'2020-10-22 12:44:47'),
	(3,'Jim',0,'2020-10-22 12:44:47'),
	(4630,'PJ',0,'2020-11-04 17:16:07'),
	(29618,'Aissa',1,'2020-11-04 17:08:28'),
	(42905,'Clark',1,'2020-11-04 17:07:00');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
