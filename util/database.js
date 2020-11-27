import postgres from 'postgres';
import dotenv from 'dotenv';
import camelcaseKeys from 'camelcase-keys';
import snakeCaseKeys from 'snakecase-keys';

dotenv.config();

const sql = postgres();

export async function getUsers() {
  const users = await sql`
  SELECT * from users;
`;
  return users.map(camelcaseKeys);
}

export const users = [
  {
    id: '1',
    firstName: 'Felix',
    lastName: 'Hollmann',
  },
  {
    id: '2',
    firstName: 'Keith',
    lastName: 'Voss',
  },
];
