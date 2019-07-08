/**
 * Created by OXOYO on 2019/7/8.
 *
 * 锚点circle
 */

import utils from '../utils/index'

export default {
  name: 'anchor-circle',
  extendName: 'circle',
  options: {
    setState (name, value, item) {
      // 设置锚点激活
      utils.setAnchorActive(name, value, item)
    },
    // 绘制后附加锚点
    afterDraw (cfg, group) {
      // 绘制锚点
      utils.drawAnchor(cfg, group)
    }
  }
}