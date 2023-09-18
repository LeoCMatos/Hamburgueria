CREATE DATABASE  IF NOT EXISTS `hamburgueria` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hamburgueria`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: hamburgueria
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hamburguers`
--

DROP TABLE IF EXISTS `hamburguers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hamburguers` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(255) NOT NULL,
  `Descricao` text,
  `Preco` decimal(8,2) NOT NULL,
  `Categoria` varchar(50) DEFAULT NULL,
  `Ingredientes` text,
  `Imagem` varchar(255) DEFAULT NULL,
  `Tempo_Preparo` int DEFAULT NULL,
  `Disponibilidade` tinyint(1) DEFAULT NULL,
  `Opcoes_Acompanhamento` text,
  `Avaliacao` decimal(3,2) DEFAULT NULL,
  `Calorias` int DEFAULT NULL,
  `promocao_do_dia` varchar(255) NOT NULL DEFAULT '',
  `NaoFinalizado` int DEFAULT NULL,
  `Promocao` decimal(10,2) DEFAULT '10.00',
  `Ativar_Promocao` int DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hamburguers`
--

LOCK TABLES `hamburguers` WRITE;
/*!40000 ALTER TABLE `hamburguers` DISABLE KEYS */;
INSERT INTO `hamburguers` VALUES (1,'Hambúrguer Especial','Nosso Hambúrguer Especial ele é preparado com ingredientes de alta qualidade, que se combinam para criar uma explosão de sabor.',25.50,'Lanches','Carne premium, queijo gourmet, cogumelos trufados.','https://www.kcms.com.br/blog/wp-content/uploads/2022/03/cardapio-de-hamburgueria.jpg',1,1,'Batatas fritas',4.50,750,'Nenhum dia',1,21.00,0),(4,'Hambúrguer Exclusivo','O Hambúrguer Exclusivo é outra criação excepcional do nosso chef, projetado para satisfazer paladares exigentes.',27.90,'Lanches','Carne premium, queijo suíço, cogumelos selvagens.','https://s2-casavogue.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg',0,1,'Salada de rúcula e batatas assadas',4.70,790,'Nenhum dia',1,23.00,1),(7,'Hambúrguer Vegetariano','Uma opção saudável e deliciosa para os amantes de vegetais.',19.90,'Lanches','Hambúrguer de vegetais, queijo cheddar, alface, tomate, cebola roxa, maionese vegana.','https://s2.glbimg.com/jqfaCA6V4Yb2xgU1JzPD200Kaxk=/smart/e.glbimg.com/og/ed/f/original/2018/07/20/matilda_vegano_wellington_nemeth_1.jpg',0,1,'Batatas assadas',4.40,550,'Nenhum dia',1,100.00,1),(8,'Hambúrguer de Frango Grelhado','Uma alternativa saudável e saborosa com peito de frango grelhado.',21.50,'Lanches','Peito de frango grelhado, queijo suíço, alface, tomate, cebola caramelizada, maionese de ervas.','https://static.vecteezy.com/ti/fotos-gratis/p2/852721-hamburguer-com-frango-grelhado-foto.jpg',0,1,'Batatas rústicas',4.60,650,'Nenhum dia',1,123.00,1),(9,'Hambúrguer BBQ','Um hambúrguer suculento com sabor defumado e molho barbecue.',22.90,'Lanches','Carne de boi grelhada, queijo cheddar, bacon crocante, cebola caramelizada, molho barbecue.','https://s2.glbimg.com/J37rcGJSqqOBHXy7PtN1JGOCgww=/620x455/e.glbimg.com/og/ed/f/original/2020/09/03/bacon_burger_-_01.jpg',0,1,'Batatas fritas',4.75,780,'Nenhum dia',1,123.00,1);
/*!40000 ALTER TABLE `hamburguers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-18  9:39:09
