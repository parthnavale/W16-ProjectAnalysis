-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2021 at 11:48 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `examination_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE IF NOT EXISTS `options` (
  `optionId` int(3) NOT NULL AUTO_INCREMENT,
  `option` varchar(50) NOT NULL,
  `created` date NOT NULL,
  `modified` date DEFAULT NULL,
  PRIMARY KEY (`optionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `questionoptions`
--

CREATE TABLE IF NOT EXISTS `questionoptions` (
  `quesOptionId` int(3) NOT NULL AUTO_INCREMENT,
  `quesId` int(3) NOT NULL,
  `optionId` int(3) NOT NULL,
  `created` date NOT NULL,
  `modified` date DEFAULT NULL,
  PRIMARY KEY (`quesOptionId`),
  KEY `quesId` (`quesId`),
  KEY `quesId_2` (`quesId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE IF NOT EXISTS `questions` (
  `quesId` int(3) NOT NULL AUTO_INCREMENT,
  `question` varchar(100) NOT NULL,
  `created` date NOT NULL,
  `modified` date DEFAULT NULL,
  PRIMARY KEY (`quesId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE IF NOT EXISTS `result` (
  `resultId` int(3) NOT NULL AUTO_INCREMENT,
  `grade` int(3) NOT NULL,
  `userId` int(3) NOT NULL,
  PRIMARY KEY (`resultId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rightansweroption`
--

CREATE TABLE IF NOT EXISTS `rightansweroption` (
  `answerId` int(3) NOT NULL AUTO_INCREMENT,
  `quesId` int(3) NOT NULL,
  `optionId` int(3) NOT NULL,
  `created` date NOT NULL,
  `modified` date DEFAULT NULL,
  PRIMARY KEY (`answerId`),
  KEY `quesId` (`quesId`),
  KEY `optionId` (`optionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE IF NOT EXISTS `subjects` (
  `subjectId` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `test fees` int(10) NOT NULL,
  PRIMARY KEY (`subjectId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`subjectId`, `name`, `test fees`) VALUES
(1, 'English', 100),
(2, 'Mathematics', 150),
(3, 'General Knowledge', 120),
(4, 'Science', 140);

-- --------------------------------------------------------

--
-- Table structure for table `useranswers`
--

CREATE TABLE IF NOT EXISTS `useranswers` (
  `userAnswerId` int(3) NOT NULL AUTO_INCREMENT,
  `userId` int(3) NOT NULL,
  `selectedOptionId` int(3) NOT NULL,
  `quesId` int(3) NOT NULL,
  `created` date NOT NULL,
  `modified` date DEFAULT NULL,
  PRIMARY KEY (`userAnswerId`),
  KEY `userId` (`userId`),
  KEY `answer` (`selectedOptionId`),
  KEY `quesId` (`quesId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `userId` int(3) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `email` varchar(20) NOT NULL,
  `image` text NOT NULL,
  `userCreated` date NOT NULL,
  `userModified` date DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `fullName`, `password`, `address`, `dob`, `email`, `image`, `userCreated`, `userModified`) VALUES
(1, 'admin', 'admin', 'abcd', '1997-12-23', 'admin@gmail.com', '', '2021-02-22', NULL),
(2, 'user', 'user', 'dcba', '1997-12-23', 'user@gmail.com', '', '2021-02-22', NULL);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `questionoptions`
--
ALTER TABLE `questionoptions`
  ADD CONSTRAINT `questionId` FOREIGN KEY (`quesId`) REFERENCES `questions` (`quesId`);

--
-- Constraints for table `rightansweroption`
--
ALTER TABLE `rightansweroption`
  ADD CONSTRAINT `optionId` FOREIGN KEY (`optionId`) REFERENCES `options` (`optionId`),
  ADD CONSTRAINT `quesId` FOREIGN KEY (`quesId`) REFERENCES `questions` (`quesId`);

--
-- Constraints for table `useranswers`
--
ALTER TABLE `useranswers`
  ADD CONSTRAINT `answer` FOREIGN KEY (`selectedOptionId`) REFERENCES `options` (`optionId`),
  ADD CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`),
  ADD CONSTRAINT `useranswers_ibfk_1` FOREIGN KEY (`quesId`) REFERENCES `questions` (`quesId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
