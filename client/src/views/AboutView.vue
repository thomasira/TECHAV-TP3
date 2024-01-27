<template>
  <div className='bg-neutral-200 p-4 flex-1 flex-col flex'>
    <main className='flex flex-col gap-3 max-w-[1200px] w-full self-center'>
      <header className='flex justify-between'>
          <h1 className='text-xl font-medium'>About</h1>
          <a href='https://github.com/thomasIRA/TECHAV-TP3' className='text-main-900 hover:text-main-600 h-max'>Follow project on Github</a>
      </header>
      <div className='flex flex-wrap gap-6 justify-between'>
        <section className='flex-1 min-w-[300px]'>
          <h2 className='text-m font-medium'>What is By and Buy ?</h2>
          <p className='max-w-[600px]'>By and Buy is a simple web project. A first time experimentation with Vue builds. Basic data and DOM manipulation are applied in this project, such as add, modify and delete products. Using node on server side to access DB and RESTful, alongside sequelize, express and cors and axios on client side to fetch server</p>
        </section>
        <section className='min-w-[300px] text-center p-2 bg-main-600 shadow-sm  h-max'>
          <h2 className='text-m'>References</h2>
          <ul className='text-comp-200'>
            <li><a href="https://vuejs.org/guide/introduction.html" className='hover:text-comp-400'>Vue.js</a></li>
            <li><a href="https://tailwindcss.com/docs/installation" className='hover:text-comp-400'>Tailwind</a></li>
          </ul>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: ['pageTitle'],
  data () {
    this.pageTitle('about')
  }
}
</script>
