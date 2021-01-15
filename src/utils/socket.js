/**
 *webSocket方法
 *
 * @export
 * @param {*} url
 * @return {*}
 */

import WebsocketHeartbeatJs from 'websocket-heartbeat-js'
let websocketHeartbeatJs = new WebsocketHeartbeatJs({
    url: 'ws://xxxxxxx'
})
websocketHeartbeatJs.onopen = function() {
    console.log('connect success')
    websocketHeartbeatJs.send('hello server')
}
websocketHeartbeatJs.onmessage = function(e) {
    console.log(`onmessage: ${e.data}`)
}
websocketHeartbeatJs.onreconnect = function() {
    console.log('reconnecting...')
}