function Calcread(time) {

    let calcRead = time / 100 * 0.3
    let roundUpCalcRead = Math.ceil(calcRead)

    return (
         `${roundUpCalcRead} minuten`
    )
}
export default Calcread;