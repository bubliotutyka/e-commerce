-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 22, 2019 at 02:24 PM
-- Server version: 5.7.26-0ubuntu0.19.04.1
-- PHP Version: 7.2.19-0ubuntu0.19.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `banking_credentials`
--

CREATE TABLE `banking_credentials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creditCardNumber` bigint(20) NOT NULL,
  `expiration` datetime NOT NULL,
  `ccv` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titulaire` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banking_credentials`
--

INSERT INTO `banking_credentials` (`id`, `user_id`, `creditCardNumber`, `expiration`, `ccv`, `titulaire`) VALUES
(17, '3', 1234567987654323, '2020-05-01 00:00:00', '$2y$10$vgAaNzbuCMrBoQigtLOcZuG0P7BNXgj2onZm4kj9GoYugq5Q3plZK', 'Sammarone Steven'),
(19, '5', 1234567898765432, '2020-05-01 00:00:00', '$2y$10$XVRaDCe4tiL5Vi1LxPu/a.kenIt7pEC6x9LJuX56hyfTl5T1QTZL.', 'RENEL Benjamin'),
(20, '9', 2345654345678754, '2020-05-01 00:00:00', '$2y$10$V2i7vJ7F.cLeQLaOZ8MQgeBDaivktuzdNq5faylAKMz2KD/W0GsGK', 'sdcsi');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `cart` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `classe_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `classe_id`, `name`) VALUES
(2, 3, 'Processeur'),
(3, 3, 'Carte Mère'),
(4, 3, 'Cartes Graphiques'),
(5, 3, 'Mémoire / RAM'),
(6, 3, 'Boîtier PC'),
(7, 3, 'Stockage');

-- --------------------------------------------------------

--
-- Table structure for table `categorie_spec`
--

CREATE TABLE `categorie_spec` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categorie_id` int(11) NOT NULL,
  `spec_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categorie_spec`
--

INSERT INTO `categorie_spec` (`id`, `categorie_id`, `spec_id`) VALUES
(1, 2, 1),
(2, 2, 2),
(3, 2, 3),
(4, 2, 4),
(5, 2, 5),
(6, 2, 6),
(7, 2, 7),
(8, 2, 8),
(9, 2, 9),
(10, 2, 10),
(11, 2, 11),
(12, 2, 12),
(13, 3, 4),
(14, 3, 5),
(15, 3, 13),
(16, 3, 14),
(17, 3, 15),
(18, 3, 16),
(19, 4, 17),
(20, 4, 18),
(21, 4, 19),
(22, 4, 20),
(23, 4, 21),
(24, 4, 22),
(25, 4, 23),
(26, 5, 24),
(27, 5, 25),
(28, 5, 1),
(29, 5, 26),
(30, 5, 27),
(31, 5, 28),
(32, 5, 29);

-- --------------------------------------------------------

--
-- Table structure for table `classe`
--

CREATE TABLE `classe` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `classe`
--

INSERT INTO `classe` (`id`, `name`) VALUES
(3, 'Composant');

-- --------------------------------------------------------

--
-- Table structure for table `departement`
--

CREATE TABLE `departement` (
  `departement_id` int(11) NOT NULL,
  `departement_code` varchar(3) CHARACTER SET utf8 DEFAULT NULL,
  `departement_nom` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `departement_nom_uppercase` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `departement_slug` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `departement_nom_soundex` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `departement`
--

INSERT INTO `departement` (`departement_id`, `departement_code`, `departement_nom`, `departement_nom_uppercase`, `departement_slug`, `departement_nom_soundex`) VALUES
(1, '01', 'Ain', 'AIN', 'ain', 'A500'),
(2, '02', 'Aisne', 'AISNE', 'aisne', 'A250'),
(3, '03', 'Allier', 'ALLIER', 'allier', 'A460'),
(5, '05', 'Hautes-Alpes', 'HAUTES-ALPES', 'hautes-alpes', 'H32412'),
(4, '04', 'Alpes-de-Haute-Provence', 'ALPES-DE-HAUTE-PROVENCE', 'alpes-de-haute-provence', 'A412316152'),
(6, '06', 'Alpes-Maritimes', 'ALPES-MARITIMES', 'alpes-maritimes', 'A41256352'),
(7, '07', 'Ardèche', 'ARDÈCHE', 'ardeche', 'A632'),
(8, '08', 'Ardennes', 'ARDENNES', 'ardennes', 'A6352'),
(9, '09', 'Ariège', 'ARIÈGE', 'ariege', 'A620'),
(10, '10', 'Aube', 'AUBE', 'aube', 'A100'),
(11, '11', 'Aude', 'AUDE', 'aude', 'A300'),
(12, '12', 'Aveyron', 'AVEYRON', 'aveyron', 'A165'),
(13, '13', 'Bouches-du-Rhône', 'BOUCHES-DU-RHÔNE', 'bouches-du-rhone', 'B2365'),
(14, '14', 'Calvados', 'CALVADOS', 'calvados', 'C4132'),
(15, '15', 'Cantal', 'CANTAL', 'cantal', 'C534'),
(16, '16', 'Charente', 'CHARENTE', 'charente', 'C653'),
(17, '17', 'Charente-Maritime', 'CHARENTE-MARITIME', 'charente-maritime', 'C6535635'),
(18, '18', 'Cher', 'CHER', 'cher', 'C600'),
(19, '19', 'Corrèze', 'CORRÈZE', 'correze', 'C620'),
(20, '2a', 'Corse-du-sud', 'CORSE-DU-SUD', 'corse-du-sud', 'C62323'),
(21, '2b', 'Haute-corse', 'HAUTE-CORSE', 'haute-corse', 'H3262'),
(22, '21', 'Côte-d\'or', 'CÔTE-D\'OR', 'cote-dor', 'C360'),
(23, '22', 'Côtes-d\'armor', 'CÔTES-D\'ARMOR', 'cotes-darmor', 'C323656'),
(24, '23', 'Creuse', 'CREUSE', 'creuse', 'C620'),
(25, '24', 'Dordogne', 'DORDOGNE', 'dordogne', 'D6325'),
(26, '25', 'Doubs', 'DOUBS', 'doubs', 'D120'),
(27, '26', 'Drôme', 'DRÔME', 'drome', 'D650'),
(28, '27', 'Eure', 'EURE', 'eure', 'E600'),
(29, '28', 'Eure-et-Loir', 'EURE-ET-LOIR', 'eure-et-loir', 'E6346'),
(30, '29', 'Finistère', 'FINISTÈRE', 'finistere', 'F5236'),
(31, '30', 'Gard', 'GARD', 'gard', 'G630'),
(32, '31', 'Haute-Garonne', 'HAUTE-GARONNE', 'haute-garonne', 'H3265'),
(33, '32', 'Gers', 'GERS', 'gers', 'G620'),
(34, '33', 'Gironde', 'GIRONDE', 'gironde', 'G653'),
(35, '34', 'Hérault', 'HÉRAULT', 'herault', 'H643'),
(36, '35', 'Ile-et-Vilaine', 'ILE-ET-VILAINE', 'ile-et-vilaine', 'I43145'),
(37, '36', 'Indre', 'INDRE', 'indre', 'I536'),
(38, '37', 'Indre-et-Loire', 'INDRE-ET-LOIRE', 'indre-et-loire', 'I536346'),
(39, '38', 'Isère', 'ISÈRE', 'isere', 'I260'),
(40, '39', 'Jura', 'JURA', 'jura', 'J600'),
(41, '40', 'Landes', 'LANDES', 'landes', 'L532'),
(42, '41', 'Loir-et-Cher', 'LOIR-ET-CHER', 'loir-et-cher', 'L6326'),
(43, '42', 'Loire', 'LOIRE', 'loire', 'L600'),
(44, '43', 'Haute-Loire', 'HAUTE-LOIRE', 'haute-loire', 'H346'),
(45, '44', 'Loire-Atlantique', 'LOIRE-ATLANTIQUE', 'loire-atlantique', 'L634532'),
(46, '45', 'Loiret', 'LOIRET', 'loiret', 'L630'),
(47, '46', 'Lot', 'LOT', 'lot', 'L300'),
(48, '47', 'Lot-et-Garonne', 'LOT-ET-GARONNE', 'lot-et-garonne', 'L3265'),
(49, '48', 'Lozère', 'LOZÈRE', 'lozere', 'L260'),
(50, '49', 'Maine-et-Loire', 'MAINE-ET-LOIRE', 'maine-et-loire', 'M346'),
(51, '50', 'Manche', 'MANCHE', 'manche', 'M200'),
(52, '51', 'Marne', 'MARNE', 'marne', 'M650'),
(53, '52', 'Haute-Marne', 'HAUTE-MARNE', 'haute-marne', 'H3565'),
(54, '53', 'Mayenne', 'MAYENNE', 'mayenne', 'M000'),
(55, '54', 'Meurthe-et-Moselle', 'MEURTHE-ET-MOSELLE', 'meurthe-et-moselle', 'M63524'),
(56, '55', 'Meuse', 'MEUSE', 'meuse', 'M200'),
(57, '56', 'Morbihan', 'MORBIHAN', 'morbihan', 'M615'),
(58, '57', 'Moselle', 'MOSELLE', 'moselle', 'M240'),
(59, '58', 'Nièvre', 'NIÈVRE', 'nievre', 'N160'),
(60, '59', 'Nord', 'NORD', 'nord', 'N630'),
(61, '60', 'Oise', 'OISE', 'oise', 'O200'),
(62, '61', 'Orne', 'ORNE', 'orne', 'O650'),
(63, '62', 'Pas-de-Calais', 'PAS-DE-CALAIS', 'pas-de-calais', 'P23242'),
(64, '63', 'Puy-de-Dôme', 'PUY-DE-DÔME', 'puy-de-dome', 'P350'),
(65, '64', 'Pyrénées-Atlantiques', 'PYRÉNÉES-ATLANTIQUES', 'pyrenees-atlantiques', 'P65234532'),
(66, '65', 'Hautes-Pyrénées', 'HAUTES-PYRÉNÉES', 'hautes-pyrenees', 'H321652'),
(67, '66', 'Pyrénées-Orientales', 'PYRÉNÉES-ORIENTALES', 'pyrenees-orientales', 'P65265342'),
(68, '67', 'Bas-Rhin', 'BAS-RHIN', 'bas-rhin', 'B265'),
(69, '68', 'Haut-Rhin', 'HAUT-RHIN', 'haut-rhin', 'H365'),
(70, '69', 'Rhône', 'RHÔNE', 'rhone', 'R500'),
(71, '70', 'Haute-Saône', 'HAUTE-SAÔNE', 'haute-saone', 'H325'),
(72, '71', 'Saône-et-Loire', 'SAÔNE-ET-LOIRE', 'saone-et-loire', 'S5346'),
(73, '72', 'Sarthe', 'SARTHE', 'sarthe', 'S630'),
(74, '73', 'Savoie', 'SAVOIE', 'savoie', 'S100'),
(75, '74', 'Haute-Savoie', 'HAUTE-SAVOIE', 'haute-savoie', 'H321'),
(76, '75', 'Paris', 'PARIS', 'paris', 'P620'),
(77, '76', 'Seine-Maritime', 'SEINE-MARITIME', 'seine-maritime', 'S5635'),
(78, '77', 'Seine-et-Marne', 'SEINE-ET-MARNE', 'seine-et-marne', 'S53565'),
(79, '78', 'Yvelines', 'YVELINES', 'yvelines', 'Y1452'),
(80, '79', 'Deux-Sèvres', 'DEUX-SÈVRES', 'deux-sevres', 'D2162'),
(81, '80', 'Somme', 'SOMME', 'somme', 'S500'),
(82, '81', 'Tarn', 'TARN', 'tarn', 'T650'),
(83, '82', 'Tarn-et-Garonne', 'TARN-ET-GARONNE', 'tarn-et-garonne', 'T653265'),
(84, '83', 'Var', 'VAR', 'var', 'V600'),
(85, '84', 'Vaucluse', 'VAUCLUSE', 'vaucluse', 'V242'),
(86, '85', 'Vendée', 'VENDÉE', 'vendee', 'V530'),
(87, '86', 'Vienne', 'VIENNE', 'vienne', 'V500'),
(88, '87', 'Haute-Vienne', 'HAUTE-VIENNE', 'haute-vienne', 'H315'),
(89, '88', 'Vosges', 'VOSGES', 'vosges', 'V200'),
(90, '89', 'Yonne', 'YONNE', 'yonne', 'Y500'),
(91, '90', 'Territoire de Belfort', 'TERRITOIRE DE BELFORT', 'territoire-de-belfort', 'T636314163'),
(92, '91', 'Essonne', 'ESSONNE', 'essonne', 'E250'),
(93, '92', 'Hauts-de-Seine', 'HAUTS-DE-SEINE', 'hauts-de-seine', 'H32325'),
(94, '93', 'Seine-Saint-Denis', 'SEINE-SAINT-DENIS', 'seine-saint-denis', 'S525352'),
(95, '94', 'Val-de-Marne', 'VAL-DE-MARNE', 'val-de-marne', 'V43565'),
(96, '95', 'Val-d\'oise', 'VAL-D\'OISE', 'val-doise', 'V432'),
(97, '976', 'Mayotte', 'MAYOTTE', 'mayotte', 'M300'),
(98, '971', 'Guadeloupe', 'GUADELOUPE', 'guadeloupe', 'G341'),
(99, '973', 'Guyane', 'GUYANE', 'guyane', 'G500'),
(100, '972', 'Martinique', 'MARTINIQUE', 'martinique', 'M6352'),
(101, '974', 'Réunion', 'RÉUNION', 'reunion', 'R500');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(4, '2019_06_11_090520_create_photos_table', 1),
(19, '2019_06_17_152059_create_user_cart_table', 9),
(79, '2014_10_12_000000_create_users_table', 10),
(80, '2014_10_12_100000_create_password_resets_table', 10),
(81, '2016_06_01_000001_create_oauth_auth_codes_table', 10),
(82, '2016_06_01_000002_create_oauth_access_tokens_table', 10),
(83, '2016_06_01_000003_create_oauth_refresh_tokens_table', 10),
(84, '2016_06_01_000004_create_oauth_clients_table', 10),
(85, '2016_06_01_000005_create_oauth_personal_access_clients_table', 10),
(86, '2019_06_11_085701_create_products_table', 10),
(87, '2019_06_11_100726_add_name_to_products_table', 10),
(88, '2019_06_11_111527_add_photos_to_products_table', 10),
(89, '2019_06_13_151637_add_visit_to_products_table', 10),
(90, '2019_06_13_151829_create_categories_table', 10),
(91, '2019_06_13_153653_create_classe_table', 10),
(92, '2019_06_13_154053_create_sous_categorie_table', 10),
(93, '2019_06_13_154712_add_sous_categorie_id_to_products_table', 10),
(94, '2019_06_14_160832_create_specs_table', 10),
(95, '2019_06_15_155000_create_categorie_spec_table', 10),
(96, '2019_06_21_102704_create_shipment_table', 10),
(97, '2019_06_21_134752_add_delivery_delay_to_shipment_table', 10),
(98, '2019_06_21_135816_add_weight_to_product_table', 10),
(99, '2019_06_21_140818_add_per_product_to_shipment_table', 10),
(100, '2019_06_24_150248_create_userinfo_table', 10),
(101, '2019_06_25_062739_add_blacklist_to_shipment_table', 10),
(102, '2019_06_25_102356_create_banking_credentials_table', 10),
(103, '2019_06_25_132320_create_cart_table', 10),
(104, '2019_06_26_104846_create_order_table', 10),
(105, '2019_06_26_105728_create_order_step_table', 10),
(106, '2019_06_26_142629_add_transporter_to_order_table', 10),
(107, '2019_06_26_142646_add_address_to_order_table', 10),
(108, '2019_06_26_144542_create_promo_table', 10),
(109, '2019_06_26_145511_add_promo_to_product_table', 10),
(110, '2019_06_28_104518_create_reviews_table', 10),
(111, '2019_06_28_104823_create_reviews_note_table', 10),
(112, '2019_07_02_092326_create_suppliers-table', 10),
(113, '2019_07_02_140520_add_roles_to_user_table', 11),
(114, '2019_07_03_154229_add_titulaire_to_banking_credentials_table', 12),
(115, '2019_07_04_132704_add_marque_to_products_table', 13),
(116, '2019_07_06_155912_add_order_id_to_order_table', 14),
(117, '2019_07_07_202217_create_package_option_table', 15),
(118, '2019_07_07_211956_add_package_option_to_order_table', 15);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('026512c039be6df56f7c4af15476e67bd2fc69bfaf8d5d162325f1b4935e01758b90ec66d7caba01', 6, 1, 'MyApp', '[]', 0, '2019-07-07 16:00:36', '2019-07-07 16:00:36', '2020-07-07 18:00:36'),
('0cdfc2bbac6d099e52051f5160803177b2532b2f531774255e4c5e6a5a17edabca24045c223f0680', 5, 1, 'MyApp', '[]', 0, '2019-07-08 05:24:09', '2019-07-08 05:24:09', '2020-07-08 07:24:09'),
('10b2368868119274cb7490ce034b84c7fbb854fce96c4548493d7e5fd786d4b535278699b0112108', 5, 1, 'MyApp', '[]', 0, '2019-07-06 14:04:58', '2019-07-06 14:04:58', '2020-07-06 16:04:58'),
('4188d6b195c62c09662559da118f34eeab34a901aaef064c1b7a4ac61ed0a02183dc6dc27c44cbf2', 5, 1, 'MyApp', '[]', 0, '2019-07-08 11:37:48', '2019-07-08 11:37:48', '2020-07-08 13:37:48'),
('4f023ef0ce03076b34a6aca25376faea42d07ef01ea937f368bf05107cad2e397978f998f65d4da1', 8, 1, 'MyApp', '[]', 0, '2019-07-07 19:19:50', '2019-07-07 19:19:50', '2020-07-07 21:19:50'),
('6287aade156676645939a59469c2055d18dde641c343563e1e2baa4c468d5841e9786039bad430de', 5, 1, 'MyApp', '[]', 0, '2019-07-06 14:05:00', '2019-07-06 14:05:00', '2020-07-06 16:05:00'),
('7a3193ee3dde35bf1cc39e8c1e1a2b8c75cab9733b05d154be38e135371c1d807c2fcdb78dc42fc8', 7, 1, 'MyApp', '[]', 0, '2019-07-07 18:47:29', '2019-07-07 18:47:29', '2020-07-07 20:47:29'),
('9d8bf95aa9422664c60ff41ce7a63f1b9e8572bf5432b5a1332ee5a87500ea1ef55856dabf20426a', 5, 1, 'MyApp', '[]', 0, '2019-07-06 11:47:41', '2019-07-06 11:47:41', '2020-07-06 13:47:41'),
('a1a033d35c65c71539046675e94ca66dfa03058a2576bd1724c1856d06a8b6096a8253c4f999e772', 3, 1, 'MyApp', '[]', 0, '2019-07-02 12:09:11', '2019-07-02 12:09:11', '2020-07-02 14:09:11'),
('a6f0a41c2a88dc4b76d71dec02fd37e14a256e9607498a7802a9cfaed6a7ce71de8bdaf52bd95e83', 9, 1, 'MyApp', '[]', 0, '2019-07-07 19:31:08', '2019-07-07 19:31:08', '2020-07-07 21:31:08'),
('ad9330eee4faa2f23a02f76f86b7bf20a5eec61829305bdd0583511a907e6000c36cf6a2529d00b6', 3, 1, 'MyApp', '[]', 0, '2019-07-02 12:14:24', '2019-07-02 12:14:24', '2020-07-02 14:14:24'),
('e8cebaef22f903b5a6cf508120034a32cd2f55b287f70b61218720494220bd1a7c2b95df27d49ebe', 10, 1, 'MyApp', '[]', 0, '2019-07-08 10:53:20', '2019-07-08 10:53:20', '2020-07-08 12:53:20'),
('ed51fb22e15d840fff35ef9051999ebb990cf18ae5da0593a878a25eef2828199a836277642c274b', 5, 1, 'MyApp', '[]', 0, '2019-07-05 10:14:16', '2019-07-05 10:14:16', '2020-07-05 12:14:16'),
('fba49796322192212a72b1c77aeffff051ef32b704e54818d9019985f22df0ce6e7c1b707e41d842', 4, 1, 'MyApp', '[]', 0, '2019-07-03 08:12:06', '2019-07-03 08:12:06', '2020-07-03 10:12:06');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'mcn1AvVV9lQKzf3IJBEZqA8Oc7TROdSy5ykyq9h0', 'http://localhost', 1, 0, 0, '2019-07-02 12:08:20', '2019-07-02 12:08:20'),
(2, NULL, 'Laravel Password Grant Client', 'KTwk4snaGZ01nda8lrVm5E8Lx3EQkaFPdEKYacNO', 'http://localhost', 0, 1, 0, '2019-07-02 12:08:20', '2019-07-02 12:08:20');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2019-07-02 12:08:20', '2019-07-02 12:08:20');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `step` int(11) NOT NULL DEFAULT '1',
  `cart` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `transporter_id` int(11) NOT NULL,
  `address` json NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `packageOption` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `user_id`, `step`, `cart`, `created_at`, `updated_at`, `transporter_id`, `address`, `order_id`, `packageOption`) VALUES
