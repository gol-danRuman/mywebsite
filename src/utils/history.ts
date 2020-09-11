import { createBrowserHistory } from 'history';

/**
 * History of choice
 * Browser history is used in this case
 */
const history = createBrowserHistory();

export const changeRoute = (path: string) => history.push(path);

export default history;
