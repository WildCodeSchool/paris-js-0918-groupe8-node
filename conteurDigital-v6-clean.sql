CREATE DATABASE  IF NOT EXISTS `conteurDigitalDB` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `conteurDigitalDB`;
-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: conteurDigitalDB
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.18.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastname` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mail` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `linkedin` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `twitter` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `instagram` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `password` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `avatar` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_right` enum('admin','user') COLLATE utf8_unicode_ci DEFAULT NULL,
  `bio_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bio_content_short` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bio_content` longtext COLLATE utf8_unicode_ci,
  `bio_picture` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Anaïs','Jaunay','a.jaunay@gmail.com','https://www.linkedin.com/in/anaisjaunay/','','https://anaisjaunay.fr/','2019-01-07 15:19:04','2019-01-30 12:09:06','000000','http://localhost:3001/public/images/avatarAnais.JPG','admin','Conteuse digital','Parler de ceux qui vivent leur métier comme un artisanat, redonnent de la valeur à tout ce que l’on consomme.','<h3>Header 1</h3>\n<h4>Header 2</h4>\n<h5>Header 3</h5>\n<h6>Header 4</h6>\n<p>Header 5</p>\n<p>paragraph</p>\n<p>Parler de ceux qui vivent leur m&eacute;tier comme un artisanat, redonnent de la valeur &agrave; tout ce que l&rsquo;on consomme Parce que les entreprises sont de formidables histoires collectives, parce que je suis une militante des contenus de qualit&eacute;, parce que pour faire ma part, je raconte les histoires de ceux qui se battent pour un entrepreneuriat et des projets respectueux des individus et de la plan&egrave;te. J&rsquo;ai eu une premi&egrave;re carri&egrave;re de 12 ann&eacute;es dans le journalisme (France&nbsp;2, Public S&eacute;nat, Europe&nbsp;1), la r&eacute;alisation de documentaires (Plan&egrave;te+, TV5 monde) et la sc&eacute;narisation. Il y a deux ans, j&rsquo;ai &eacute;crit la biographie de Robert Fabre, r&eacute;sistant dans le Vercors. Grande lectrice, passionn&eacute;e par les vies, les r&eacute;cits, j&rsquo;ai retrouv&eacute; l&agrave; une &eacute;vidence&nbsp;: le pouvoir des mots et des histoires. Aujourd&rsquo;hui les plus belles histoires, je les trouve aupr&egrave;s des entrepreneur(e)s. Parce que comme les Hommes, les entreprises sont des patrimoines, des petits mondes, aujourd&rsquo;hui je con&ccedil;ois les strat&eacute;gies &eacute;ditoriales et r&eacute;dige les contenus des entreprises. Je mets ma curiosit&eacute;, ma passion, mon talent au service d&rsquo;un storytelling qui renforcera et rendra unique l&rsquo;identit&eacute; de votre entreprise. Ambassadrice de l&rsquo;association Action\'elles&nbsp;: https://www.actionelles.fr/ Membre du collectif plus&nbsp;: http://plus.ecedi.fr/</p>','http://localhost:3001/public/images/bioAnaisCahier.jpg'),(2,'Mathias','Savary','videotelling@gmail.com','https://www.linkedin.com/in/mathias-savary-1a37a498/','https://twitter.com/videotelling_fr','','2019-01-07 15:19:28','2019-01-25 10:01:04','123456','http://localhost:3001/public/images/avatarMathias.JPG','admin','Conteur digital','La VRAIE disruption dans le marketing digital N’est PAS technologique. Elle vient de l’écrit. Elle est poétique !','Il était une fois...un rat\n\nAlors voilà : je suis un rat de bibliothèque. Quand j’étais au collège,  le métier que j’exerce aujourd’hui n’existait tout simplement pas.  Et moi, je ne savais pas trop ce que je voulais faire. J’aimais surtout lire  (environs 2 à 3 livres par semaine) et écrire.\n\nÀ l’époque, on m’a dit que le monde appartenait aux filières scientifiques et aux écoles de commerce.  Mais j’étais passionné et aussi très têtu. J’ai choisi de faire une terminal littéraire.\n\nJe pensais m’enfoncer dans une voie de garage. J’ai vraiment pensé que j’avais choisi  la mauvaise orientation. Et un jour, j’ai réalisé que j’étais arrivé quelque part.\n\nParce que, les amis, la VRAIE disruption dans le marketing digital N’est PAS technologique.  Elle vient de l’écrit. Elle est poétique !\n\nL’écriture n’est pas un loisir, c’est un métier\n\nPetit retour en arrière. J’ai commencé à écrire régulièrement à l’âge de 15 ans.  Régulièrement, ça veut dire toutes les semaines. Puis, tous les jours.\n\nJ’ai lu des dizaines de livres sur les techniques d’écriture. Et j’ai commencé à coller des règles de narration sur les murs de ma chambre. J’ai acheté des cahiers puis  j’ai écrit mes premières nouvelles sur un Mackintosh SE 1987.\n\n\n\nVous le trouvez moche ? En 1996, il trônait au milieu de mon bureau et c’était pour moi la 8e merveille du monde.\n\nC’est en 2008 que j’ai commencé à travailler sur la rédaction web.  J’étais inscrit sur différentes plateformes comme Greatcontent.com.  J’y ai appris le travail sur les mots clés, la capacité à écrire sur des sujets  très divers et la rapidité d’exécution.\n\nEn 2013, j’ai animé trois blogs sur la défiscalisation et les placements financiers.  J’y ai découvert le blogging.\n\nEn 2016, j’ai pu explorer la richesse de la rédaction web et du storytelling. J’ai fait :\n\n    des emails\n    des pages pour gagner la première page de Google (et j’ai souvent réussi à atteindre la première place !)\n    des articles de blogs (dont certains parus sur Maddyness, Frenchweb, Presse-citron, economiematin.com, etc.)\n    des publications sur les réseaux sociaux\n    des communiqués de presse\n    des scénarii pour des vidéos de promotion\n\nUn conteur digital\n\nLe storytelling et le SEO bénéficient aujourd’hui de l’apport des nouvelles technologies.  ça veut dire que le métier de conteur digital est de plus en plus technique.\n\nConcrètement comment je bosse ?\n\n1/au commencement était... le persona (le public cible)  !  Le marketing de masse est mort, vive la personnalisation !  Tout commence par découvrir quel est son public cible et tout ce que l’on sait de lui.  C’est l’alpha et l’oméga. C’est mon maître étalon.\n\n2/on passe alors à la phase d’exploration. Je me plonge à la découverte de  l’écosystème d’une thématique. Il existe beaucoup d’outils de mesure  (SEMrush, Similar web, Majestic SEO, Buzzsumo...) pour savoir ce qui marche vraiment.  Exit la boule de cristal... ou l’intuition du directeur artistique et place à la science.\n\n3/viens le moment de la création et l’application des techniques d’écriture pour le web.  Pour ça, je puise aussi bien chez Seth Godin que chez les papes de l’écriture  scénaristique : John Truby, Robert McKee et Stephen King.\n\nEt puis, il y a des échanges à chaque étape avec vous. Parce que lorsque j’aborde un projet,  on devient un “nous”. On travaille ensemble. On part à la découverte d’une histoire.\n\nIl était une fois...nous.','http://localhost:3001/public/images/bioMathias.JPG'),(3,'Conteur','Digital','conteurdigital@gmail.com','',NULL,'https://www.instagram.com/conteurdigital/','2019-01-09 15:34:47','2019-01-17 19:03:48',NULL,NULL,'admin',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin_has_article`
