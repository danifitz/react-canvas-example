import React from 'react'
import sendMeasurements from './sendToNewRelic';
class MeasureNewRelic extends React.Component {
    constructor() {
        super();
        this.mounted = false;
    }

    render() {
        const { name } = this.props;
        if (this.mounted) {
        window.performance.mark(`${name}UpdateStart`);
        } else {
        window.performance.mark(`${name}MountStart`);
        }
        return this.props.children;
    }

    componentDidMount() {
        const { name } = this.props;
        this.mounted = true;

        //SOME AJAX AND ANALYTICS CALLs


        window.performance.mark(`${name}MountEnd`);
        window.performance.measure(`${name}Mount`, `${name}MountStart`, `${name}MountEnd`);

        sendMeasurements(name)
    }

    componentDidUpdate() {
        // probably don't want to send these to new relic since we're only interested in the initial render
        const { name } = this.props;
        window.performance.mark(`${name}UpdateEnd`);
        window.performance.measure(`${name}Update`, `${name}UpdateStart`, `${name}UpdateEnd`);
    }
}
export default MeasureNewRelic