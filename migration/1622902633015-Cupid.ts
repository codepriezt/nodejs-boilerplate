import {MigrationInterface, QueryRunner} from "typeorm";

export class Cupid1622902633015 implements MigrationInterface {
    name = 'Cupid1622902633015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `groups` (`id` int NOT NULL AUTO_INCREMENT, `name` enum ('e360admin', 'vendor', 'schoolsadmin', 'parent', 'student') NOT NULL DEFAULT 'e360admin', PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `roles` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `first_name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `is_verified` tinyint NOT NULL, `is_enabled` enum ('0', '1') NOT NULL DEFAULT '0', UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), UNIQUE INDEX `IDX_a000cca60bcf04454e72769949` (`phone`), UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `schools` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `address` text NOT NULL, `logo_path` varchar(255) NOT NULL, `userId` int NULL, UNIQUE INDEX `IDX_74a5374cf6d1c970dd47f888bf` (`email`), UNIQUE INDEX `IDX_6eaa373335646a77e5cdddd996` (`phone`), UNIQUE INDEX `IDX_a6e7ff21b53aeeaa187ccb1772` (`username`), UNIQUE INDEX `REL_b46e6536d18fcf3be4ec71a926` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `vendors` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `address` text NOT NULL, `userId` int NULL, UNIQUE INDEX `IDX_3fe1343dbf2a7d9b7be1c27725` (`email`), UNIQUE INDEX `IDX_67ab49bf11bb8ca309d54e5449` (`phone`), UNIQUE INDEX `IDX_22aa955f8fc62b3ac84dd2d2ce` (`username`), UNIQUE INDEX `REL_d9a5f2ffcbba018f7b35a3cf79` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_groups` (`id` int NOT NULL AUTO_INCREMENT, `roleId` int NULL, `userId` int NULL, `schoolId` int NULL, `vendorId` int NULL, UNIQUE INDEX `REL_99d01ff7f143377c044f3d6c95` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `schools` ADD CONSTRAINT `FK_b46e6536d18fcf3be4ec71a9266` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `vendors` ADD CONSTRAINT `FK_d9a5f2ffcbba018f7b35a3cf79f` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_groups` ADD CONSTRAINT `FK_95c42a07bfeb7411e2b815cb09c` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_groups` ADD CONSTRAINT `FK_99d01ff7f143377c044f3d6c955` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_groups` ADD CONSTRAINT `FK_2ce5d2d79008d396d709de21a2a` FOREIGN KEY (`schoolId`) REFERENCES `schools`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_groups` ADD CONSTRAINT `FK_647da46ca55a8dbdecc998e948a` FOREIGN KEY (`vendorId`) REFERENCES `vendors`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_groups` DROP FOREIGN KEY `FK_647da46ca55a8dbdecc998e948a`");
        await queryRunner.query("ALTER TABLE `user_groups` DROP FOREIGN KEY `FK_2ce5d2d79008d396d709de21a2a`");
        await queryRunner.query("ALTER TABLE `user_groups` DROP FOREIGN KEY `FK_99d01ff7f143377c044f3d6c955`");
        await queryRunner.query("ALTER TABLE `user_groups` DROP FOREIGN KEY `FK_95c42a07bfeb7411e2b815cb09c`");
        await queryRunner.query("ALTER TABLE `vendors` DROP FOREIGN KEY `FK_d9a5f2ffcbba018f7b35a3cf79f`");
        await queryRunner.query("ALTER TABLE `schools` DROP FOREIGN KEY `FK_b46e6536d18fcf3be4ec71a9266`");
        await queryRunner.query("DROP INDEX `REL_99d01ff7f143377c044f3d6c95` ON `user_groups`");
        await queryRunner.query("DROP TABLE `user_groups`");
        await queryRunner.query("DROP INDEX `REL_d9a5f2ffcbba018f7b35a3cf79` ON `vendors`");
        await queryRunner.query("DROP INDEX `IDX_22aa955f8fc62b3ac84dd2d2ce` ON `vendors`");
        await queryRunner.query("DROP INDEX `IDX_67ab49bf11bb8ca309d54e5449` ON `vendors`");
        await queryRunner.query("DROP INDEX `IDX_3fe1343dbf2a7d9b7be1c27725` ON `vendors`");
        await queryRunner.query("DROP TABLE `vendors`");
        await queryRunner.query("DROP INDEX `REL_b46e6536d18fcf3be4ec71a926` ON `schools`");
        await queryRunner.query("DROP INDEX `IDX_a6e7ff21b53aeeaa187ccb1772` ON `schools`");
        await queryRunner.query("DROP INDEX `IDX_6eaa373335646a77e5cdddd996` ON `schools`");
        await queryRunner.query("DROP INDEX `IDX_74a5374cf6d1c970dd47f888bf` ON `schools`");
        await queryRunner.query("DROP TABLE `schools`");
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`");
        await queryRunner.query("DROP INDEX `IDX_a000cca60bcf04454e72769949` ON `users`");
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `roles`");
        await queryRunner.query("DROP TABLE `groups`");
    }

}
