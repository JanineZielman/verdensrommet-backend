module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3923c4569b6019b719510018ff4eeb5e'),
  },
});
