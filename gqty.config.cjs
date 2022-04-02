/**
 * @type {import("@gqty/cli").GQtyConfig}
 */

const config = {
  react: true,
  scalarTypes: { DateTime: 'string' },
  introspection: {
    endpoint: 'https://graphqlzero.almansi.me/api',
    headers: {},
  },
  destination: './src/app/gqty/index.ts',
  subscriptions: false,
};

module.exports = config;
