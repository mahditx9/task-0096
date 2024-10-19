import SportsBackground from "./sports-background.jpg";
import NotFound from "./not-found.jpg";
import Sport2 from "./sport-2.jpg";
import SportRunning from "./sport-running.jpg";
import SportsClass from "./sportsclass.jpg";

export const localImages = {
  SportsBackground,
  NotFound,
  Sport2,
  SportRunning,
  SportsClass,
};

export type ImagesType = keyof typeof localImages;
