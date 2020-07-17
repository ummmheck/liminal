
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('place').del()
    .then(function () {
      // Inserts seed entries
      return knex('place').insert([{
          centerLat: -105.028875,
          centerLong: 39.769335,
          name: 'Denver Puppet Theater',
          address: '3156 W 38th Ave, Denver, CO 80211',
          description: `Tell them I hate them. Who are you, my warranty?!
            Come, Comrade Bender! We must take to the streets!
            I'll get my kit! You, a bobsleder!? That I'd like to see!
            Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor.
            Well, let's just dump it in the sewer and say we delivered it. Meh. And remember,
            don't do anything that affects anything, unless it turns out you were supposed to,
            in which case, for the love of God, don't not do it!`,
          live: true,
          pending: false,
          denied: false,
        }, {
          centerLat: -105.020415,
          centerLong: 39.614455,
          name: 'The Melting Pot',
          address: '2707 Main St, Littleton, CO 80120',
          description: `Fondue restaurant chain offering heated pots of cheese,
            chocolate or broth for dipping & cooking.`,
          live: true,
          pending: false,
          denied: false,
        }]);
    });
};
