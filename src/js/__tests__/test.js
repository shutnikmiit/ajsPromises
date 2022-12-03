import GameSavingLoader from '../app.js';

const gameSaveLoad = new GameSavingLoader();

test('correct promise', () => {
  const standart = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };

  return expect(gameSaveLoad.load()).resolves.toEqual(standart);
});
