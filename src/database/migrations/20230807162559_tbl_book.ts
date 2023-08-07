/* eslint-disable prettier/prettier */
import { Knex } from 'knex';
import { DatabaseTable } from '../database.tables';
export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async (trx: Knex.Transaction) =>
      trx.schema
        .hasTable(DatabaseTable.books)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .createTable(
                DatabaseTable.books,
                (tableBuilder: Knex.CreateTableBuilder) => {
                  tableBuilder
                    .uuid('id')
                    .unique()
                    .notNullable()
                    .primary({
                      constraintName: `${DatabaseTable.books}_id`,
                    });
                  tableBuilder.string('title').notNullable();
                  tableBuilder.string('edition').notNullable();
                  tableBuilder.bigInteger('isbn').notNullable();
                  tableBuilder.datetime('deleted_at');
                  tableBuilder.timestamps(true, true);
                },
              );
          }
        })
    .catch((e) => console.error('MIGRATION_ERROR', e)),
);
}
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(DatabaseTable.books);
}
