<template>
  <div class="shop-info-content">
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          prop="shopID"
          label="商品id">
      </el-table-column>
      <el-table-column
          prop="name"
          label="商品名称">
      </el-table-column>
      <el-table-column
          prop="price"
          label="商品价格">
      </el-table-column>
      <el-table-column
          prop="classification"
          label="商品分类">
      </el-table-column>
      <el-table-column
          prop="quantity"
          label="商品数量">
      </el-table-column>
      <el-table-column
          prop="data"
          label="上架日期">
      </el-table-column>
      <el-table-column
          prop="state"
          label="商品状态">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  data() {
    return {
      tableData: [{
        shopID: 1000001,
        name: '小米4黑色版3GB+32GB',
        price: 3344.00,
        classification: '手机',
        quantity: 3344,
        data: '2020-11-02 23:10:11',
        state: '在售'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-info-content {
  display: flex;
  flex-direction: column;
  align-items: center;

  .block {
    margin-top: 30px;
  }
}
</style>
