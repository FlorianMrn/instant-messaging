// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Communication from 'src/components/Communication';

// Action Creators
//import { getMessage} from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  messages: state.messages,
  pseudo: state.pseudo,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = {};
// Container
const CommunicationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Communication);

// == Export
export default CommunicationContainer;