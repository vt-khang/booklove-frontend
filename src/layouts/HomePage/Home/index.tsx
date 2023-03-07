import LeftHome from './LeftHome';
import RightHome from './RightHome';

function Home() {
  return (
    <main>
      <div className="main">
        <div className="home">
          <div className="left-home">
            <LeftHome />
          </div>
          <div className="right-home">
            <RightHome />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
