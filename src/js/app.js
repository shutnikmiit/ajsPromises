import json from './parser.js';
import read from './reader.js';
import GameSaving from './gamesaving.js';

let gameSav = new GameSaving('Boo');

export default class GameSavingLoader {
  load() {
    return read()
      .then((resolve) => resolve)
      .then((resolve) => json(resolve))
      .then((saving) => {
        gameSav = JSON.parse(saving);
        return gameSav;
      })
      .catch((error) => { throw error; });
  }
}