--

DROP TABLE IF EXISTS `admin_has_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_has_article` (
  `admin_id_user` int(11) NOT NULL,
  `article_id_article` int(11) NOT NULL,
  PRIMARY KEY (`admin_id_user`,`article_id_article`),
  KEY `fk_admin_has_article_article1_idx` (`article_id_article`),
  KEY `fk_admin_has_article_admin1_idx` (`admin_id_user`),
  CONSTRAINT `fk_admin_has_article_admin1` FOREIGN KEY (`admin_id_user`) REFERENCES `admin` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_admin_has_article_article1` FOREIGN KEY (`article_id_article`) REFERENCES `article` (`id_article`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_has_article`
--

LOCK TABLES `admin_has_article` WRITE;
/*!40000 ALTER TABLE `admin_has_article` DISABLE KEYS */;
INSERT INTO `admin_has_article` VALUES (1,10);
/*!40000 ALTER TABLE `admin_has_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article` (
  `id_article` int(11) NOT NULL AUTO_INCREMENT,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `short_content` varchar(400) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8_unicode_ci,
  `main_picture` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `blog_status` enum('writting_progress','published','archived') COLLATE utf8_unicode_ci DEFAULT NULL,
  `front_page_favorite` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id_article`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'2018-12-20 16:18:17','2019-01-26 10:55:20','Conteur Digital','','Conteur digital est une agence de création de contenus spécialisée dans le storytelling. Elle s’adresse aux entrepreneurs, managers et acteurs du monde associatifs qui souhaitent bousculer leur secteur d’activité.',NULL,'published',0),(2,'2018-12-20 16:19:18','2019-01-20 14:49:12','NOTRE MANIFESTE','CONTENT IS KING','Internet n’est pas le royaume des développeurs, des ingénieurs ou des data scientistes. \nIls ne font qu’en définir les contours.',NULL,'published',0),(3,'2019-01-04 17:52:34','2019-01-30 11:10:46','NOTRE MANIFESTE',NULL,'<h3>Header 1</h3>\n<h4>Header 2</h4>\n<h5>Header 3</h5>\n<h6>Header 4</h6>\n<p>Header 5</p>\n<h5 style=\"text-align: center;\"><strong>On vous a menti. </strong></h5>\n<p style=\"text-align: center;\">Internet n&rsquo;est pas le royaume des d&eacute;veloppeurs, des ing&eacute;nieurs, des data scientistes ou des entrepreneurs.</p>\n<p>Ils ne font qu&rsquo;en d&eacute;finir les contours. Ils construisent la carcasse. Si les foules se connectent, ce n&rsquo;est pas pour explorer l&rsquo;architecture de la bo&icirc;te. Ils viennent voir ce qu&rsquo;il y a dedans.</p>\n<h4 style=\"text-align: center;\"><strong>&laquo;&thinsp;Content is king&thinsp;&raquo; </strong></h4>\n<p>C&rsquo;est le titre d&rsquo;un essai de Bill Gates qui date de 1996 et qui dit simplement ceci : &laquo;&thinsp;Le contenu, c&rsquo;est l&agrave; o&ugrave;, selon moi, une grande partie de la fortune tangible sera g&eacute;n&eacute;r&eacute;e sur internet, tout comme dans la diffusion t&eacute;l&eacute;.&thinsp;&raquo; Ce qui fait venir les foules, <em>c&rsquo;est le &laquo;&thinsp;il &eacute;tait une fois&thinsp;&raquo;.</em> Ceux qui font battre le c&oelig;ur d&rsquo;internet, ce sont les cr&eacute;ateurs de contenu.</p>\n<p>Et l&rsquo;avenir du royaume digital leur appartient, tout comme le cin&eacute;ma a cr&eacute;&eacute; l&rsquo;empire des studios. La plupart des entreprises n&rsquo;ont pas vraiment pris la mesure de l&rsquo;importance du contenu.Ce mot un peu terne et tr&egrave;s pudique : &laquo;contenu&raquo;, illustre &agrave; lui seul cette omission monumentale. Le moment est venu de redonner la place qu&rsquo;il convient aux litt&eacute;raires sur la toile. Non pas par charit&eacute;. Mais parce que les entreprises qui ne d&eacute;veloppent pas leur storytelling vont perdre leur audience. Et conna&icirc;tre une mort pr&eacute;matur&eacute;e. Le conteur digital, cetteesp&egrave;ce en voie d&rsquo;apparitionest celui qui cimente la tribu digitale, qui rassemble autour d&rsquo;une marque une communaut&eacute; qui lui donnera tout son ciment. Le conteur digitalest celui qui travaille en relation &eacute;troite avec l&rsquo;entrepreneur, pour raconter son histoire &agrave; travers le world wide web. Il collabore avec le d&eacute;veloppeur, pour donner sens et relief &agrave; un site internet. Il fait &eacute;quipe avec le marketeur, pour d&eacute;multiplier la port&eacute;e de ses messages. Si le contenu est roi, l&rsquo;&eacute;criture est reine. Et le storytelling est un domaine technique, tout comme la programmation informatique. La terrible v&eacute;rit&eacute;, c&rsquo;est qu&rsquo;il n&rsquo;y a pas beaucoup de bons sc&eacute;naristes. Le conteur digital poss&egrave;de ce savoir-faire et le met &agrave; disposition de votre identit&eacute;.</p>','http://localhost:3001/public/images/charte.JPG','published',0),(4,'2019-01-03 13:37:26','2019-01-20 14:35:48',' Devenez conteur digital :','','Chaque semaine, pendant les 3 prochains mois, nous vous envoyons une technique de storytelling simple et applicable pour accroître l’impact de votre communication digitale. En cadeau, recevez 5 conseils des plus grands storytellers et comment les utiliser pour votre entreprise.','','published',0),(5,'2019-01-05 18:34:39','2019-01-17 17:08:08','Création de contenu :','articles, pages à propos, newsletters, descriptifs, emails, publications pour les réseaux sociaux... Nous rédigeons pour vous des contenus à forte valeur ajoutée, chargés de l’ADN de votre entreprise.\r\n',NULL,'http://localhost:3001/public/images/edit2.svg','published',0),(6,'2019-01-05 18:36:17','2019-01-17 17:08:55','Stratégie éditoriale :','diagnostic, charte éditoriale, analyse de performance, optimisation de vos contenus existants. Nous réalisons un audit et formulons des recommandations pour embellir votre communication.\r\n',NULL,'http://localhost:3001/public/images/network.svg','published',0),(7,'2019-01-05 18:37:15','2019-01-17 17:09:41','Accompagnement :','c’est vous qui le faites, mais on vous guide. Créez votre storytelling pas à pas avec un expert.',NULL,'http://localhost:3001/public/images/conversation.svg','published',0),(10,'2019-02-01 18:53:02','2019-02-01 13:24:10','Pourquoi le storytelling ? ... Et d’ailleurs, c’est quoi exactement ?!',NULL,'<p>Le storytelling, c&rsquo;est la mise en r&eacute;cit d&rsquo;une communication. C&rsquo;est la rencontre entre un message et ce que l&rsquo;on fait depuis la nuit des temps, raconter des histoires. La th&eacute;orisation de cette technique remonte aux ann&eacute;es 90 aux Etats-Unis. Mais depuis toujours, les entreprises qui ont r&eacute;ussi leur communication, celles dont on se souvient encore, sont celles qui ont puis&eacute; dans les techniques de narration (Citro&euml;n, les chocolats Poulain pour les plus connues). Le storytelling consiste donc &agrave; utiliser les outils de la sc&eacute;narisation pour construire un r&eacute;cit. On choisit un h&eacute;ros, des adjuvants, des personnages de vocation, des &eacute;preuves, des arches narratives&hellip;</p>\n<p>Aujourd&rsquo;hui, cette technique appara&icirc;t comme particuli&egrave;rement pertinente. Mais elle ne l&rsquo;est pas plus qu&rsquo;hier. C&rsquo;est qu&rsquo;elle resurgit apr&egrave;s des ann&eacute;es de soci&eacute;t&eacute; de consommation et de leurs corolaires&nbsp;: l&rsquo;infob&eacute;sit&eacute;, l&rsquo;orgie de publicit&eacute;, l&rsquo;indigestion de messages &agrave; caract&egrave;re informatif qui ont finit par devenir compl&egrave;tement inefficaces. Car le consommateur, lass&eacute; des publicit&eacute; intrusives et croulant sous les prospectus, a d&eacute;ploy&eacute; tout un tas de strat&eacute;gies pour se substituer au flot&nbsp;: pare-feu publicitaires, publicit&eacute;s tv devant des canap&eacute;s vides ou capsules pour passer &agrave; un autre programme sans louper la reprise du film... Face &agrave; ces l&eacute;gitimes contournements, les entreprises ont cherch&eacute; des moyens de faire venir &agrave; elles le consommateur, et de son plein gr&egrave;s.</p>\n<p>Or, dans notre &eacute;poque en panne de h&eacute;ros, de mod&egrave;les, o&ugrave; tout le monde tourne en rond &agrave; la recherche de sens et de sensations fortes, cherchant &agrave; fuir la torpeur des &eacute;crans pour ressentir des choses en vrai&hellip; le storytelling a le vent en poupe&nbsp;:</p>\n<p>C&rsquo;est vrai qu&rsquo;il offre des avantages importants&nbsp;:</p>\n<ul style=\"list-style-type: circle;\">\n<li>Il fait appel aux &eacute;motions pour, faire passer des informations qui sont alors mieux retenues,</li>\n<li>il stimule une impulsion, un d&eacute;sir de changement,</li>\n<li>on sait maintenant gr&acirc;ce aux recherches des neurosciences qu&rsquo;une histoire forte entraine la production de deux hormones: la dopamine qui nous aide &agrave; retrouver nos souvenirs et l&rsquo;octocyne qui incite &agrave; la coop&eacute;ration,</li>\n<li>et enfin les belles histoires, on a envie de les partager. Et comment ? Eh bien sur les r&eacute;seaux sociaux. On d&eacute;multiplie alors son audience et on fait des potentiels consommateurs des ambassadeurs, on cr&eacute;e une communaut&eacute; de valeurs.</li>\n</ul>\n<p>Mais voil&agrave;, n&rsquo;est pas storyteller qui veut. Les grandes entreprises en particulier, celles qui ont longtemps entretenu la culture du secret se trouvent d&eacute;pourvues face &agrave; la demande de transparence, face &agrave; ces consommateurs qui ont le toupet d&rsquo;interpeller, de questionner, de r&eacute;pondre, face &agrave; une audience qu&rsquo;il faut maintenant accompagner, sans chercher &agrave; lui imposer.</p>\n<p>Alors, comment on proc&egrave;de&nbsp;?</p>\n<p>D&rsquo;abord on &eacute;coute, ensuite, on &eacute;coute et enfin, on &eacute;coute&nbsp;: l&rsquo;&eacute;quipe dirigeante, les salari&eacute;s, les anciens dirigeants, l&rsquo;histoire de l&rsquo;entreprise, l&agrave; o&ugrave; elle se projette&hellip; On d&eacute;finit l&rsquo;ADN de l&rsquo;entreprise, son noyau organique, on d&eacute;finit son territoire &eacute;ditorial, on d&eacute;veloppe le sentiment d&rsquo;appartenance des employ&eacute;s, une culture de marque, une singularit&eacute; qui &eacute;vacue la concurrence. On assoit l&rsquo;entreprise dans ses valeurs.</p>\n<p>Une telle d&eacute;marche permet de d&eacute;velopper une marque par le biais du regard qu&rsquo;elle porte sur le monde et du changement qu&rsquo;elle souhaite y impulser. C&rsquo;est vaste, c&rsquo;est riche, passionnant. C&rsquo;est un travail qui doit &ecirc;tre men&eacute; par des professionnels qui ont des formations atypiques, vari&eacute;es, des gens de culture, des pluridisciplinaires, capables de faire des pont avec la mythologie, l&rsquo;histoire, la litt&eacute;rature, avec l&rsquo;inconscient collectif.</p>\n<p>Il ne restera alors plus qu&rsquo;&agrave; trouver le bon canal adapt&eacute; &agrave; chaque message.</p>','http://localhost:3001/public/images/photosArticles/1a1d41942017c7634765bbfb3a8897c9.jpg','published',1);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_has_media`
--

DROP TABLE IF EXISTS `article_has_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_has_media` (
  `article_id_article` int(11) NOT NULL,
  `media_id_media` int(11) NOT NULL,
  PRIMARY KEY (`article_id_article`,`media_id_media`),
  KEY `fk_article_has_media_media1_idx` (`media_id_media`),
  KEY `fk_article_has_media_article1_idx` (`article_id_article`),
  CONSTRAINT `fk_article_has_media_article1` FOREIGN KEY (`article_id_article`) REFERENCES `article` (`id_article`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_article_has_media_media1` FOREIGN KEY (`media_id_media`) REFERENCES `media` (`id_media`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_has_media`
--

LOCK TABLES `article_has_media` WRITE;
/*!40000 ALTER TABLE `article_has_media` DISABLE KEYS */;
INSERT INTO `article_has_media` VALUES (1,1);
/*!40000 ALTER TABLE `article_has_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_has_tag`
--

DROP TABLE IF EXISTS `article_has_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_has_tag` (
  `article_id_article` int(11) NOT NULL,
  `tag_id_tag` int(11) NOT NULL,
  PRIMARY KEY (`article_id_article`,`tag_id_tag`),
  KEY `fk_article_has_tag_tag1_idx` (`tag_id_tag`),
  KEY `fk_article_has_tag_article1_idx` (`article_id_article`),
  CONSTRAINT `fk_article_has_tag_article1` FOREIGN KEY (`article_id_article`) REFERENCES `article` (`id_article`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_article_has_tag_tag1` FOREIGN KEY (`tag_id_tag`) REFERENCES `tag` (`id_tag`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_has_tag`
--

LOCK TABLES `article_has_tag` WRITE;
/*!40000 ALTER TABLE `article_has_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_has_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id_comment` int(11) NOT NULL AUTO_INCREMENT,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `content` longtext COLLATE utf8_unicode_ci,
  `pseudo_anominous` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mail` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `article_id_article` int(11) NOT NULL,
  PRIMARY KEY (`id_comment`,`article_id_article`),
  KEY `fk_comment_article1_idx` (`article_id_article`),
  CONSTRAINT `fk_comment_article1` FOREIGN KEY (`article_id_article`) REFERENCES `article` (`id_article`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credit`
--

DROP TABLE IF EXISTS `credit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `credit` (
  `id_credit` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_credit`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credit`
--

LOCK TABLES `credit` WRITE;
/*!40000 ALTER TABLE `credit` DISABLE KEYS */;
INSERT INTO `credit` VALUES (1,'nom photographe');
/*!40000 ALTER TABLE `credit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `form`
--

DROP TABLE IF EXISTS `form`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `form` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `mail` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `form`
--

LOCK TABLES `form` WRITE;
/*!40000 ALTER TABLE `form` DISABLE KEYS */;
/*!40000 ALTER TABLE `form` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `media` (
  `id_media` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `path` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` enum('image','pdf','video') COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_media`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (1,'titre media','description media',NULL,NULL);
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media_has_credit`
--

DROP TABLE IF EXISTS `media_has_credit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `media_has_credit` (
  `media_id_media` int(11) NOT NULL,
  `credit_id_credit` int(11) NOT NULL,
  PRIMARY KEY (`media_id_media`,`credit_id_credit`),
  KEY `fk_media_has_credit_credit1_idx` (`credit_id_credit`),
  KEY `fk_media_has_credit_media1_idx` (`media_id_media`),
  CONSTRAINT `fk_media_has_credit_credit1` FOREIGN KEY (`credit_id_credit`) REFERENCES `credit` (`id_credit`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_media_has_credit_media1` FOREIGN KEY (`media_id_media`) REFERENCES `media` (`id_media`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media_has_credit`
--

LOCK TABLES `media_has_credit` WRITE;
/*!40000 ALTER TABLE `media_has_credit` DISABLE KEYS */;
INSERT INTO `media_has_credit` VALUES (1,1);
/*!40000 ALTER TABLE `media_has_credit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tag` (
  `id_tag` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_tag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-01 14:39:54
