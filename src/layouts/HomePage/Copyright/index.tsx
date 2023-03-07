import { ARTHUR_SITE, YEAR_SITE } from './constants';

function Copyright() {
  return (
    <footer className="copyright">
      <p>{`Copyright © ${YEAR_SITE} | ${ARTHUR_SITE}`}</p>
    </footer>
  );
}

export default Copyright;
