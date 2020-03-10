// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Thread from 'src/components/Thread';

// Action Creators
import { getMessage} from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  message: state.message,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  getMessage: (message) => {
    dispatch(getMessage(message));
  },
});

// Container
const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Thread);

// == Export
export default MessageContainer;
