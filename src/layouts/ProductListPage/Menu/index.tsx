import { useRouter } from 'next/router';
import { QueryProvider } from '@/contexts/QueryContext';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

function Menu() {
  const router = useRouter();
  const query = router.query;

  return (
    <main>
      <div className="main">
        <div className="menu">
          {query && (
            <>
              <div className="left-menu">
                <LeftMenu />
              </div>
              <div className="right-menu">
                <QueryProvider value={query}>
                  <RightMenu />
                </QueryProvider>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Menu;
