import IEdge from "./IEdge";
import INode from "./INode";

export default interface Graph {
    /**
* @type INode
*/
    nodes: INode[];
    /**
* @type INode
*/
    edges: IEdge[];
}
