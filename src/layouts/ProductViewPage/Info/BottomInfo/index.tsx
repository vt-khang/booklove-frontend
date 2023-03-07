import { DetailInfoProps } from './type';

function BottomInfo({ description }: DetailInfoProps) {
  return (
    <div className="bottom-info-section">
      <div className="detail-info">{description}</div>
    </div>
  );
}

export default BottomInfo;
