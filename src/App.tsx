import { useEffect, useRef, useState } from 'react'
import './App.css'
import { asserParse as parse } from './generated/assertParse'

import NodeContainer from './NodeContainer'
import SignalR from './SignalR';
import ControlPanel from './ControlPanel';
import { Application, Ticker, UPDATE_PRIORITY } from "pixi.js";
import { addStats } from "pixi-stats";
import { button, useControls } from 'leva';
import Graph from "./Graph";
import IEdge from "./IEdge";
import INode from './INode';

import {GraphCanvas } from 'reagraph';

function App () {

  const signalR = new SignalR();

    const [nodesStore, setNodes] = useState<INode[]>([]);
    const [edgesStore, setEdges] = useState<IEdge[]>([]);
    var color = "#FFFFFF"
    const [cdepth, cdepthSet] = useState<number>(2)
    const t = useRef(0)
    const { on, isParentOnly, depth } = useControls({ isParentOnly: true, depth: { value: 4, onChange: (value: number) => { t.current = value }, transient: false }, color: color, on: true, get: button(() => get()) })

    signalR.on("Get", (data: string) => append(data))
    function get() {
        console.log(cdepth)
        fetch(`http://95.165.172.75:5031/ControlUI/Get/${t.current}?parent_only=${isParentOnly}`)
    }
    function append(values: string) {
        console.log(values)
        const dataSerialized: Graph = parse(values);
        const nodesTmp: INode[] = dataSerialized.nodes;
        const edgeTmp: IEdge[] = dataSerialized.edges;
        console.log(dataSerialized)
        setNodes([...nodesTmp])
        setEdges([...edgeTmp])
    }

  return <GraphCanvas  labelType="nodes" layoutType="radialOut2d" 
            nodes={nodesStore}
            edges={edgesStore}
          />
}

export default App
