module.exports = {
  client: {
    includes: ['./src/**/*.page.ts'],
    service: {
      name: 'from-local-schema-file',
      localSchemaFile: './schemas/schema.graphql',
    },
  },
}
