<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="md:flex md:items-start md:justify-between">
      <div>
        <FooterNavbar />
        <FooterFriendLogos />
      </div>
      <div>
        <FooterCopy />
      </div>
    </div>
  </div>
</template>
<style scoped>
.logo {
  transition: all ease 0.4s;
  filter: grayscale(0%);
}

.logo:hover {
  filter: grayscale(100%);
}
</style>