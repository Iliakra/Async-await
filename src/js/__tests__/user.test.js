/* eslint-disable no-undef */
import json from '../parser';
import read from '../reader';

test('testing async function', async () => {
  const data = await read();
  const value = await json(data);
  const result = JSON.parse(value);
  expect(result).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});
