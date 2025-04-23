import Condtional1 from "./Condtional1";
import Condtional2 from "./Condtional2";


function Condtional(props) {

  if (props.name==="testconn") {
    return <Condtional1></Condtional1>
  }
  return <Condtional2></Condtional2>
}
export default Condtional;
