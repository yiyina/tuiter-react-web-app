import Es5Functions from "./es5-functions";
import ArrowFunctions from "./arrow-functions";
import ImpliedReturn from "./implied-return";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";
import WorkingWithArrays from "./working-with-arrays";
import ArrayIndexAndLength from "./array-index-and-length";
import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays";
import ForLoops from "./for-loops";
import MapFunction from "./map-function";
import JsonStringify from "./json-stringify";
import FindFunction from "./find-function";
import FindIndex from "./find-index";
import FilterFunction from "./filter-function";
import TemplateLiterals from "./template-literals";
import House from "./house";
import Spread from "./spread";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";

function WorkingWithFunctions() {
  return (
      <div>
        <Es5Functions/>
        <ArrowFunctions/>
        <ImpliedReturn/>
        <FunctionParenthesisAndParameters/>
        <WorkingWithArrays/>
        <ArrayIndexAndLength/>
        <AddingAndRemovingDataToFromArrays/>
        <ForLoops/>
        <MapFunction/>
        <JsonStringify/>
        <FindFunction/>
        <FindIndex/>
        <FilterFunction/>
        <TemplateLiterals/>
        <House/>
        <Spread/>
        <Destructing/>
        <FunctionDestructing/>
      </div>
  );
}
export default WorkingWithFunctions;