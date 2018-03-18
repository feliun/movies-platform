import { connect } from 'react-redux';
import MoviesList from './component';

const mapStateToProps = ({ light, movies }) => ({ light, movies });

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
