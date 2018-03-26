import { connect } from 'react-redux';
import MoviesList from './component';

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
