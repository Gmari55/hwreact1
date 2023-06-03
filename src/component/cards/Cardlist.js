import './style.css'
import { Card } from "./Card";
import { Cards } from "./Cards";
export function Cardlist() {
  return (
    <div className="Cardlist">
      {Cards.map((card, index) => (
        <Card key={index} text={card} />
      ))}
    </div>
  );
}