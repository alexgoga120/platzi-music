const eventBus ={}

eventBus.isntall = function (Vue){
    Vue.prototype.$bus = new Vue();
}

export default eventBus