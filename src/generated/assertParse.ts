import typia from "typia";
(input: any): input is Graph => {
    const $io0 = (input: any): boolean => Array.isArray(input.nodes) && input.nodes.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)) && (Array.isArray(input.edges) && input.edges.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)));
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.label;
    const $io2 = (input: any): boolean => "string" === typeof input.source && "string" === typeof input.target && "string" === typeof input.id && "string" === typeof input.label;
    return "object" === typeof input && null !== input && $io0(input);
};
(input: any): Graph => {
    const __is = (input: any): input is Graph => {
        const $io0 = (input: any): boolean => Array.isArray(input.nodes) && input.nodes.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)) && (Array.isArray(input.edges) && input.edges.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)));
        const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.label;
        const $io2 = (input: any): boolean => "string" === typeof input.source && "string" === typeof input.target && "string" === typeof input.id && "string" === typeof input.label;
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Graph => {
            const $guard = (typia.createAssert as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ((Array.isArray(input.nodes) || $guard(_exceptionable, {
                path: _path + ".nodes",
                expected: "Array<INode>",
                value: input.nodes
            })) && input.nodes.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
                path: _path + ".nodes[" + _index1 + "]",
                expected: "INode",
                value: elem
            })) && $ao1(elem, _path + ".nodes[" + _index1 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".nodes[" + _index1 + "]",
                expected: "INode",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".nodes",
                expected: "Array<INode>",
                value: input.nodes
            })) && ((Array.isArray(input.edges) || $guard(_exceptionable, {
                path: _path + ".edges",
                expected: "Array<IEdge>",
                value: input.edges
            })) && input.edges.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
                path: _path + ".edges[" + _index2 + "]",
                expected: "IEdge",
                value: elem
            })) && $ao2(elem, _path + ".edges[" + _index2 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".edges[" + _index2 + "]",
                expected: "IEdge",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".edges",
                expected: "Array<IEdge>",
                value: input.edges
            }));
            const $ao1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.id || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            })) && ("string" === typeof input.label || $guard(_exceptionable, {
                path: _path + ".label",
                expected: "string",
                value: input.label
            }));
            const $ao2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.source || $guard(_exceptionable, {
                path: _path + ".source",
                expected: "string",
                value: input.source
            })) && ("string" === typeof input.target || $guard(_exceptionable, {
                path: _path + ".target",
                expected: "string",
                value: input.target
            })) && ("string" === typeof input.id || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            })) && ("string" === typeof input.label || $guard(_exceptionable, {
                path: _path + ".label",
                expected: "string",
                value: input.label
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "Graph",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "Graph",
                value: input
            });
        })(input, "$input", true);
    return input;
};
(input: Graph): typia.Primitive<Graph> => {
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.label;
    const $io2 = (input: any): boolean => "string" === typeof input.source && "string" === typeof input.target && "string" === typeof input.id && "string" === typeof input.label;
    const $cp0 = (input: any) => input.map((elem: any) => "object" === typeof elem && null !== elem ? $co1(elem) : elem as any);
    const $cp1 = (input: any) => input.map((elem: any) => "object" === typeof elem && null !== elem ? $co2(elem) : elem as any);
    const $co0 = (input: any): any => ({
        nodes: Array.isArray(input.nodes) ? $cp0(input.nodes) : input.nodes as any,
        edges: Array.isArray(input.edges) ? $cp1(input.edges) : input.edges as any
    });
    const $co1 = (input: any): any => ({
        id: input.id as any,
        label: input.label as any
    });
    const $co2 = (input: any): any => ({
        source: input.source as any,
        target: input.target as any,
        id: input.id as any,
        label: input.label as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
};
export const asserParse = (input: string): typia.Primitive<Graph> => { const assert = (input: any): Graph => {
    const __is = (input: any): input is Graph => {
        const $io0 = (input: any): boolean => Array.isArray(input.nodes) && input.nodes.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)) && (Array.isArray(input.edges) && input.edges.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)));
        const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.label;
        const $io2 = (input: any): boolean => "string" === typeof input.source && "string" === typeof input.target && "string" === typeof input.id && "string" === typeof input.label;
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Graph => {
            const $guard = (typia.createAssertParse as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ((Array.isArray(input.nodes) || $guard(_exceptionable, {
                path: _path + ".nodes",
                expected: "Array<INode>",
                value: input.nodes
            })) && input.nodes.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
                path: _path + ".nodes[" + _index1 + "]",
                expected: "INode",
                value: elem
            })) && $ao1(elem, _path + ".nodes[" + _index1 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".nodes[" + _index1 + "]",
                expected: "INode",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".nodes",
                expected: "Array<INode>",
                value: input.nodes
            })) && ((Array.isArray(input.edges) || $guard(_exceptionable, {
                path: _path + ".edges",
                expected: "Array<IEdge>",
                value: input.edges
            })) && input.edges.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
                path: _path + ".edges[" + _index2 + "]",
                expected: "IEdge",
                value: elem
            })) && $ao2(elem, _path + ".edges[" + _index2 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".edges[" + _index2 + "]",
                expected: "IEdge",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".edges",
                expected: "Array<IEdge>",
                value: input.edges
            }));
            const $ao1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.id || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            })) && ("string" === typeof input.label || $guard(_exceptionable, {
                path: _path + ".label",
                expected: "string",
                value: input.label
            }));
            const $ao2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.source || $guard(_exceptionable, {
                path: _path + ".source",
                expected: "string",
                value: input.source
            })) && ("string" === typeof input.target || $guard(_exceptionable, {
                path: _path + ".target",
                expected: "string",
                value: input.target
            })) && ("string" === typeof input.id || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            })) && ("string" === typeof input.label || $guard(_exceptionable, {
                path: _path + ".label",
                expected: "string",
                value: input.label
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "Graph",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "Graph",
                value: input
            });
        })(input, "$input", true);
    return input;
}; input = JSON.parse(input); return assert(input) as any; };
//----
// EQUALS
//----
(input: any, _exceptionable: boolean = true): input is Graph => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean => Array.isArray(input.nodes) && input.nodes.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io1(elem, true && _exceptionable)) && (Array.isArray(input.edges) && input.edges.every((elem: any, _index2: number) => "object" === typeof elem && null !== elem && $io2(elem, true && _exceptionable))) && (2 === Object.keys(input).length || Object.keys(input).every((key: any) => {
        if (["nodes", "edges"].some((prop: any) => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.id && "string" === typeof input.label && (2 === Object.keys(input).length || Object.keys(input).every((key: any) => {
        if (["id", "label"].some((prop: any) => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io2 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.source && "string" === typeof input.target && "string" === typeof input.id && "string" === typeof input.label && (4 === Object.keys(input).length || Object.keys(input).every((key: any) => {
        if (["source", "target", "id", "label"].some((prop: any) => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
};
//----
// RANDOM
//----
(generator?: Partial<typia.IRandomGenerator>): typia.Primitive<Graph> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        nodes: (generator?.array ?? $generator.array)(() => $ro1(_recursive, _recursive ? 1 + _depth : _depth)),
        edges: (generator?.array ?? $generator.array)(() => $ro2(_recursive, _recursive ? 1 + _depth : _depth))
    });
    const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
        id: (generator?.customs ?? $generator.customs)?.string?.([
            {
                name: "type",
                value: "string"
            }
        ]) ?? (generator?.string ?? $generator.string)(),
        label: (generator?.customs ?? $generator.customs)?.string?.([
            {
                name: "type",
                value: "string"
            }
        ]) ?? (generator?.string ?? $generator.string)()
    });
    const $ro2 = (_recursive: boolean = false, _depth: number = 0): any => ({
        source: (generator?.customs ?? $generator.customs)?.string?.([
            {
                name: "type",
                value: "string"
            }
        ]) ?? (generator?.string ?? $generator.string)(),
        target: (generator?.customs ?? $generator.customs)?.string?.([
            {
                name: "type",
                value: "string"
            }
        ]) ?? (generator?.string ?? $generator.string)(),
        id: (generator?.customs ?? $generator.customs)?.string?.([
            {
                name: "type",
                value: "string"
            }
        ]) ?? (generator?.string ?? $generator.string)(),
        label: (generator?.customs ?? $generator.customs)?.string?.([
            {
                name: "type",
                value: "string"
            }
        ]) ?? (generator?.string ?? $generator.string)()
    });
    return $ro0();
};
//----
// ASSERT-STRINGIFY
//----
(input: any): string => { const assert = (input: any): Graph => {
    const __is = (input: any): input is Graph => {
        const $io0 = (input: any): boolean => Array.isArray(input.nodes) && input.nodes.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)) && (Array.isArray(input.edges) && input.edges.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)));
        const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.label;
        const $io2 = (input: any): boolean => "string" === typeof input.source && "string" === typeof input.target && "string" === typeof input.id && "string" === typeof input.label;
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Graph => {
            const $guard = (typia.createAssertStringify as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ((Array.isArray(input.nodes) || $guard(_exceptionable, {
                path: _path + ".nodes",
                expected: "Array<INode>",
                value: input.nodes
            })) && input.nodes.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
                path: _path + ".nodes[" + _index1 + "]",
                expected: "INode",
                value: elem
            })) && $ao1(elem, _path + ".nodes[" + _index1 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".nodes[" + _index1 + "]",
                expected: "INode",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".nodes",
                expected: "Array<INode>",
                value: input.nodes
            })) && ((Array.isArray(input.edges) || $guard(_exceptionable, {
                path: _path + ".edges",
                expected: "Array<IEdge>",
                value: input.edges
            })) && input.edges.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
                path: _path + ".edges[" + _index2 + "]",
                expected: "IEdge",
                value: elem
            })) && $ao2(elem, _path + ".edges[" + _index2 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".edges[" + _index2 + "]",
                expected: "IEdge",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".edges",
                expected: "Array<IEdge>",
                value: input.edges
            }));
            const $ao1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.id || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            })) && ("string" === typeof input.label || $guard(_exceptionable, {
                path: _path + ".label",
                expected: "string",
                value: input.label
            }));
            const $ao2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.source || $guard(_exceptionable, {
                path: _path + ".source",
                expected: "string",
                value: input.source
            })) && ("string" === typeof input.target || $guard(_exceptionable, {
                path: _path + ".target",
                expected: "string",
                value: input.target
            })) && ("string" === typeof input.id || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            })) && ("string" === typeof input.label || $guard(_exceptionable, {
                path: _path + ".label",
                expected: "string",
                value: input.label
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "Graph",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "Graph",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const stringify = (input: Graph): string => {
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.label;
    const $io2 = (input: any): boolean => "string" === typeof input.source && "string" === typeof input.target && "string" === typeof input.id && "string" === typeof input.label;
    const $string = (typia.createAssertStringify as any).string;
    const $so0 = (input: any): any => `{"nodes":${`[${input.nodes.map((elem: any) => `{"id":${$string((elem as any).id)},"label":${$string((elem as any).label)}}`).join(",")}]`},"edges":${`[${input.edges.map((elem: any) => `{"source":${$string((elem as any).source)},"target":${$string((elem as any).target)},"id":${$string((elem as any).id)},"label":${$string((elem as any).label)}}`).join(",")}]`}}`;
    return $so0(input);
}; return stringify(assert(input)); };
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
}
;
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
