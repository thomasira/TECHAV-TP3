<template>
<nav class='flex flex-wrap p-2 gap-2 justify-between bg-gradient-to-br from-main-900 to-main-600'>
  <router-link to='/'>
    <slot></slot>
  </router-link>
  <div class='flex px-2 gap-3 self-center font-medium text-s'>
    <router-link to='/products' class='p-2 hover:text-comp-200'>products</router-link>
    <router-link to='/about' class='p-2 hover:text-comp-200'>about</router-link>
  </div>
</nav>
</template>
