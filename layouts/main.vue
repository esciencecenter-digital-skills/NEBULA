<template>
    <div class="flex flex-col w-screen bg-gentleBlue h-screen overflow-hidden">
        <Banner />
        <div class="flex-1 overflow-auto">
            <slot />
        </div>            
        <Footer />
    </div>
</template>
