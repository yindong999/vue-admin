<!-- 用户管理  -->
<template>
  <div class='user container'>
    <div class='operate-pane mb-1'>
      <el-input v-model='search_word' class='input' placeholder='搜索用户名'></el-input>
      <!-- <el-button type='primary' icon="fas fa-search ">搜索</el-button> -->
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="text" icon="fas fa-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text" icon="fas fa-trash-alt" class="text-danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class='pagination'>
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size='100' layout="total, prev, pager, next" :total="totalUser">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
      <el-form ref="userEditForm" :model="userEditForm" label-width="50px">
        <el-form-item label="日期">
          <el-date-picker v-model="userEditForm.date" value-format="yyyy-MM-dd" style="width:100%"></el-date-picker>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="userEditForm.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="userEditForm.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="editVisible  = false">取消</el-button>
        <el-button @click="saveEdit">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getUserList, updateUser } from '@/api/user'
import Vue from 'vue'
export default {
  data() {
    return {
      search_word: '',
      initTabledata: [],
      editVisible: false,
      currentPage: 1,
      totalUser: 0,
      userEditForm: []
    }
  },

  computed: {
    tableData() {
      const filterData = this.initTabledata.filter(row => {
        if (this.search_word) {
          if (row.name.indexOf(this.search_word) > -1) {
            return true
          }
          return false
        }
        return true
      })
      Vue.set(this, 'totalUser', filterData.length)
      return filterData
    }
  },

  created() {
    this.getTableData()
  },

  methods: {
    getTableData() {
      getUserList()
        .then(async res => {
          const responseJson = await res.json()
          this.initTabledata = responseJson.data
          this.totalUser = this.initTabledata.length
        })
        .catch(err => {
          console.error(err)
        })
    },
    handleEdit(index, row) {
      const item = this.initTabledata[index]
      this.editIndex = index
      this.userEditForm = {
        date: item.date,
        name: item.name,
        address: item.address
      }
      this.editVisible = true
    },
    saveEdit() {
      this.$set(this.initTabledata, this.editIndex, this.userEditForm)
      const updateItem = Object.assign({}, this.initTabledata[this.editIndex])
      updateUser(updateItem).then(async res => {
        const data = await res.json()
        console.log(data)
        this.editVisible = false
      })
    },
    handleDelete(index, row) {
      this.deleteIndex = index
      this.$confirm('确定要删除？', {
        type: 'warning'
      })
        .then(() => {
          this.initTabledata.splice(this.deleteIndex, 1)
          this.$message({
            type: 'success',
            message: '删除成功！'
          })
        })
        .catch(() => {
          this.$message({
            type: 'error',
            message: '删除失败！'
          })
        })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang='stylus' scoped>
.user
  width 100%
  background-color #fff
  border 1px solid #ddd
  border-radius 5px
  padding-top 1em
  padding-bottom 1em
.operate-pane
  display flex
  & .input
    width 20em
.pagination
  text-align right
  display block
</style>
