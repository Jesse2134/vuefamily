<template>
  <el-table :data="data" highlight-current-row v-loading="listLoading" @current-change="selsChange" border style="width: 100%" :row-style="showTr">
    <el-table-column v-for="(column, index) in columns" :key="column.prop" :label="column.label">
      <template scope="scope">
        <span v-if="spaceIconShow(index)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"></span>
        <a v-if="toggleIconShow(index,scope.row) === false && column.prop === 'name'">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        <el-button size="mini" v-if="toggleIconShow(index,scope.row)" @click.native="toggle(scope.$index)" type="default">
          <i v-if="!scope.row._expanded" class="el-icon-arrow-right" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
        </el-button>
        <!--自定义字段处理  -->
        <img v-if="column.prop === 'logo'" :src="scope.row[column.prop]" style="width: 40px; height: 40px;">
        <span v-else>{{scope.row[column.prop]}}</span>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import Utils from '../utils/index.js'
//  import Vue from 'vue'
export default {
  name: 'tree-grid',
  props: {
    // 列表效果
    listLoading: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    // 该属性是确认父组件传过来的数据是否已经是树形结构了，如果是，则不需要进行树形格式化
    treeStructure: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    // 这是相应的字段展示
    columns: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 这是数据源
    dataSource: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 这个作用是根据自己需求来的，比如在操作中涉及相关按钮编辑，删除等，需要向服务端发送请求，则可以把url传过来
    requestUrl: {
      type: String,
      default: function () {
        return ''
      }
    },
    // 这个是是否展示操作列
    treeType: {
      type: String,
      default: function () {
        return 'normal'
      }
    },
    // 是否默认展开所有树
    defaultExpandAll: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    // 格式化数据源
    data: function () {
      let me = this;
      if (me.treeStructure) {
        let data = Utils.MSDataTransfer.treeToArray(me.dataSource, null, null, me.defaultExpandAll);
        return data
      }
      return me.dataSource
    }
  },
  methods: {
    // 显示行
    showTr: function (row, index) {
      let show = (row._parent ? (row._parent._expanded && row._parent._show) : true);
      row._show = show;
      return show ? '' : 'display:none;'
    },
    // 展开下级
    toggle: function (trIndex) {
      let me = this;
      let record = me.data[trIndex];
      record._expanded = !record._expanded
    },
    // 显示层级关系的空格和图标
    spaceIconShow(index) {
      let me = this;
      if (me.treeStructure && index === 0) {
        return true
      }
      return false
    },
    // 点击展开和关闭的时候，图标的切换
    toggleIconShow(index, record) {
      let me = this;
      if (me.treeStructure && index === 0 && record.children && record.children.length > 0) {
        return true
      }
      return false
    },
    // 选中行
    selsChange(selection) {
      this.$emit('selection', selection)
    },
  }
}
</script>
<style scoped>
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: 18px;
  height: 14px;
}

.ms-tree-space::before {
  content: ""
}

table td {
  line-height: 26px;
}
</style>