(1, '6', 1, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-06 15:42:24', '2019-07-06 15:42:24', 1, 'null', NULL, NULL),
(2, '6', 1, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-06 15:50:43', '2019-07-06 15:50:43', 1, 'null', NULL, NULL),
(3, 'caca@caca.mail', 1, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-06 15:56:15', '2019-07-06 15:56:15', 1, 'null', NULL, NULL),
(4, '3', 1, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-06 15:56:43', '2019-07-06 15:56:43', 1, 'null', NULL, NULL),
(5, '3', 1, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-06 16:01:37', '2019-07-06 16:01:37', 1, 'null', NULL, NULL),
(6, '3', 2, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-06 16:01:58', '2019-07-06 16:01:58', 1, 'null', NULL, NULL),
(7, '3', 2, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 12:56:52', '2019-07-07 12:56:52', 1, 'null', NULL, NULL),
(8, '3', 2, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:02:32', '2019-07-07 13:02:32', 1, 'null', NULL, NULL),
(9, '3', 2, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:02:37', '2019-07-07 13:02:37', 1, 'null', NULL, NULL),
(10, '3', 2, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:03:04', '2019-07-07 13:03:04', 1, 'null', NULL, NULL),
(11, '3', 2, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:05:03', '2019-07-07 13:05:03', 1, 'null', NULL, NULL),
(12, '3', 2, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:08:53', '2019-07-07 13:08:53', 1, 'null', NULL, NULL),
(13, '3', 2, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:12:46', '2019-07-07 13:12:46', 1, 'null', NULL, NULL),
(14, '3', 2, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:13:36', '2019-07-07 13:13:36', 1, 'null', NULL, NULL),
(15, '3', 2, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:14:40', '2019-07-07 13:14:40', 1, 'null', NULL, NULL),
(16, '3', 2, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:15:05', '2019-07-07 13:15:05', 1, 'null', NULL, NULL),
(17, '3', 1, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:22:37', '2019-07-07 13:22:37', 1, 'null', NULL, NULL),
(18, '3', 1, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:26:19', '2019-07-07 13:26:19', 3, 'null', NULL, NULL),
(19, '3', 1, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:28:21', '2019-07-07 13:28:21', 3, 'null', NULL, NULL),
(20, '3', 1, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:31:52', '2019-07-07 13:31:52', 3, 'null', NULL, NULL),
(21, '3', 1, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:32:56', '2019-07-07 13:32:56', 3, 'null', NULL, NULL),
(22, '3', 1, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 13:35:19', '2019-07-07 13:35:19', 4, 'null', NULL, NULL),
(23, '3', 1, '[{\"id\": 3, \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 1, \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}, {\"id\": 2, \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-07 14:06:31', '2019-07-07 14:06:31', 4, 'null', NULL, NULL),
(24, '6', 2, '[{\"id\": 1, \"name\": \"AMD Ryzen 5 2600 Wraith Stealth Edition (3,4 GHz)\", \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 338, \"quantity\": 2}]', '2019-07-07 18:28:06', '2019-07-07 18:28:06', 1, 'null', NULL, '{epitech}'),
(25, '5', 2, '[{\"id\": 11, \"name\": \"Corsair Vengeance LPX Series Low Profile 32 Go (2x 16 Go) DDR4 2666 MHz CL16\", \"image\": \"/storage/productImages/YCpfOZjuW38dd8PDB1W6KtX7m8NxH2syAvT2cTQS.jpeg\", \"price\": 477, \"quantity\": 3}]', '2019-07-07 19:20:54', '2019-07-07 19:20:54', 1, 'null', NULL, NULL),
(26, '6', 2, '[{\"id\": 1, \"name\": \"AMD Ryzen 5 2600 Wraith Stealth Edition (3,4 GHz)\", \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 338, \"quantity\": 2}]', '2019-07-08 08:39:46', '2019-07-08 08:39:46', 1, 'null', NULL, '{epitech}'),
(27, '6', 2, '[{\"id\": 1, \"name\": \"AMD Ryzen 5 2600 Wraith Stealth Edition (3,4 GHz)\", \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 338, \"quantity\": 2}]', '2019-07-08 08:40:49', '2019-07-08 08:40:49', 1, 'null', NULL, '{epitech}'),
(28, '6', 2, '[{\"id\": 1, \"name\": \"AMD Ryzen 5 2600 Wraith Stealth Edition (3,4 GHz)\", \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 338, \"quantity\": 2}]', '2019-07-08 08:41:44', '2019-07-08 08:41:44', 1, 'null', NULL, '{epitech}'),
(29, '6', 2, '[{\"id\": 1, \"name\": \"AMD Ryzen 5 2600 Wraith Stealth Edition (3,4 GHz)\", \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 338, \"quantity\": 2}]', '2019-07-08 08:44:47', '2019-07-08 08:44:47', 3, 'null', NULL, '{epitech}'),
(30, '6', 2, '[{\"id\": 1, \"name\": \"AMD Ryzen 5 2600 Wraith Stealth Edition (3,4 GHz)\", \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 338, \"quantity\": 2}]', '2019-07-08 08:45:30', '2019-07-08 08:45:30', 1, 'null', NULL, '{epitech}'),
(31, '6', 2, '[{\"id\": 1, \"name\": \"AMD Ryzen 5 2600 Wraith Stealth Edition (3,4 GHz)\", \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 338, \"quantity\": 2}]', '2019-07-08 08:45:54', '2019-07-08 08:45:54', 1, 'null', NULL, '{epitech}'),
(32, '6', 2, '[{\"id\": 1, \"name\": \"AMD Ryzen 5 2600 Wraith Stealth Edition (3,4 GHz)\", \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 338, \"quantity\": 2}]', '2019-07-08 08:46:18', '2019-07-08 08:46:18', 1, 'null', NULL, '{epitech}'),
(33, '6', 2, '[{\"id\": 1, \"name\": \"AMD Ryzen 5 2600 Wraith Stealth Edition (3,4 GHz)\", \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 338, \"quantity\": 2}]', '2019-07-08 08:52:45', '2019-07-08 08:52:45', 1, 'null', NULL, NULL),
(34, '6', 2, '[{\"id\": 1, \"name\": \"AMD Ryzen 5 2600 Wraith Stealth Edition (3,4 GHz)\", \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 338, \"quantity\": 2}]', '2019-07-08 08:54:18', '2019-07-08 08:54:18', 1, 'null', NULL, NULL),
(35, '6', 2, '[{\"id\": 1, \"name\": \"AMD Ryzen 5 2600 Wraith Stealth Edition (3,4 GHz)\", \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 507, \"quantity\": 3}, {\"id\": 4, \"name\": \"AMD Ryzen Threadripper 2970WX (3 GHz)\", \"image\": \"/storage/productImages/nhZ5gwdLAhJKu3VjFMEeKFUnvtsQyJaSCM2juazB.jpeg\", \"price\": 1399, \"quantity\": 1}, {\"id\": 2, \"name\": \"AMD Ryzen 3 1200 Wraith Stealth Edition (3,1 GHz)\", \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}, {\"id\": 3, \"name\": \"AMD Ryzen Threadripper 1920X (3,5 GHz)\", \"image\": \"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"price\": 419, \"quantity\": 1}, {\"id\": 5, \"name\": \"AMD A10 9700 (3,5 GHz)\", \"image\": \"/storage/productImages/iewy8Hixg8VmQAyvUawDNhqqRKkcj4TaRjYh9uRU.jpeg\", \"price\": 71, \"quantity\": 1}]', '2019-07-08 08:55:37', '2019-07-08 08:55:37', 1, 'null', NULL, NULL),
(36, '6', 2, '[{\"id\": 1, \"name\": \"AMD Ryzen 5 2600 Wraith Stealth Edition (3,4 GHz)\", \"image\": \"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\", \"price\": 169, \"quantity\": 1}]', '2019-07-08 10:45:21', '2019-07-08 10:45:21', 1, 'null', NULL, NULL),
(37, '5', 2, '[{\"id\": 4, \"name\": \"AMD Ryzen Threadripper 2970WX (3 GHz)\", \"image\": \"/storage/productImages/nhZ5gwdLAhJKu3VjFMEeKFUnvtsQyJaSCM2juazB.jpeg\", \"price\": 1399, \"quantity\": 1}, {\"id\": 2, \"name\": \"AMD Ryzen 3 1200 Wraith Stealth Edition (3,1 GHz)\", \"image\": \"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\", \"price\": 87, \"quantity\": 1}]', '2019-07-08 11:35:04', '2019-07-08 11:35:04', 1, 'null', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `order_step`
--

CREATE TABLE `order_step` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `step` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_step`
--

INSERT INTO `order_step` (`id`, `step`) VALUES
(1, 'en attente du paiment'),
(2, 'paiement accepté'),
(3, 'en cour de préparation'),
(4, 'expedié');

-- --------------------------------------------------------

--
-- Table structure for table `package_option`
--

CREATE TABLE `package_option` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `from` date NOT NULL,
  `to` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `package_option`
--

INSERT INTO `package_option` (`id`, `name`, `from`, `to`) VALUES
(1, '{epitech}', '2019-07-01', '2019-07-31'),
(2, 'noel', '2019-11-25', '2019-12-31'),
(3, 'fin de projet', '2019-07-01', '2019-07-06');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `specs` json NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '0',
  `price` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photos` json NOT NULL,
  `visit` int(11) NOT NULL DEFAULT '0',
  `sub_categorie_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `weight` int(11) NOT NULL,
  `promo` int(11) DEFAULT NULL,
  `marque` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `description`, `specs`, `quantity`, `price`, `created_at`, `updated_at`, `name`, `photos`, `visit`, `sub_categorie_id`, `weight`, `promo`, `marque`) VALUES
(1, 'Les processeurs AMD Ryzen de deuxième génération débarquent. Vivez une expérience gaming sans égale grâce à l\'incroyable performance de l\'architecture Zen+ apportant des fréquences encore plus élevées. Finesse de gravure 12 nanomètres, 6 cœurs / 12 threads, fréquence native élevée (3,40 GHz), coefficient débloqué pour faciliter l\'overclocking, le processeur AMD Ryzen 5 2600 réunit toutes les qualités pour satisfaire les utilisateurs les plus exigeants. Pour le jeu vidéo intensif, AMD vous offre une arme surpuissante qui donnera vie au PC de vos rêves : le Ryzen 5 2600, fréquence Turbo à 3,90 GHz, doté des technologies Precision Boost 2 et XFR 2.', '[{\"name\": \"frequence\", \"specification\": \"3,5 GHz\"}, {\"name\": \"Frequence Boost\", \"specification\": \"4 GHz\"}, {\"name\": \"frequence ram\", \"specification\": \"DDR4 2666 MHz\"}, {\"name\": \"Chipset\", \"specification\": \"AMD X399\"}, {\"name\": \"Cores\", \"specification\": \"12\"}, {\"name\": \"Threads\", \"specification\": \"24\"}, {\"name\": \"Plateforme\", \"specification\": \"AMD Zen\"}, {\"name\": \"Finesse de gravure\", \"specification\": \"0.014 Nanomètre\"}, {\"name\": \"TDP\", \"specification\": \"180 W\"}]', 300, 169, '2019-07-03 09:07:22', '2019-07-08 10:41:46', 'AMD Ryzen 5 2600 Wraith Stealth Edition (3,4 GHz)', '[\"/storage/productImages/dCV5UfpDd8rVVLwq1U8BCggI6SzJ6yeKIZMpjs2W.jpeg\"]', 183, '2', 150, NULL, 'Ryzen'),
(2, 'Les processeurs AMD Ryzen 3 débarquent et viennent compléter la gamme Ryzen. Vivez une expérience gaming sans égale grâce à l\'incroyable performance de l\'architecture Ryzen. Finesse de gravure 14 nanomètres, 4 cœurs / 4 threads, fréquence native élevée (3,10 GHz) avec un mode turbo atteignant 3,40 GHz, coefficient débloqué pour faciliter l\'overclocking, le processeur AMD Ryzen 3 1200 réunit toutes les qualités pour satisfaire les utilisateurs les plus exigeants à un prix contenu. Du multitâche au jeu vidéo, AMD vous propose avec ce Ryzen 1200, un processeur polyvalent qui répondra à toutes vos attentes.', '[{\"name\": \"frequence\", \"specification\": \"3,5 GHz\"}, {\"name\": \"Frequence Boost\", \"specification\": \"4 GHz\"}, {\"name\": \"frequence ram\", \"specification\": \"DDR4 2666 MHz\"}, {\"name\": \"Chipset\", \"specification\": \"AMD X399\"}, {\"name\": \"Cores\", \"specification\": \"12\"}, {\"name\": \"Threads\", \"specification\": \"24\"}, {\"name\": \"Plateforme\", \"specification\": \"AMD Zen\"}, {\"name\": \"Finesse de gravure\", \"specification\": \"0.014 Nanomètre\"}, {\"name\": \"TDP\", \"specification\": \"180 W\"}]', 0, 87, '2019-07-03 11:44:14', '2019-07-12 10:32:59', 'AMD Ryzen 3 1200 Wraith Stealth Edition (3,1 GHz)', '[\"/storage/productImages/c67RWPVCOoD3RDStTYUWNukiSMHSA61V4hjdNn2f.jpeg\"]', 22, '2', 140, NULL, 'Apple'),
(3, 'Les processeurs AMD Ryzen Threadripper débarquent et viennent représenter le haut de gamme avec 3 processeurs Threadripper dédiés aux performances gaming. Vivez une expérience gaming sans égale grâce à l\'incroyable performance de l\'architecture Ryzen sur une nouvelle génération de cartes mères au socket TR4 et chipset X399.', '[{\"name\": \"frequence\", \"specification\": \"3,5 GHz\"}, {\"name\": \"Frequence Boost\", \"specification\": \"4 GHz\"}, {\"name\": \"frequence ram\", \"specification\": \"DDR4 2666 MHz\"}, {\"name\": \"Chipset\", \"specification\": \"AMD X399\"}, {\"name\": \"Cores\", \"specification\": \"12\"}, {\"name\": \"Threads\", \"specification\": \"24\"}, {\"name\": \"Plateforme\", \"specification\": \"AMD Zen\"}, {\"name\": \"Finesse de gravure\", \"specification\": \"0.014 Nanomètre\"}, {\"name\": \"TDP\", \"specification\": \"180 W\"}]', 0, 419, '2019-07-03 11:53:21', '2019-07-07 18:21:50', 'AMD Ryzen Threadripper 1920X (3,5 GHz)', '[\"/storage/productImages/RHSgs9y2l2rgsIfJ55iNBECjZtxcEjIzh2Ucdu5J.jpeg\", \"/storage/productImages/1lKxpFrm0QJxYd0x8cdYnjnDNX3lkRZNHrXNUUAS.jpeg\", \"/storage/productImages/AUBRYghTNPBxKie5rJNdNZg2J23jpKK0KItWTa2w.jpeg\", \"/storage/productImages/PXhQIKA4KshYBkKAaxPfo6ttcBYXkXTtwxjutYNl.jpeg\"]', 12, '2', 200, NULL, 'AMD'),
(4, 'Le tout dernier AMD Ryzen Threadripper 2970WX débarque et vient dépasser de loin les caractéristiques atteintes par les 3 processeurs Threadripper de première génération dédiés aux performances gaming.', '[{\"name\": \"frequence\", \"specification\": \"3,5 GHz\"}, {\"name\": \"Frequence Boost\", \"specification\": \"4 GHz\"}, {\"name\": \"frequence ram\", \"specification\": \"DDR4 2666 MHz\"}, {\"name\": \"Chipset\", \"specification\": \"AMD X399\"}, {\"name\": \"Cores\", \"specification\": \"12\"}, {\"name\": \"Threads\", \"specification\": \"24\"}, {\"name\": \"Plateforme\", \"specification\": \"AMD Zen\"}, {\"name\": \"Finesse de gravure\", \"specification\": \"0.014 Nanomètre\"}, {\"name\": \"TDP\", \"specification\": \"180 W\"}]', 0, 1399, '2019-07-03 12:12:43', '2019-07-08 11:33:37', 'AMD Ryzen Threadripper 2970WX (3 GHz)', '[\"/storage/productImages/nhZ5gwdLAhJKu3VjFMEeKFUnvtsQyJaSCM2juazB.jpeg\", \"/storage/productImages/FloriABmP5iynLc2KzAiPk6lqyHHqfDRKxSmYJKe.jpeg\", \"/storage/productImages/mqGm2yM7vCAywijzxnQf9pdFa7BKF1Zj8N2Rgy86.jpeg\", \"/storage/productImages/0aongEbZtUoNHBvjysreNDJ6bbOGBbYWOY2cp6l8.jpeg\", \"/storage/productImages/pfT5Leo1oxGkTBxYU13i9KC76TtfLxXWrmqtYXEU.jpeg\", \"/storage/productImages/rGUnpUc7fs8vds5AzBTG8lvKVExb52jFsqupKLuX.jpeg\"]', 41, '2', 220, NULL, 'AMD'),
(5, 'Basé sur l\'architecure Excavator sur socket AM4, le processeur AMD A10 9700 Bristol Ridge bénéficie d\'une puce graphique Radeon R7 intégrée ainsi qu\'une technologie quadcore. Finesse de gravure améliorée, chipset graphique haut de gamme, unification des coeurs CPU et GPU ... Autant de nouveautés et d\'améliorations qui font de ces nouveaux processeurs une solution idéale pour faire évoluer votre matériel et répondre à vos besoins tant multimédias que gaming.', '[{\"name\": \"frequence\", \"specification\": \"3,5 GHz\"}, {\"name\": \"Frequence Boost\", \"specification\": \"4 GHz\"}, {\"name\": \"frequence ram\", \"specification\": \"DDR4 2666 MHz\"}, {\"name\": \"Chipset\", \"specification\": \"AMD X399\"}, {\"name\": \"Cores\", \"specification\": \"12\"}, {\"name\": \"Threads\", \"specification\": \"24\"}, {\"name\": \"Plateforme\", \"specification\": \"AMD Zen\"}, {\"name\": \"Finesse de gravure\", \"specification\": \"0.014 Nanomètre\"}, {\"name\": \"TDP\", \"specification\": \"180 W\"}]', 0, 71, '2019-07-03 12:20:37', '2019-07-08 11:09:23', 'AMD A10 9700 (3,5 GHz)', '[\"/storage/productImages/iewy8Hixg8VmQAyvUawDNhqqRKkcj4TaRjYh9uRU.jpeg\", \"/storage/productImages/TSUlELHTBixQtQQLMhPRdH70PkaAZ2cgXF1PY3wk.jpeg\", \"/storage/productImages/GOeXjgnf593iKOC0DOePGaqesDUSzGQznyoq1JgI.jpeg\"]', 3, '2', 100, NULL, 'AMD'),
(6, 'Avec la 7ème génération de processeurs, Intel met à votre disposition une architecture ultra-moderne et puissante. La gamme Intel Celeron profite d\'une plateforme technologique haute performance pour satisfaire toutes les utilisations bureautique du quotidien. Grâce à une finesse de gravure 14 nanomètres, une fréquence mémoire DDR4 (2133 MHz) et consommation optimisée, le processeur Intel Celeron offre à votre PC une expérience informatique efficace et économique.', '[{\"name\": \"frequence\", \"specification\": \"3,5 GHz\"}, {\"name\": \"Frequence Boost\", \"specification\": \"4 GHz\"}, {\"name\": \"frequence ram\", \"specification\": \"DDR4 2666 MHz\"}, {\"name\": \"Chipset\", \"specification\": \"AMD X399\"}, {\"name\": \"Cores\", \"specification\": \"12\"}, {\"name\": \"Threads\", \"specification\": \"24\"}, {\"name\": \"Plateforme\", \"specification\": \"AMD Zen\"}, {\"name\": \"Finesse de gravure\", \"specification\": \"0.014 Nanomètre\"}, {\"name\": \"TDP\", \"specification\": \"180 W\"}]', 0, 69, '2019-07-03 13:48:46', '2019-07-07 17:51:16', 'Intel Celeron G3930', '[\"/storage/productImages/Zs8nG43TzjbU9M6lBQ11Q9ZHGo9Ff0ton2GXDXmm.jpeg\"]', 1, '1', 100, NULL, 'undefined'),
(7, 'Avec la 8ème génération de processeurs (Coffee Lake) et le Core i5 8500, Intel met à votre disposition une architecture ultra-moderne et encore plus puissante. Profitez d\'une plateforme technologique haute performance grâce à une finesse de gravure 14 nanomètres, une fréquence DDR4 revue à la hausse avec 2666 MHz et une rapidité toujours plus élevée. Le processeur Intel Core i5 8500 offre à votre PC la meilleure expérience visuelle ainsi qu\'une vitesse d\'exécution sans commune mesure avec le principal gain par rapport à l\'ancienne génération, les Core i5 passent à 6 coeurs !', '[{\"name\": \"frequence\", \"specification\": \"3 GHz\"}, {\"name\": \"Cores\", \"specification\": \"6\"}, {\"name\": \"Threads\", \"specification\": \"6\"}, {\"name\": \"Plateforme\", \"specification\": \"Intel Coffee Lake\"}, {\"name\": \"Finesse de gravure\", \"specification\": \"0.014 nanomètres\"}, {\"name\": \"TDP\", \"specification\": \"65 W\"}]', 0, 269, '2019-07-03 13:56:10', '2019-07-03 13:56:10', 'Intel Core i5 8500', '[\"/storage/productImages/oPu94B8QDr1FSdEmhAs5BuEjf5CQ543kNr4XFM3p.jpeg\"]', 0, '1', 150, NULL, 'Intel'),
(8, 'Avec la 9ème génération de processeurs (Coffee Lake S / Coffe Lake Refresh) et le Core i5 9600KF, Intel met à votre disposition une architecture ultra-moderne et encore plus puissante. Profitez d\'une plateforme technologique haute performance avec une fréquence DDR4 toujours à 2666 MHz et une rapidité toujours plus élevée avec une fréquence de base cadencée à 3,70 GHz efficaces en toutes circonstances, avec la technologie Turbo Boost 3.0 qui pousse cette fréquence à 4,6 Ghz. Le processeur Intel Core i5 9600KF offre à votre PC la meilleure expérience visuelle ainsi qu\'une vitesse d\'exécution sans commune mesure avec 6 coeurs.', '[{\"name\": \"frequence\", \"specification\": \"3.7 GHz\"}, {\"name\": \"Frequence Boost\", \"specification\": \"4.6 GHz\"}, {\"name\": \"frequence ram\", \"specification\": \"DDR4 2666 MHz\"}, {\"name\": \"Cores\", \"specification\": \"6\"}, {\"name\": \"Threads\", \"specification\": \"6\"}, {\"name\": \"Plateforme\", \"specification\": \"Intel Coffee Lake R\"}, {\"name\": \"Finesse de gravure\", \"specification\": \"0.014 Nanomètre\"}, {\"name\": \"TDP\", \"specification\": \"95 W\"}]', 320, 259, '2019-07-03 14:13:33', '2019-07-05 08:46:20', 'Intel Core i5 9600KF', '[\"/storage/productImages/c9HBoWlkEonVUgkmUsO94UTq6F1x7Ias8nAAbijE.jpeg\"]', 0, '1', 150, NULL, 'Intel'),
(9, 'Broadwell-E pour processeurs desktop Intel Core est la déclinaison haut de gamme de l\'architecture Broadwell apparue en milieu d\'année 2015. Une architecture ultra moderne qui anime les processeurs Core i7 les plus performants de la marque. Des processeurs dans lesquels se côtoient une puissance en constante augmentation et une consommation en baisse.', '[{\"name\": \"frequence\", \"specification\": \"3.6 GHz\"}, {\"name\": \"Frequence Boost\", \"specification\": \"4 GHz\"}, {\"name\": \"frequence ram\", \"specification\": \"DDR4 2400 MHz\"}, {\"name\": \"Cores\", \"specification\": \"6\"}, {\"name\": \"Threads\", \"specification\": \"12\"}, {\"name\": \"Plateforme\", \"specification\": \"Intel Broadwell\"}, {\"name\": \"Finesse de gravure\", \"specification\": \"0.014 Nanomètre\"}, {\"name\": \"TDP\", \"specification\": \"140 W\"}]', 0, 429, '2019-07-03 14:22:12', '2019-07-06 16:11:26', 'Intel Core i7 6850K', '[\"/storage/productImages/zO3dfso8josFxUtc7xcTeu0ULHtp5WRF2LU8pZrX.jpeg\"]', 0, '1', 200, NULL, 'Intel'),
(10, 'Avec la 9ème génération de processeurs (Coffee Lake S / Coffe Lake Refresh) et le Core i9 9900K, Intel met à votre disposition une architecture ultra-moderne et encore plus puissante. Profitez d\'une plateforme technologique haute performance avec une fréquence DDR4 toujours à 2666 MHz et une rapidité toujours plus élevée avec une fréquence de base cadencée à 3,60 GHz efficaces en toutes circonstances, avec la technologie Turbo Boost 2.0 qui pousse cette fréquence à 5,00 Ghz. Le processeur Intel Core i9 9900K offre à votre PC la meilleure expérience visuelle ainsi qu\'une vitesse d\'exécution sans commune mesure avec le principal gain par rapport à l\'ancienne génération, le Core i9 passe à 8 coeurs et 16 threads.', '[{\"name\": \"frequence\", \"specification\": \"3,5 GHz\"}, {\"name\": \"Frequence Boost\", \"specification\": \"4 GHz\"}, {\"name\": \"frequence ram\", \"specification\": \"DDR4 2666 MHz\"}, {\"name\": \"Chipset\", \"specification\": \"AMD X399\"}, {\"name\": \"Cores\", \"specification\": \"12\"}, {\"name\": \"Threads\", \"specification\": \"24\"}, {\"name\": \"Plateforme\", \"specification\": \"AMD Zen\"}, {\"name\": \"Finesse de gravure\", \"specification\": \"0.014 Nanomètre\"}, {\"name\": \"TDP\", \"specification\": \"180 W\"}]', 0, 539, '2019-07-03 14:31:36', '2019-07-04 13:19:04', 'Intel Core i9 9900K', '[\"/storage/productImages/AlOHGZqHV4GCeejX6SvHW3gnJPhtaHLoAP6h1WJq.jpeg\"]', 0, '1', 95, NULL, 'AMD'),
(11, 'Avec la nouvelle gamme de mémoires PC haut de gamme Vengeance LPX Series, Corsair propose des solutions stables et performantes pour les plateformes nouvelle génération avec en prime un fort potentiel d\'overclocking.', '[{\"name\": \"Nombre de barettes\", \"specification\": \"2\"}, {\"name\": \"frequence\", \"specification\": \"2666MHZ\"}, {\"name\": \"Type de ram\", \"specification\": \"DDR4\"}, {\"name\": \"LED\", \"specification\": \"non\"}, {\"name\": \"Capacité par barette\", \"specification\": \"32Go\"}]', 20, 159, '2019-07-07 18:49:05', '2019-07-07 19:19:59', 'Corsair Vengeance LPX Series Low Profile 32 Go (2x 16 Go) DDR4 2666 MHz CL16', '[\"/storage/productImages/YCpfOZjuW38dd8PDB1W6KtX7m8NxH2syAvT2cTQS.jpeg\", \"/storage/productImages/GYAxGQXNpimg8OJFoKLA2UA3vESGEJRWIMaAbN3n.jpeg\", \"/storage/productImages/hKRdZJIeg9JWes0qvtP3DhxnZ7wBS1pm6M8wU7WK.jpeg\", \"/storage/productImages/Yq0JaIorNMeOFGxI6wCqfNBBkh5CREmiAhHqgVuR.jpeg\"]', 2, '10', 100, NULL, 'Corsair'),
(12, 'Avec la nouvelle gamme de mémoires PC haute fiabilité ValueSelect, Corsair propose des solutions stables et performantes pour les plateformes nouvelle génération. Avec des tensions nominales de 1.2V les mémoires PC ValueSelect sont optimisées pour les plateformes Intel de 6ème génération !', '[{\"name\": \"Nombre de barettes\", \"specification\": \"2\"}, {\"name\": \"frequence\", \"specification\": \"2400 MHz\"}, {\"name\": \"Latence CAS\", \"specification\": \"CL16 (16-16-16-39)\"}, {\"name\": \"LED\", \"specification\": \"non\"}]', 0, 40, '2019-07-07 18:53:10', '2019-07-07 19:19:41', 'Corsair ValueSelect 8 Go DDR4 2400 MHz CL16', '[\"/storage/productImages/m6lEIoDj1mUoiz0OdzVnUIbbEn8CBY6HnoWPtWU2.jpeg\", \"/storage/productImages/8cQhqEO6XF2p9WApRxDHF3oMz4WA0uPmtTN7EQWW.jpeg\"]', 1, '10', 100, NULL, 'Corsair'),
(13, 'Cette barette de mémoire G.Skill vous permettra de booster les performances de votre système tout en pérennisant l\'exécution de vos programmes. Fiabilité, vitesse et performances sont au rendez-vous grâce à ce module de mémoire vive de type DDR3-SDRAM PC3-12800 au format DIMM 240 broches (DDR3).', '[{\"name\": \"Nombre de barettes\", \"specification\": \"1\"}, {\"name\": \"Capacité par barette\", \"specification\": \"4 Go\"}, {\"name\": \"frequence\", \"specification\": \"PC3-12800 - 1600 MHz\"}, {\"name\": \"Latence CAS\", \"specification\": \"CL11 (11-11-11-28 2N)\"}]', 0, 19, '2019-07-07 18:54:51', '2019-07-07 18:54:51', 'G.Skill NS Series 4 Go DDR3 1600 MHz CL11', '[\"/storage/productImages/2VliNxSPCYetzD3y68xoYCbe5pZ0bMOVW1AS8O8k.jpeg\"]', 0, '9', 100, NULL, 'G.Skill'),
(14, 'Ce module mémoire G.Skill vous permettra de booster les performances de votre système tout en pérennisant l\'exécution de vos programmes. Fiabilité, vitesse et performances sont au rendez-vous grâce à cette barrette de mémoire vive de type DDR3-SDRAM PC3-10600 au format DIMM 240 broches (DDR3).', '[{\"name\": \"Nombre de barettes\", \"specification\": \"1\"}, {\"name\": \"Capacité par barette\", \"specification\": \"4 Go\"}, {\"name\": \"frequence\", \"specification\": \"1333 MHz\"}, {\"name\": \"Latence CAS\", \"specification\": \"CL9 (9-9-9-24)\"}]', 0, 19, '2019-07-07 18:57:04', '2019-07-07 18:57:04', 'G.Skill NT Series 4 Go DDR3 1333 MHz', '[\"/storage/productImages/5Xbf9gAtHbFfP6mlW4gmvLa2ykuP1IfBg9OVZfFt.jpeg\"]', 0, '9', 100, NULL, 'G.Skill'),
(15, 'Au Format ATX, la carte mère Asus PRIME X299-A destinée aux nouveaux processeurs INTEL X Series de 6&ème (Skylake) et 7ème génération (Kaby Lake) est équipée de 8 ports SATA revision 3.0 et 3 PCIE 16x. Si vous préférez opter pour la puissance de cartes graphiques dédiées la carte mère PRIME X299-A est également dotée de 3 ports PCI-Express 16x et supporte les technologies SLI et Crossfire.', '[{\"name\": \"socket\", \"specification\": \"2066\"}, {\"name\": \"Chipset\", \"specification\": \"Intel X299\"}, {\"name\": \"Format\", \"specification\": \"ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"8\"}, {\"name\": \"Memoire ram max\", \"specification\": \"128\"}, {\"name\": \"Connecteur Graphique\", \"specification\": \"PCIe 16x\"}]', 0, 500, '2019-07-07 18:57:43', '2019-07-07 18:57:43', 'Asus ROG STRIX X299-XE GAMING', '[\"/storage/productImages/8dy7T620s9C3HWLjbsw0ZKcdwVSW5VrAzLcPjt9j.jpeg\"]', 0, '3', 150, NULL, 'Asus'),
(16, 'Au Format ATX, la carte mère Asus PRIME X299-Deluxe II destinée aux nouveaux processeurs INTEL X Series de 6ème (Skylake) et 7ème génération (Kaby Lake) est équipée de 8 ports SATA revision 3.0 et 3 PCIE 16x. Si vous préférez opter pour la puissance de cartes graphiques dédiées la carte mère PRIME X299-DELUXE II est également dotée de 3 ports PCI-Express 16x et supporte les technologies SLI et Crossfire.', '[{\"name\": \"socket\", \"specification\": \"2066\"}, {\"name\": \"Chipset\", \"specification\": \"Intel X299\"}, {\"name\": \"Format\", \"specification\": \"ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"8\"}, {\"name\": \"Memoire ram max\", \"specification\": \"128\"}, {\"name\": \"Connecteur Graphique\", \"specification\": \"PCIe 16x\"}]', 0, 549, '2019-07-07 18:58:54', '2019-07-08 05:00:11', 'ASUS PRIME X299-DELUXE II', '[\"/storage/productImages/IwUg9zondktWnIbEFtHVYjc40FdeRXRBtmo63Tle.jpeg\"]', 1, '3', 350, NULL, 'Asus'),
(17, 'Équipée de 2 ports USB 3.1 Gen2 (1 type A et 1 type C), 4 ports USB 3.1 Gen1, de 8 ports SATA Revision 3.0, de 2 ports M.2 et de 4 ports PCI-Express 16x, la X299 GAMING M7 ACK est compatible avec les technologies Crossfire (3 cartes graphiques) et SLI (2 cartes graphiques).', '[{\"name\": \"socket\", \"specification\": \"2066\"}, {\"name\": \"Chipset\", \"specification\": \"Intel X299 GAMING M7\"}, {\"name\": \"Format\", \"specification\": \"ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"8\"}, {\"name\": \"Memoire ram max\", \"specification\": \"128\"}, {\"name\": \"Connecteur Graphique\", \"specification\": \"PCIe 16x\"}]', 0, 416, '2019-07-07 19:00:32', '2019-07-07 19:00:32', 'MSI X299 GAMING M7 ACK', '[\"/storage/productImages/6z2qcd8onTqi2mzE9CSE45cccIhTApRHm0li3R2n.jpeg\"]', 0, '3', 350, NULL, 'MSI'),
(18, 'Avec la nouvelle gamme de mémoires PC haut de gamme RipJaws SO-DIMM, G.Skill propose des solutions ultra-rapides avec une fiabilité totale pour profiter pleinement des processeurs de 6e génération de vos ordinateurs portables. L\'overclocking automatique des G.Skill RipJaws Series SO-DIMM  assure des vitesses à couper le souffle. Ces mémoires sont conçues pour dépasser les normes industrielles afin d\'assurer une compatibilité maximale avec pratiquement tous les ordinateurs Intel de 6e génération.', '[{\"name\": \"Nombre de barettes\", \"specification\": \"2\"}, {\"name\": \"Capacité par barette\", \"specification\": \"16 Go (2 x 8 Go)\"}, {\"name\": \"frequence\", \"specification\": \"2400 MHz\"}, {\"name\": \"Latence CAS\", \"specification\": \"CL16 (16-16-16-39)\"}]', 0, 75, '2019-07-07 19:01:13', '2019-07-07 19:01:13', 'G.Skill RipJaws Series SO-DIMM 16 Go (2 x 8 Go) DDR4 2400 MHz CL16', '[\"/storage/productImages/JlY6P3gFR1C4FVknGG30dqdODJ3zXVLpBXOunQIP.jpeg\"]', 0, '10', 150, NULL, 'G.Skill'),
(19, 'Basée sur un chipset Intel X299, la carte mère Gigabyte X299 UD4 PRO représente intègre une multitude de nouvelles innovations et améliorations GIGABYTE. Toutes ces innovations ne visent qu\'un seul et même objectif : atteindre des performances au delà de vos attentes. Aucun soucis avec la carte mère Gigabyte X299 UD4 PRO qui repose sur le socket 2066 vous permettant de faire évoluer votre PC d\'un processeur i5 à un i9.', '[{\"name\": \"socket\", \"specification\": \"2066\"}, {\"name\": \"Chipset\", \"specification\": \"Intel 299\"}, {\"name\": \"Format\", \"specification\": \"ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"8\"}, {\"name\": \"Memoire ram max\", \"specification\": \"128\"}, {\"name\": \"Connecteur Graphique\", \"specification\": \"PCIe 16x\"}]', 0, 389, '2019-07-07 19:02:57', '2019-07-07 19:07:07', 'Gigabyte X299 UD4 PRO', '[\"/storage/productImages/okzzm696CiQncCr52linTNQjoqAf1idv7LYw0BwI.jpeg\"]', 1, '3', 278, NULL, 'GYGABYTE'),
(20, 'Au Format ATX, la carte mère Asus PRIME X299-A destinée aux nouveaux processeurs INTEL X Series de 6ème (Skylake) et 7ème génération (Kaby Lake) est équipée de 8 ports SATA revision 3.0 et 3 PCIE 16x. Si vous préférez opter pour la puissance de cartes graphiques dédiées la carte mère PRIME X299-A est également dotée de 3 ports PCI-Express 16x et supporte les technologies SLI et Crossfire.', '[{\"name\": \"socket\", \"specification\": \"2066\"}, {\"name\": \"Chipset\", \"specification\": \"Intel 299\"}, {\"name\": \"Format\", \"specification\": \"ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"8\"}, {\"name\": \"Memoire ram max\", \"specification\": \"128\"}, {\"name\": \"Connecteur Graphique\", \"specification\": \"PCIe 16x\"}]', 0, 389, '2019-07-07 19:04:52', '2019-07-07 19:05:51', 'Asus Prime X299-A', '[\"/storage/productImages/2lqvVgeytaXZa9q3AaPhHqFWeJESWMCSrbPpXwdw.jpeg\"]', 0, '3', 278, NULL, 'Asus'),
(21, 'Dominez le jeu avec l\'HyperX FURY. Même les débutants peuvent bénéficier des meilleures vitesses, puisque FURY reconnaît la plateforme hôte et sélectionne automatiquement la plus haute fréquence de surcadençage annoncée – allant jusqu\'à 1866MHz. Vous aurez la certitude de disposer de votre puissance maximale pour votre prochain combat à mort. Outre un prix accessible, la mémoire FURY offre un dissipateur thermique asymétrique noir, bleu, rouge, mais aussi un design blanc avec une carte imprimée noire, pour la première fois dans la gamme HyperX. 100% testée, la HyperX FURY bénéficie d\'une garantie constructeur à vie.', '[{\"name\": \"Nombre de barettes\", \"specification\": \"2\"}, {\"name\": \"Capacité par barette\", \"specification\": \"16Go (2x8 Go)\"}, {\"name\": \"frequence\", \"specification\": \"1600 MHz\"}, {\"name\": \"LED\", \"specification\": \"non\"}]', 0, 113, '2019-07-07 19:04:58', '2019-07-07 19:04:58', 'HyperX Fury 16 Go (2 x 8 Go) DDR3L 1600 MHz CL10', '[\"/storage/productImages/UutGL7iDMvT2LmklZE83xnn0bV18ICGrSmMosLzu.jpeg\"]', 0, '9', 123, NULL, 'HyperX'),
(22, 'Dominez le jeu avec l\'HyperX FURY. Même les débutants peuvent bénéficier des meilleures vitesses, puisque FURY reconnaît la plateforme hôte et sélectionne automatiquement la plus haute fréquence de surcadençage annoncée. Vous aurez la certitude de disposer de votre puissance maximale pour votre prochain combat à mort. Outre un prix accessible, la mémoire FURY offre un dissipateur thermique asymétrique noir, bleu, rouge, mais aussi un design blanc avec une carte imprimée noire, pour la première fois dans la gamme HyperX. 100% testée, la HyperX FURY bénéficie d\'une garantie à vie et d\'un support technique gratuit.', '[{\"name\": \"Nombre de barettes\", \"specification\": \"2\"}, {\"name\": \"Capacité par barette\", \"specification\": \"16Go (2x8 Go)\"}, {\"name\": \"frequence\", \"specification\": \"1333 MHz\"}, {\"name\": \"LED\", \"specification\": \"non\"}]', 0, 113, '2019-07-07 19:06:42', '2019-07-07 19:06:42', 'HyperX Fury 16 Go (2x 8Go) DDR3 1333 MHz CL9', '[\"/storage/productImages/BGS0KX6sTz6WRujSN9g6cDZVXYyw5omv0gFP6XEQ.jpeg\", \"/storage/productImages/ahQtt0ykWnn9xyJLOMf5l2x9ZZjnowSEhCRgk1uR.jpeg\", \"/storage/productImages/cHAKJgDwtoPmN9xY6A0O7TVKKYQnuJFqc7M2Ss8h.jpeg\", \"/storage/productImages/SgtBJ2sGgWGE4ipjBApa3hV2IdYRk5CzMUmBRuEz.jpeg\"]', 0, '9', 123, NULL, 'HyperX'),
(23, 'La mémoire HyperX Fury DDR4 vous aidera à affronter les combats les plus durs. Elle reconnaît automatiquement la plate-forme hôte et sélectionne automatiquement la plus haute fréquence de surcadençage annoncée (allant jusqu\'à 2666MHz). Vous allez pouvoir déchaîner toute votre puissance sur vos adversaires. Offrant une latence CAS basse et les timings les plus agressifs sur des modules à haute vitesse, une nouvelle génération de performances est arrivée.', '[{\"name\": \"Nombre de barettes\", \"specification\": \"2\"}, {\"name\": \"Capacité par barette\", \"specification\": \"32 Go (2x16 Go)\"}, {\"name\": \"frequence\", \"specification\": \"2400MHz\"}, {\"name\": \"LED\", \"specification\": \"non\"}]', 0, 231, '2019-07-07 19:09:39', '2019-07-07 19:12:15', 'HyperX Fury Noir 32 Go (2x 16Go) DDR4 2400 MHz CL15', '[\"/storage/productImages/h9zpRaUjTnoaM23pmLq7a2PUK96TSZu1hIBWpBl8.jpeg\", \"/storage/productImages/fgfU539jwYUh3j8BUObHB6GZHrwaGwW4qv0W00P2.jpeg\", \"/storage/productImages/QtsXiGLKlBt0aIZA0Z6ROWF2kFVhwuT6X3sqfCDG.jpeg\", \"/storage/productImages/z3TQ8rTPRguLWz1VF93HDZ3olVYCMh0dZTlVAqay.jpeg\"]', 1, '10', 211, NULL, 'HyperX'),
(24, 'La mémoire HyperX Fury DDR4 vous aidera à affronter les combats les plus durs. Elle reconnaît automatiquement la plate-forme hôte et sélectionne automatiquement la plus haute fréquence de surcadençage annoncée (allant jusqu\'à 3466MHz). Vous allez pouvoir déchaîner toute votre puissance sur vos adversaires. Offrant une latence CAS basse et les timings les plus agressifs sur des modules à haute vitesse, une nouvelle génération de performances est arrivée.', '[{\"name\": \"Nombre de barettes\", \"specification\": \"2\"}, {\"name\": \"Capacité par barette\", \"specification\": \"32 Go (2x16 Go)\"}, {\"name\": \"frequence\", \"specification\": \"3466 MHz\"}, {\"name\": \"LED\", \"specification\": \"non\"}]', 0, 231, '2019-07-07 19:12:00', '2019-07-07 19:12:00', 'HyperX Fury Noir 32 Go (2x 16Go) DDR4 2666 MHz CL16', '[\"/storage/productImages/hOtsna4umNayU3HDjGcxahmZrlwD6OeZAI9UiaOy.jpeg\", \"/storage/productImages/BAUSRCP8xICe03vLWquqettmIDZEzJzvjh0mjkkZ.jpeg\", \"/storage/productImages/E05eD9lfsydQxsjjM3pNcrDotweaCbJKBcvlHFcE.jpeg\", \"/storage/productImages/RxdXiCwhI8XH3RdXep9hUMvkCpwTZSbtGnVldgfX.jpeg\"]', 0, '10', 211, NULL, 'HyperX'),
(25, 'La carte mère Asus MAXIMUS XI GENE permet d\'intégrer la dernière génération de processeur Intel série 9 (Coffee lake S refresh). Elle est équipée de 4 ports SATA revision 3.0 et surtout de la possibilité d\'accueillir 4 SSD au format M.2 (dont 2 via module d\'extension fourni). Optez pour une carte sans compromis sur les performances au format micro ATX.', '[{\"name\": \"socket\", \"specification\": \"1155\"}, {\"name\": \"Chipset\", \"specification\": \"x99\"}, {\"name\": \"Format\", \"specification\": \"Micro ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"4\"}, {\"name\": 0, \"specification\": null}]', 0, 324, '2019-07-07 19:14:40', '2019-07-08 05:04:51', 'ASUS ROG MAXIMUS XI GENE', '[\"/storage/productImages/88bg2UR09hJ97vxLWBcUmnQgZGXY4Tw60fAkWsVB.jpeg\"]', 1, '4', 129, NULL, 'Asus'),
(26, 'Au Format ATX, basée sur un chipset Intel Z390, la carte mère ASUS TUF Z390M-PRO GAMING (WI-FI) destinée aux nouveaux processeurs INTEL de 9ème génération (Coffe Lake S) est équipée de 6 ports SATA revision 3.0, de 2 ports USB 3.1 Gen 2 Type A et 4 ports USB 3.1 Gen 1. Elle dispose également de 2 sorties vidéos (HDMI, DVI) et gère les processeurs équipés d\'une puce graphique Intel HD Graphics supportant le DirectX 12. Au programme également : 2 ports M.2. La carte mère gaming TUF fait bien plus que survivre sur un champ de bataille : c\'est là qu\'elle dévoile tout son potentiel ! Imprégnée de l\'esprit militaire des cartes mères TUF (The Ultimate Force) et conçue pour inspirer la peur en chacun de vos ennemis, la ASUS TUF Z390M-PRO GAMING (WI-FI) basée sur l\'architecture Coffee Lake Refresh est un bon début dans le montage de votre PC gaming ATX : solide, durable et revêtue d\'un design camouflage, elle est parée aux batailles d\'aujourd\'hui et de demain grâce à sa grande capacité de mise à niveau.', '[{\"name\": \"socket\", \"specification\": \"1155\"}, {\"name\": \"Chipset\", \"specification\": \"x99\"}, {\"name\": \"Format\", \"specification\": \"Micro ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"4\"}, {\"name\": 0, \"specification\": null}]', 0, 324, '2019-07-07 19:15:20', '2019-07-07 19:15:20', 'ASUS TUF Z390M-PRO GAMING (WI-FI)', '[\"/storage/productImages/dvSsSfMRKVaw4tqVU5yIldJpG5fmXwatYIbXWrpt.jpeg\"]', 0, '4', 129, NULL, 'Asus'),
(27, 'Au format micro-ATX mais au design résolument gaming, la carte mère Asus ROG STRIX B360-G GAMING est prête à vous faire profiter des performances des processeurs Intel Core de 8ème génération. Dotée de ports M.2, du support de la mémoire DDR4 et de nombreuses technologies audio et réseau orientées gaming, elle se révèle comme une base excellente pour votre premier PC de jeu !', '[{\"name\": \"socket\", \"specification\": \"1155\"}, {\"name\": \"Chipset\", \"specification\": \"x99\"}, {\"name\": \"Format\", \"specification\": \"Micro ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"4\"}, {\"name\": 0, \"specification\": null}]', 0, 324, '2019-07-07 19:16:20', '2019-07-07 19:16:20', 'Asus ROG STRIX B360-G GAMING', '[\"/storage/productImages/s48pSbHGeqJoC5NSK26J2VE9FcSJ8WNwDRqcM9lc.jpeg\"]', 0, '4', 129, NULL, 'Asus'),
(28, 'Au Format Mini-ITX, basée sur un chipset Intel Z390, la carte mère ASUS STRIX Z390-I GAMING est destinée aux nouveaux processeurs INTEL de 9ème génération (Coffe Lake S). Le format compact de la carte mère STRIX Z370-I GAMING ne l\'empêche pas d\'être équipée de 4 ports SATA revision 3.0, de 2 ports USB 3.1 Gen2 (type A) et 2 ports USB 3.1 Gen1 et d\'un USB Type C. Elle dispose aussi de 2 sorties vidéos (HDMI et Displayport).', '[{\"name\": \"socket\", \"specification\": \"1155\"}, {\"name\": \"Chipset\", \"specification\": \"x99\"}, {\"name\": \"Format\", \"specification\": \"Micro ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"2\"}, {\"name\": 0, \"specification\": null}]', 0, 324, '2019-07-07 19:17:41', '2019-07-08 05:01:11', 'ASUS ROG STRIX Z390-I GAMING', '[\"/storage/productImages/jWNwBooDH17rLmjVn3DpdAZ1bVwCkGRHsF0VGU0n.jpeg\"]', 1, '5', 129, NULL, 'Asus'),
(29, 'Basée sur un chipset AMD B450, la carte mère Gigabyte B450i AORUS Wi-Fi est une carte mère idéale pour tous les utilisateurs desireux de monter un PC performants et compact, grâce à une multitudes de nouvelles innovations et améliorations GIGABYTE. Niveau connectique la B450i AORUS Wi-Fi offre tout ce dont un gamer peut rêver avec un port PCI-Express 16x, 2 ports USB 3.1 Gen 2, 4 ports SATA, 1 port d\'extension M.2, et des sorties vidéos HDMI et DisplayPort.', '[{\"name\": \"socket\", \"specification\": \"1155\"}, {\"name\": \"Chipset\", \"specification\": \"x99\"}, {\"name\": \"Format\", \"specification\": \"Micro ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"2\"}, {\"name\": 0, \"specification\": \"null\"}]', 0, 324, '2019-07-07 19:18:19', '2019-07-07 19:20:27', 'Gigabyte B450i AORUS Wi-Fi', '[\"/storage/productImages/7fts0riO7wXoaotjgs7n1r5Ce8yOkMQMNLhMBfCc.jpeg\"]', 0, '5', 129, NULL, 'GYGABYTE'),
(30, 'Basée sur un chipset AMD B450, la carte mère Gigabyte B450i AORUS Wi-Fi est une carte mère idéale pour tous les utilisateurs desireux de monter un PC performants et compact, grâce à une multitudes de nouvelles innovations et améliorations GIGABYTE. Niveau connectique la B450i AORUS Wi-Fi offre tout ce dont un gamer peut rêver avec un port PCI-Express 16x, 2 ports USB 3.1 Gen 2, 4 ports SATA, 1 port d\'extension M.2, et des sorties vidéos HDMI et DisplayPort.', '[{\"name\": \"socket\", \"specification\": \"1155\"}, {\"name\": \"Chipset\", \"specification\": \"x99\"}, {\"name\": \"Format\", \"specification\": \"Micro ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"2\"}, {\"name\": 0, \"specification\": null}]', 0, 324, '2019-07-07 19:19:53', '2019-07-07 19:19:53', 'Gigabyte B450i AORUS', '[\"/storage/productImages/tEPChV6PQN04dVUQ6VWaq7hkueL5BT1rsaNH4bxa.jpeg\"]', 0, '5', 129, NULL, 'GYGABYTE'),
(31, 'Les cartes mères MSI Performance GAMING dont fait partie la MSI Z370I GAMING PRO CARBON AC délivrent une expérience gaming complète, que vous cherchiez à enchaîner les frags sur le champ de bataille, à terminer votre quête ou à faire évoluer votre personnage préféré. Les cartes mères MSI Performance GAMING arborent un look unique et personnalisable et toutes les fonctionnalités dont les gamers ont besoin.', '[{\"name\": \"socket\", \"specification\": \"1155\"}, {\"name\": \"Chipset\", \"specification\": \"x99\"}, {\"name\": \"Format\", \"specification\": \"Micro ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"2\"}, {\"name\": 0, \"specification\": null}]', 0, 324, '2019-07-07 19:21:38', '2019-07-07 19:21:38', 'MSI Z370I GAMING PRO CARBON AC', '[\"/storage/productImages/AYaAhU936rL3QBbfr87QSlmCtwxN7kJl6PzzQYdu.jpeg\"]', 0, '5', 129, NULL, 'MSI'),
(32, 'La carte mère STRIX X370-I GAMING est équipée de 4 ports SATA revision 3.0, de 4 ports USB 3.1 Gen1 et 2 ports USB 3.1 Gen2. Elle dispose egalement du Bluetooth 4.2 et de la norme Wifi AC double bande MU-MIMO.', '[{\"name\": \"socket\", \"specification\": \"1155\"}, {\"name\": \"Chipset\", \"specification\": \"x99\"}, {\"name\": \"Format\", \"specification\": \"Micro ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"2\"}, {\"name\": 0, \"specification\": null}]', 0, 324, '2019-07-07 19:23:36', '2019-07-07 19:23:36', 'Asus STRIX X370-I GAMING', '[\"/storage/productImages/XoHXtRbY5FndwpZRUfzoQ4XwHY52CAlXBO0aQSKQ.jpeg\"]', 0, '5', 129, NULL, 'MSI'),
(33, 'La carte mère STRIX X370-I GAMING est équipée de 4 ports SATA revision 3.0, de 4 ports USB 3.1 Gen1 et 2 ports USB 3.1 Gen2. Elle dispose egalement du Bluetooth 4.2 et de la norme Wifi AC double bande MU-MIMO.', '[{\"name\": \"socket\", \"specification\": \"1155\"}, {\"name\": \"Chipset\", \"specification\": \"x99\"}, {\"name\": \"Format\", \"specification\": \"Micro ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"2\"}, {\"name\": 0, \"specification\": null}]', 0, 324, '2019-07-07 19:25:29', '2019-07-07 19:25:29', 'Asus STRIX X370-I GAMING', '[\"/storage/productImages/bcGSNbaq6YMdwDU1XJiISdhZjZTUD02vOwmJQNRY.jpeg\"]', 0, '5', 129, NULL, 'ASUS'),
(34, 'Unique en son genre, la carte graphique Asus GeForce ROG MATRIX RTX 2080 Ti réalise la prouesse d\'embarquer un système de refroidissement watercooling tout-en-un, en conservant un format classique sur trois slots. Armée de la nouvelle puce NVIDIA Turing et des fonctionnalités de Ray Tracing et DLSS ses caractéristiques extrêmes feront le bonheur de tous les joueurs PC avides de performances !', '[{\"name\": \"Modele\", \"specification\": \"RTX 2080TI\"}, {\"name\": \"Constructeur\", \"specification\": \"ASUS\"}, {\"name\": \"Frequence memoire\", \"specification\": \"14800 MHz\"}, {\"name\": \"Taille Memoire\", \"specification\": \"11Go\"}]', 0, 324, '2019-07-07 19:28:48', '2019-07-08 05:18:10', 'Asus ROG MATRIX GeForce RTX 2080 Ti', '[\"/storage/productImages/MvyKfSNPtSko3z4LuUORi59l7iIKwxbelrkYCrow.jpeg\"]', 1, '7', 129, NULL, 'ASUS'),
(35, 'Zotac nous présente la nouvelle carte graphique haut de gamme gaming NVIDIA : la NVIDIA GeForce RTX 2080 Ti AMP Extreme (ZT-T20810B-10P) ! Dernière née de l\'architecture NVIDIA Turing, la RTX 2080 Ti AMP Extreme délivre une puissance foudroyante grâce à ses 11 Go de mémoire GDDR6 et ses 4352 coeurs CUDA ! Profitez d\'une puissance maximale pour votre PC. Jouez en multi-écrans, en 4K, avec votre casque de réalité virtuelle (VR) en graphismes maximum et sans aucun ralentissement ! Soyez prêts pour le futur du jeu et pour la Réalité Virtuelle avec NVIDIA et Zotac !', '[{\"name\": \"Modele\", \"specification\": \"RTX 2080TI\"}, {\"name\": \"Constructeur\", \"specification\": \"ASUS\"}, {\"name\": \"Frequence memoire\", \"specification\": \"14800 MHz\"}, {\"name\": \"Taille Memoire\", \"specification\": \"11Go\"}]', 0, 1200, '2019-07-07 19:30:21', '2019-07-07 19:30:21', 'Zotac GeForce RTX 2080 Ti AMP Extreme', '[\"/storage/productImages/VZrPhYobwSE5szYptyNKaf3jZm6OkIyB1jsG33px.jpeg\"]', 0, '7', 129, NULL, 'ZOTAC'),
(36, 'Démesurée, voilà l\'adjectif qui qualifie bien la nouvelle carte graphique MSI RTX 2080 Ti Lightning Z pensée pour l\'overclocking. En plus de prouesses techniques apportées par l\'architecture Turing et la puce RTX 2080 Ti, ce modèle se distingue par des mensurations massives, un refroidissement hors normes, un écran OLED présent sur le côté de la carte ainsi qu\'une backplate en fibre de carbone.', '[{\"name\": \"Modele\", \"specification\": \"RTX 2080TI\"}, {\"name\": \"Constructeur\", \"specification\": \"ASUS\"}, {\"name\": \"Frequence memoire\", \"specification\": \"14800 MHz\"}, {\"name\": \"Taille Memoire\", \"specification\": \"11Go\"}]', 0, 1300, '2019-07-07 19:31:10', '2019-07-07 19:31:10', 'MSI GeForce RTX 2080 Ti Lightning Z', '[\"/storage/productImages/PhZvakb4HYbOJszpFvit0ZRQUGGzkSWi1og2d7Wn.jpeg\"]', 0, '7', 129, NULL, 'MSI'),
(37, 'MSI propose sa nouvelle arme de gaming extrême : la MSI GeForce RTX 2080 Ti Gaming TRIO ! Parmi les premières cartes graphiques à profiter de l\'architecture Nvidia Turing elle se dote de trois ventilateurs pour refroidir ses ardeurs. Cette carte graphique MSI dédiée aux amateurs de gaming en 4K sera votre compagnon de jeu idéal !', '[{\"name\": \"Modele\", \"specification\": \"RTX 2080TI\"}, {\"name\": \"Constructeur\", \"specification\": \"ASUS\"}, {\"name\": \"Frequence memoire\", \"specification\": \"14800 MHz\"}, {\"name\": \"Taille Memoire\", \"specification\": \"11Go\"}]', 0, 1489, '2019-07-07 19:32:24', '2019-07-07 19:32:24', 'MSI GeForce RTX 2080 Ti Gaming TRIO', '[\"/storage/productImages/CvYqEgHED2lcdSPo6zXmZ2L8Hsbv1xkdQD1q8t1P.jpeg\"]', 0, '7', 129, NULL, 'MSI'),
(38, 'Avec la MSI RX 5700 XT, faites place aux nouveaux GPU AMD Radeon Navi reposant sur la nouvelle architecture RDNA ! Pensée pour atteindre des performances exceptionnelles en 1440p et une efficacité énergétique excellente, la RX 5700 compte également sur 8 Go de mémoire GDDR6 et sur la prise en charge du PCI Express 4.0 pour vous offrir une expérience de jeu ultra-confortable.', '[{\"name\": \"Modele\", \"specification\": \"AMD RX 5700\"}, {\"name\": \"Constructeur\", \"specification\": \"msi\"}, {\"name\": \"Frequence memoire\", \"specification\": \"14800 MHz\"}, {\"name\": \"Taille Memoire\", \"specification\": \"11Go\"}]', 0, 1489, '2019-07-07 19:34:18', '2019-07-07 19:34:18', 'MSI Radeon RX 5700 XT', '[\"/storage/productImages/TMF4xtL8DM5I0x2fSJfvLh4rFpbTh7jGm2bgOkBS.jpeg\"]', 0, '8', 129, NULL, 'MSI'),
(39, 'Première carte graphique gravée en 7 nm, la AMD Radeon VII d\'Asus arrive avec des performances ébouriffantes. Avec pas moins de 16 Gb de mémoire HBM2 et 1Tb/s de bande passante, elle délivre la puissance graphique nécessaire pour les jeux de dernière génération en ultra haute haute résolution.', '[{\"name\": \"Modele\", \"specification\": \"AMD RX 5700\"}, {\"name\": \"Constructeur\", \"specification\": \"msi\"}, {\"name\": \"Frequence memoire\", \"specification\": \"14800 MHz\"}, {\"name\": \"Taille Memoire\", \"specification\": \"11Go\"}]', 0, 1489, '2019-07-07 19:35:55', '2019-07-07 19:35:55', 'Asus Radeon VII', '[\"/storage/productImages/sk08sxU6Fd70c4wURgjUB9uxvzVHd725MqZZUtiP.jpeg\"]', 0, '8', 129, NULL, 'MSI'),
(40, 'La carte mère ASRock Z390M PRO4 est faite pour accueillir les processeurs Intel Core de 9ème génération (Intel Coffee Lake Refresh). Équipée du chipset Intel Z390 Express, elle servira de base à votre PC Gaming équipé d\'un processeur performant et doté de fonctionnalités exclusives ASRock.', '[{\"name\": \"socket\", \"specification\": \"Intel 1151\"}, {\"name\": \"Chipset\", \"specification\": \"Intel Z390 Express\"}, {\"name\": \"Format\", \"specification\": \"Micro ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"4\"}, {\"name\": \"Memoire ram max\", \"specification\": \"64\"}]', 0, 129, '2019-07-08 05:08:16', '2019-07-08 05:08:16', 'ASRock Z390M PRO4', '[\"/storage/productImages/KcuF3AVwWaNi1u4Lsh4GXMqe6FeAgDfTSj7sBqai.jpeg\"]', 0, '4', 211, NULL, 'ASRock'),
(41, 'Basée sur le chipset Intel B360 Express, la carte mère MSI B360M GAMING PLUS est conçue pour accueillir les processeurs Intel Core de 8ème génération (Intel Coffee Lake). Au format Micro-ATX, elle permettra l\'assemblage d\'une configuration gaming ou multimédia compacte à moindre coût.', '[{\"name\": \"Chipset\", \"specification\": \"Intel 1151\"}, {\"name\": \"Format\", \"specification\": \"Micro ATX\"}, {\"name\": \"Nombre de slot ram\", \"specification\": \"2\"}, {\"name\": \"Memoire ram max\", \"specification\": \"32\"}]', 0, 119, '2019-07-08 05:11:58', '2019-07-08 05:12:20', 'MSI B360M GAMING PLUS', '[\"/storage/productImages/aCRBRnrXhYCoaUZuAM1w18kRWN46MEA5EM3gQzDF.pdf\", \"/storage/productImages/57rAQvUzV0pEmS0Y8IFjEe3cebS6epmCQ9qK1W6D.jpeg\", \"/storage/productImages/HVdIwxf29ZKRVdKdbHdS13VmReO1Tx2GBxtDlEUJ.jpeg\", \"/storage/productImages/e67HhTSuh7DyrepKiDVlUelMRzdPe2F23NcSCf91.jpeg\"]', 2, '4', 211, NULL, 'MSI'),
(42, 'La carte graphique ASUS ROG-STRIX-GTX1660TI-A6G-GAMING - GeForce GTX 1660 Ti est idéale pour les joueurs à la recherche d\'une carte performante pour le jeu et la VR. Son architecture Nvidia Turing offre aux utilisateurs de nouvelles perspectives pour des jeux encore plus immersifs.', '[{\"name\": \"Modele\", \"specification\": \"GTX 1660 Ti\"}, {\"name\": \"Constructeur\", \"specification\": \"Asus\"}, {\"name\": \"Frequence memoire\", \"specification\": \"12002 MHz\"}, {\"name\": \"Frequence bus\", \"specification\": \"1500 MHz\"}, {\"name\": \"Type Memoire\", \"specification\": \"GDDR6\"}, {\"name\": \"Taille Memoire\", \"specification\": \"6 Go\"}]', 0, 367, '2019-07-08 05:21:31', '2019-07-08 05:21:31', 'ASUS GeForce GTX 1660 Ti ROG-STRIX-GTX1660TI-A6G-GAMING', '[\"/storage/productImages/5MySQsOz0uVfDa8AMJnEbPen4hgLDTWyx0mYqptV.jpeg\", \"/storage/productImages/LGvnKev31zvY2bYEBpLoJuNRCJy6B3OrCj8HTjla.jpeg\", \"/storage/productImages/ajwhpJXIO4TB9jdlerfr2v1LxhJTkhaB8QOUd8Hj.jpeg\"]', 0, '7', 222, NULL, 'ASUS'),
(43, 'spec', '[{\"name\": \"Memoire ram max\", \"specification\": \"25\"}, {\"name\": \"Connecteur Graphique\", \"specification\": \"Cool\"}, {\"name\": \"Format\", \"specification\": \"t\"}]', 0, 42000, '2019-07-08 10:51:07', '2019-07-08 10:51:55', 'Icarte mere', '[\"/storage/productImages/OBsBeqfdmvjPuHkD1GYYWYMaaCvTc28D8EVpGaDL.jpeg\", \"/storage/productImages/ThnUnGSkfbhcTgESiFtTte3CTKygiowC11OW2RWk.jpeg\", \"/storage/productImages/xlEGYlfTYwECvBweUtKaXU40sAvyPcPowr6P9Dq3.jpeg\", \"/storage/productImages/hgJqr0LH26Kz43HczCyrQ4IBlTKGMrmKoHrHHi0I.jpeg\"]', 0, '3', 565, NULL, 'Apple');

-- --------------------------------------------------------

--
-- Table structure for table `promo`
--

CREATE TABLE `promo` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reduction` int(11) NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `product_id`, `user_id`, `score`, `comment`, `created_at`, `updated_at`) VALUES
(1, 1, 5, 4, 'tres bon cpu, je recommande', '2019-07-06 15:17:15', '2019-07-06 15:17:15'),
(2, 1, 5, 2, 'bof je m\'attendais a plus de perf pour ce prix', '2019-07-06 15:56:15', '2019-07-06 15:56:15'),
(3, 4, 5, 3, 'bon cpu', '2019-07-06 16:08:33', '2019-07-06 16:08:33'),
(4, 4, 5, 4, 'Tres bon cpu, correspond a mes attentes', '2019-07-06 16:09:20', '2019-07-06 16:09:20'),
(5, 2, 3, 5, 'Super produit', '2019-07-07 18:21:00', '2019-07-07 18:21:00');

-- --------------------------------------------------------

--
-- Table structure for table `reviews_note`
--

CREATE TABLE `reviews_note` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `review_id` int(11) NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews_note`
--

INSERT INTO `reviews_note` (`id`, `review_id`, `value`) VALUES
(1, 1, 'yes'),
(2, 1, 'no'),
(3, 1, 'yes'),
(4, 5, 'yes'),
(5, 5, 'yes'),
(6, 5, 'yes'),
(7, 5, 'yes'),
(8, 5, 'yes'),
(9, 5, 'yes'),
(10, 5, 'yes'),
(11, 5, 'yes'),
(12, 5, 'yes'),
(13, 5, 'yes'),
(14, 5, 'yes'),
(15, 5, 'yes'),
(16, 5, 'yes'),
(17, 5, 'no'),
(18, 5, 'no'),
(19, 5, 'no'),
(20, 5, 'no'),
(21, 5, 'no'),
(22, 5, 'no'),
(23, 5, 'yes'),
(24, 5, 'yes'),
(25, 5, 'yes'),
(26, 5, 'yes'),
(27, 5, 'yes'),
(28, 5, 'yes'),
(29, 5, 'yes'),
(30, 5, 'yes'),
(31, 5, 'yes'),
(32, 5, 'yes'),
(33, 5, 'yes'),
(34, 5, 'yes'),
(35, 5, 'yes'),
(36, 5, 'yes'),
(37, 5, 'yes'),
(38, 5, 'yes'),
(39, 5, 'yes'),
(40, 5, 'yes'),
(41, 5, 'yes'),
(42, 5, 'yes'),
(43, 5, 'yes'),
(44, 5, 'yes'),
(45, 5, 'yes'),
(46, 5, 'yes'),
(47, 5, 'yes'),
(48, 5, 'yes'),
(49, 5, 'yes'),
(50, 5, 'yes'),
(51, 5, 'yes'),
(52, 5, 'no'),
(53, 5, 'no'),
(54, 5, 'no'),
(55, 5, 'no'),
(56, 5, 'no'),
(57, 5, 'no'),
(58, 5, 'no'),
(59, 5, 'no'),
(60, 5, 'no'),
(61, 5, 'no'),
(62, 5, 'no'),
(63, 5, 'no'),
(64, 5, 'no'),
(65, 5, 'no'),
(66, 5, 'no'),
(67, 5, 'no'),
(68, 5, 'no');

-- --------------------------------------------------------

--
-- Table structure for table `shipment`
--

CREATE TABLE `shipment` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `base_cost` json NOT NULL,
  `extra` json NOT NULL,
  `disponibility` json NOT NULL,
  `delivery_delay` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `per_product` decimal(8,2) NOT NULL,
  `blacklist` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `shipment`
--

INSERT INTO `shipment` (`id`, `name`, `base_cost`, `extra`, `disponibility`, `delivery_delay`, `per_product`, `blacklist`) VALUES
(1, 'Projectissimo', '{\"1500\": \"2.5\", \"5000\": \"3.5\", \"15000\": \"7.5\"}', '{\"Guyane\": \"1.5\", \"Ariège\": \"1.2\", \"La Réunion\": \"1.5\"}', '[\"International\"]', '24', '0.15', 'null'),
(2, 'Datissimo', '{\"30000\": \"10\"}', '{\"Guyane\": \"1.5\", \"La Réunion\": \"1.5\"}', '[\"France\"]', '48', '0.15', 'null'),
(3, 'ulalassimo', '{\"1500\": \"2.5\", \"5000\": \"3.5\"}', '[null]', '[\"France\"]', '48', '0.05', 'null'),
(4, 'shipDay5', '{\"1500\": 1.5, \"3000\": 3.5}', '{\"Aisne\": 1.2}', '[\"international\"]', '48', '0.05', '[\"Afghanistan\", \"Pérou\"]');

-- --------------------------------------------------------

--
-- Table structure for table `sous_categorie`
--

CREATE TABLE `sous_categorie` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categorie_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sous_categorie`
--

INSERT INTO `sous_categorie` (`id`, `categorie_id`, `name`) VALUES
(1, 2, 'Processeur Intel'),
(2, 2, 'Processeur AMD'),
(3, 3, 'Carte mère ATX'),
(4, 3, 'Carte mère micro ATX'),
(5, 3, 'Carte mère mini-ITX'),
(7, 4, 'Carte graphique NVIDIA'),
(8, 4, 'Carte graphique AMD'),
(9, 5, 'RAM DDR3'),
(10, 5, 'RAM DDR4'),
(11, 6, 'Boîtier PC Gamer'),
(12, 6, 'Boîtier PC ATX'),
(13, 6, 'Boîtier PC micro ATX'),
(14, 6, 'Boîtier PC mini ITX'),
(15, 6, 'Boîtier PC Vitré'),
(16, 7, 'Disque SSD'),
(17, 7, 'Disque dur interne'),
(18, 7, 'Disque dur externe'),
(19, 7, 'Lecteurs & graveurs optiques');

-- --------------------------------------------------------

--
-- Table structure for table `specs`
--

CREATE TABLE `specs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `specs`
--

INSERT INTO `specs` (`id`, `name`) VALUES
(1, 'frequence'),
(2, 'frequence ram'),
(3, 'Frequence Boost'),
(4, 'socket'),
(5, 'Chipset'),
(6, 'Gamme'),
(7, 'Cores'),
(8, 'Threads'),
(9, 'Hyper-Threading'),
(10, 'Plateforme'),
(11, 'Finesse de gravure'),
(12, 'TDP'),
(13, 'Format'),
(14, 'Nombre de slot ram'),
(15, 'Memoire ram max'),
(16, 'Connecteur Graphique'),
(17, 'Modele'),
(18, 'Constructeur'),
(19, 'Frequence memoire'),
(20, 'Frequence bus'),
(21, 'Type Memoire'),
(22, 'Taille Memoire'),
(23, 'Consommation'),
(24, 'Nombre de barettes'),
(25, 'Capacité par barette'),
(26, 'Type de ram'),
(27, 'LED'),
(28, 'Format memoire'),
(29, 'Latence CAS');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`) VALUES
(1, 'OuiCorporatio'),
(2, 'YesEntertainement');

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `voie` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `departement` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code_postal` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ville` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pays` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`id`, `user_id`, `name`, `lastname`, `phone`, `voie`, `departement`, `code_postal`, `ville`, `pays`) VALUES
(1, 3, 'Sammarone', 'Steven', '0638665984', '119 rue ordener', 'Paris', '75018', 'Paris', 'France'),
(2, 5, 'Benjamin RENEL', 'RENEL', '642129037', '3 rue des alisiers', 'ALSACE', '68000', 'COLMAR', 'France'),
(3, 9, 'Sammarone', 'Steven', '0638665984', '127 rue des pressoirs', 'Yvelline', '78410', 'Bouafle', 'France'),
(4, 6, 'oooooo', 'BIBI', '0645345437', '25 rue de la gaulle', 'Paris', '75017', 'Paris', 'France');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `roles` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `roles`) VALUES
(3, 'steven sammarone', 'sammarone2.steven@gmail.com', NULL, '$2y$10$xJOJPLEvmbDnHuVdIbtakeKuvj5WvtIQtyM8VRrebF21mcSL8jyI6', NULL, '2019-07-02 12:09:11', '2019-07-02 12:11:34', '[\"ROLE_USER\", \"ROLE_ADMIN\"]'),
(4, 'rootmarin', 'root@root.dev', NULL, '$2y$10$f3gk.MSBzfO35q4KbSPJfOlzhuCU0uKfNEjhDovk.LRuquCUo4P52', NULL, '2019-07-03 08:12:06', '2019-07-03 08:12:06', '[\"ROLE_USER\", \"ROLE_ADMIN\"]'),
(5, 'benjam', 'test@test.fr', NULL, '$2y$10$QT5QQ9e0heNat8lqrJcHUOxrWiI6GdWWwkeyRYz41nG0za6WoHXlS', NULL, '2019-07-05 10:14:16', '2019-07-05 10:14:16', '[\"ROLE_USER\", \"ROLE_ADMIN\"]'),
(6, 'Bills', 'bills@bill.bill', NULL, '$2y$10$st2mjPVE5Ka3xQQ/gazPW.YlKJ99MtJ4aUORWpPNQ5G1qfxGShAbm', NULL, '2019-07-07 16:00:36', '2019-07-07 16:00:36', '[\"ROLE_USER\", \"ROLE_ADMIN\"]'),
(7, 'benjamin', 'benjamin@email.fr', NULL, '$2y$10$EGJI0XfaXuuu53n1dc5DA.YKZ6NfKZ6RcooB5n8bcnTVoxw0/.9H.', NULL, '2019-07-07 18:47:29', '2019-07-07 18:47:29', '[\"ROLE_USER\", \"ROLE_ADMIN\"]'),
(8, 'Steven', 'testfinal@gmail.com', NULL, '$2y$10$UlIYh40znfTCnsPiHzZUteZcXaMVk0nUy0TPERsNAL1YYdqyLiVK.', NULL, '2019-07-07 19:19:50', '2019-07-07 19:19:50', '[\"ROLE_USER\"]'),
(9, 'Steven', 'sammarone.steven@gmail.com', NULL, '$2y$10$fD./Yxwyv6yFTxTZl2Ta9uWUNKGh2JFZiiRfpRWPZ35WiYgLEMUye', NULL, '2019-07-07 19:31:08', '2019-07-07 19:31:08', '[\"ROLE_USER\", \"ROLE_ADMIN\"]'),
(10, 'Bibi', 'bibi@gmail.com', NULL, '$2y$10$5IMz5p8yxDVPv2Y6z.8HBuOyhyP1OujjG8.xob08SKxbgTb/I23he', NULL, '2019-07-08 10:53:20', '2019-07-08 10:53:20', '[\"ROLE_USER\"]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banking_credentials`
--
ALTER TABLE `banking_credentials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categorie_spec`
--
ALTER TABLE `categorie_spec`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classe`
--
ALTER TABLE `classe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departement`
--
ALTER TABLE `departement`
  ADD PRIMARY KEY (`departement_id`),
  ADD KEY `departement_slug` (`departement_slug`),
  ADD KEY `departement_code` (`departement_code`),
  ADD KEY `departement_nom_soundex` (`departement_nom_soundex`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_personal_access_clients_client_id_index` (`client_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_step`
--
ALTER TABLE `order_step`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `package_option`
--
ALTER TABLE `package_option`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `promo`
--
ALTER TABLE `promo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews_note`
--
ALTER TABLE `reviews_note`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shipment`
--
ALTER TABLE `shipment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sous_categorie`
--
ALTER TABLE `sous_categorie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specs`
--
ALTER TABLE `specs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banking_credentials`
--
ALTER TABLE `banking_credentials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `categorie_spec`
--
ALTER TABLE `categorie_spec`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT for table `classe`
--
ALTER TABLE `classe`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `departement`
--
ALTER TABLE `departement`
  MODIFY `departement_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;
--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `order_step`
--
ALTER TABLE `order_step`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `package_option`
--
ALTER TABLE `package_option`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT for table `promo`
--
ALTER TABLE `promo`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `reviews_note`
--
ALTER TABLE `reviews_note`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
--
-- AUTO_INCREMENT for table `shipment`
--
ALTER TABLE `shipment`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `sous_categorie`
--
ALTER TABLE `sous_categorie`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `specs`
--
ALTER TABLE `specs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
