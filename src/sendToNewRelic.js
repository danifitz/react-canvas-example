const sendMeasurements = function(pageType) {
    const interaction = window.newrelic.interaction()
    const measures = window.performance.getEntriesByType('measure')
    // set the type of page i.e. product, checkout
    interaction.setAttribute("pageType", pageType)
    for(let measure in measures) {
        console.log(`Sending ${measures[measure].name} performance measurements to New Relic`)
        interaction.setAttribute("measureName", measures[measure].name)
        interaction.setAttribute("measureDuration", measures[measure].duration)
    }
}
export default sendMeasurements