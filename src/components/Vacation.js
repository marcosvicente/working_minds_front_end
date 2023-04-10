import List from './vacations/List.js';
import Create from './vacations/Create.js';

export default function Vacation() {
  return (
    <div style={{ width: '40rem', margin: '0 auto'}}>
      <h2 className="text-center">Vacation</h2>
      <List />
      <Create />
    </div>
  )
}