import { EDITOR_CHOICE } from '../constants';
import CarouselPromotion from './CarouselPromotion';
import TopList from './TopList';

function RightHome() {
  return (
    <>
      <div>
        <CarouselPromotion />
      </div>
      <div className="mt-[25px]">
        <TopList />
      </div>
    </>
  );
}

export default RightHome;
