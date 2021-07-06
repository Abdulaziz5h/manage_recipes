<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li
        class="page-item"
        :class="{ disabled: page == 1 }"
        @click="prev"
      >
        <a class="page-link">Previous</a>
      </li>
      <li
        class="page-item" :class="{active: page == index + 1}"
        v-for="(item, index) in Math.ceil(items.length / pageLength)"
        :key="index"
      >
        <a class="page-link" @click="setPage(index + 1)">{{ index + 1 }}</a>
      </li>
      <li
        class="page-item"
        :class="{
          disabled: this.page >= Math.ceil(this.items.length / this.pageLength)
        }"
        @click="next"
      >
        <a class="page-link">Next</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    items: {
      required: true,
      type: Array
    },
    value: null,
    pageLength: {
      type: Number,
      default: () => 10
    }
  },
  data: () => ({
    page: 1
  }),
  created() {
    this.setPage(this.page)
  },
  methods: {
    setPage(page) {
      this.page = page
      this.$emit("input", this.items.slice((page-1) * this.pageLength, (page-1) * this.pageLength + this.pageLength));
    },
    prev() {
      if(this.page - 1) {
        this.setPage(this.page - 1)
      }
    },
    next() {
      if(this.page + 1 <= Math.ceil(this.items.length / this.pageLength)) {
        this.setPage(this.page + 1)
      }
    }
  },
  watch: {
    items() {
      this.setPage(this.page);
    }
  }
};
</script>
