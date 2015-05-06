
CREATE TABLE `CAR` (
  `ID`                        INT UNSIGNED
                              NOT NULL
                              AUTO_INCREMENT,
  `BRAND`                     VARCHAR(100)
                              NOT NULL,
  `COLOR`                     VARCHAR(50)
                              NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE          InnoDB
  DEFAULT CHARSET utf8
  COLLATE         utf8_general_ci;

INSERT INTO `CAR` VALUES (NULL, 'Mercedes', 'Gray');
INSERT INTO `CAR` VALUES (NULL, 'Ferrari', 'Red');