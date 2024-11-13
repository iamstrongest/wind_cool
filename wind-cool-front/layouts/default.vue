<script lang='ts' setup>
</script>
<template>
    <div id="app">
        <header>
            <slot name="header">
                <Header></Header>
            </slot>
        </header>
        <aside>
            <slot name="l_aside">
                <LAside></LAside>
            </slot>
        </aside>
        <aside>
            <slot name="r_aside">
                <RAisde></RAisde>
            </slot>
        </aside>

        <main class="main">
            <slot>
                <NuxtPage></NuxtPage>
            </slot>
        </main>
        <!-- <slot>
            <Main></Main>
        </slot> -->
        <footer>
            <slot name="footer">
                <Footer></Footer>
            </slot>
        </footer>

    </div>
</template>


<style scoped>
.main {
    width: 10rem;
    height: auto;
    background-color: pink;
    margin: 0.2rem;
    margin-right: 2.5rem;
    margin-left: 2.5rem;
    min-height: 10rem;
}
</style>