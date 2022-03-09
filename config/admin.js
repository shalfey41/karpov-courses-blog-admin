module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '30d90a8dc32e5d93802e9a4a4e313f75'),
  },
});
