function ModeDisplay({mode}) {
    return <h2><em>{mode==="normal" ? "Mode Normal" : "Mode Endless"}</em></h2>
}

export default ModeDisplay;