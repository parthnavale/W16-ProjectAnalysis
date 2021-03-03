-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2021 at 12:02 AM
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
-- Table structure for table `institutions`
--

CREATE TABLE IF NOT EXISTS `institutions` (
  `institudeId` int(3) NOT NULL AUTO_INCREMENT,
  `institutionName` varchar(100) NOT NULL,
  `institutionLocation` varchar(100) NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`institudeId`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `institutions`
--

INSERT INTO `institutions` (`institudeId`, `institutionName`, `institutionLocation`, `dateCreated`) VALUES
(1, 'Auburn University at Montgomery', 'Alabama, USA', '2021-03-01 05:00:00'),
(4, 'Birmingham Southern College', 'Alabama, USA', '2021-03-01 05:00:00'),
(5, 'Jacksonville State University', 'Alabama, USA', '2021-03-01 20:49:57'),
(6, 'Oakwood University', 'Alabama, USA', '2021-03-01 20:49:57'),
(7, 'Instituto Tecnológico de Buenos Aires', 'Argentina', '2021-03-01 20:50:57'),
(8, 'Universidad Católica de Salta *', 'Argentina', '2021-03-01 20:50:57'),
(9, 'Brock University', 'Canada', '2021-03-01 20:51:55'),
(10, 'Burman University', 'Canada', '2021-03-01 20:51:55'),
(11, 'Canadian Mennonite University', 'Canada', '2021-03-01 20:52:33'),
(12, 'Cambrian College', 'Canada', '2021-03-01 20:52:33'),
(13, 'Centennial College', 'Canada', '2021-03-01 20:53:20'),
(14, 'City University of Seattle, Canada', 'Canada', '2021-03-01 20:53:20'),
(15, 'University of Alberta', 'Canada', '2021-03-01 20:54:23'),
(16, 'University of British Columbia, Okanagan campus - Postgraduate', 'Canada', '2021-03-01 20:54:23'),
(17, 'University of Calgary', 'Canada', '2021-03-01 20:54:56'),
(18, 'University of Guelph', 'Canada', '2021-03-01 20:54:56'),
(19, 'University of Regina - Graduate', 'Canada', '2021-03-01 20:55:29'),
(20, 'University of Saskatchewan - Graduate', 'Canada', '2021-03-01 20:55:29'),
(21, 'Vancouver Island University', 'Canada', '2021-03-01 20:55:58'),
(22, 'University of Windsor', 'Canada', '2021-03-01 20:55:58'),
(23, 'Yorkville University', 'Canada', '2021-03-01 20:56:40'),
(24, 'York University Graduate Programs', 'Canada', '2021-03-01 20:56:40');

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE IF NOT EXISTS `result` (
  `resultId` int(3) NOT NULL AUTO_INCREMENT,
  `grade` float NOT NULL,
  `userId` int(3) NOT NULL,
  `isPractice` tinyint(1) NOT NULL DEFAULT 1,
  `createdDate` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`resultId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `useranswers`
--

CREATE TABLE IF NOT EXISTS `useranswers` (
  `answerId` int(3) NOT NULL AUTO_INCREMENT,
  `userId` int(3) NOT NULL,
  `userAnswer` varchar(100) NOT NULL,
  `created` date NOT NULL,
  PRIMARY KEY (`answerId`),
  KEY `userId` (`userId`)
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
  `isPurchased` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `fullName`, `password`, `address`, `dob`, `email`, `image`, `userCreated`, `userModified`, `isPurchased`) VALUES
(1, 'admin', 'admin', 'abcd', '1997-12-23', 'admin@gmail.com', '', '2021-02-22', NULL, 1),
(2, 'user', 'user', 'dcba', '1997-12-23', 'user@gmail.com', '', '2021-02-22', NULL, 0),
(5, 'Test User', 'test', 'AV Van Horne', '1995-01-12', 'test@gmail.com', 'null', '2021-03-02', NULL, 0);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `useranswers`
--
ALTER TABLE `useranswers`
  ADD CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
