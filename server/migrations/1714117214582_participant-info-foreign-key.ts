import { ColumnDefinitions, MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(
    `
    ALTER TABLE "data".participant_info DROP CONSTRAINT fk_submission_id;
    ALTER TABLE "data".participant_info ADD CONSTRAINT fk_submission_id FOREIGN KEY (submission_id) REFERENCES "data".submission(id) ON DELETE CASCADE;`
  );
}