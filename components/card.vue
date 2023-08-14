<template>
    <div class="card m-3">
      <h4 :class="`card-header  ${headerColor} ${headerBgColor}`" >
        <slot name="header"></slot>
      </h4>

      <div class="card-body" v-if="this.$slots.body">
        <slot name="body"></slot>
      </div>

      <div class="card-footer" v-if="this.$slots.footer">
        <slot name="footer"></slot>
      </div>

    </div>
  </template>

  <script>
  export default {
    props: {
      headerBgColor: {
        type: String
      },
      headerColor: {
        type: String
      }
    }
  }
  </script>

  <style>

  </style>
  