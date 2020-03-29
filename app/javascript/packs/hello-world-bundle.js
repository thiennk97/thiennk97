import ReactOnRails from 'react-on-rails';

import UserIndex from '../bundles/User/components/user_index';
import UserNew from '../bundles/User/components/user_create';
import SignUp from '../bundles/Session/sign_up';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  UserIndex, SignUp, UserNew,
});
