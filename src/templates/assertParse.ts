import typia from "typia";
typia.createIs<Graph>();
typia.createAssert<Graph>();
typia.createClone<Graph>();

export const asserParse = typia.createAssertParse<Graph>();

//----
// EQUALS
//----
typia.createEquals<Graph>();

//----
// RANDOM
//----
typia.createRandom<Graph>();

//----
// ASSERT-STRINGIFY
//----
typia.createAssertStringify<Graph>();
interface Graph {
    /**
    * @type INode
    */
    nodes: INode[];
    /**
    * @type INode
    */
    edges: IEdge[];
}
interface INode {
    /**
    * @type string
    */
    id: string;
    /**
     * @type string 
     */
    label: string;

};
interface IEdge {
    /**
    * @type string
    */
    source: string;
    /**
        * @type string
    */
    target: string;
    /**
    * @type string 
    */
    id: string;
    /**
    * @type string 
    */
    label: string;

}