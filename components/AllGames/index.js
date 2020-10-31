import { GameOrder } from "../GameOrder";
import { Platforms } from "../Platforms";

export function AllGamesContainer() {
  return (
    <div>
      <div className="d-flex">
        <GameOrder />
        <Platforms />
      </div>
      AllGamesContainer
    </div>
  );
}
