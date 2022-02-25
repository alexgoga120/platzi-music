import mitt from "mitt";

const eventBus = {}

eventBus.install = function (Vue) {
    Vue.prototype.eventBus = new mitt()
}

export default eventBus