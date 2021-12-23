module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0272bd41370456e1f5350ce51fd88c9e'),
  },
});
