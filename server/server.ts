import express, { Request, Response } from 'express';
import { Potion } from './models/potion';
import  cors from 'cors';

const app = express();
const port = 3001; // Use a different port from Angular's development server

app.use(express.json()); // For parsing application/json
app.use(cors()); // handles cors for us

// Example API endpoint, simply responds to the ping with pong!
app.get('/api/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong!' });
});

// Potions endpoint, this could technically connect to a database and retrieve a set of potions
// instead of returning mock/stubbed data
app.get('/api/potions', (req: Request, res: Response) => {
  console.log('potions endpoint hit'); 
  let vPotions: Potion[] = [];

  // Create and push potion instances
  vPotions.push({ id: 1, name: 'Healing Potion', description: 'Restores a significant amount of health' });
  vPotions.push({ id: 2, name: 'Invisibility Potion', description: 'Grants temporary invisibility' });
  vPotions.push({ id: 3, name: 'Strength Potion', description: 'Increases the user\'s strength temporarily' });

  // Return the array of potions as JSON
  res.json(vPotions);
});

app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});