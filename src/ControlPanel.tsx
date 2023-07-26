import { useEffect, useState } from "react"
import './ControllPanel.css'

export default function ControlPanel(props: any) {
    const [count, setCount] = useState<number>(0);
    const [currentCount, setCurrentCount] = useState<any>(null);
    const [parentOnly, setParentOnly] = useState<boolean>(false);
    const [depth, setDepth] = useState<number>(2);
    const [factor, setFactor] = useState<number>(1.0);
    const [nameFilter, setNameFilter] = useState<boolean>(false);

    useEffect(() => {
        getNodeCount()
        setCurrentCount(props.count);
    }, [props.count]);


    async function getNodeCount() {
        var request = await fetch("http://localhost:5031/ControlUI/GetTotalCount");
        if (request.ok) {
            let json = await request.json();
            setCount(json);
        }
    }
    // async function getNodesWithFilter() {
    //     var request = await fetch("http://localhost:5031/ControlUI/GetTotalCount");
    //     if (request.ok) {
    //         let json = await request.json();
    //         setCount(json);
    //     }
    // }
    function handleGetRequest() {
        fetch(`http://localhost:5031/ControlUI/Get/${depth}?factor=${factor}&parent_only=${parentOnly}`)
    }
    function handleConnection() {
        props.connection.connect()
    }
    function handleDisconnect() {
        props.connection.disconect()
    }
    function parentOnlyHandler(value: any) {
        setParentOnly(value.target.checked)
    }
    function nameFilterHandler(value: any) {
        setNameFilter(value.target.checked)
    }
    function nameDepthHandler(value: any) {
        setDepth(value.target.value)
    }
    function nameFactorHandler(value: any) {
        setFactor(value.target.value)
    }
    return <>
        <div className="control_panel">
            <div className="count">Отображено: {currentCount} из {count}</div>
            <div className="filter_container">
                <div className="radio_group_filter">
                    <label><input className="radioFlex" type="checkbox" id="checkbox1" onChange={(value) => parentOnlyHandler(value)} />Только родительские узлы</label>
                    <label><input className="radioFlex" type="checkbox" id="checkbox2" onChange={(value) => nameFilterHandler(value)} />Название</label>
                    <label hidden={!nameFilter}> Введите имя: <input className="radioFlex" type="text" /></label>
                </div>
                <div className="varible">
                    <label > Введите глубину: <input className="depth" defaultValue={depth} type="number" onChange={nameDepthHandler} /></label>
                    <label > Введите глубину: <input className="factor" step="0.01"  defaultValue={factor} type="number"  onChange={nameFactorHandler} /></label>
                </div>
            </div>
            <div className="button_container">
                <button className="get" onClick={handleGetRequest}>Запросить Ноды </button>
                <button className="connect" onClick={handleConnection}>Подключиться</button>
                <button className="disconnect" onClick={handleDisconnect}>Отключиться</button>
            </div>

        </div>
    </>
}