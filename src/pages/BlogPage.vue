<template>
  <q-page class="q-pa-xl">
    <div class="container mx-auto">
      <div class="text-center q-mb-xl">
        <h1 class="text-h2 text-heading text-gradient q-mb-md">Blog & Notícias</h1>
        <p class="text-h6 text-grey-4 text-weight-light">Acompanhe as últimas novidades do mundo da astronomia e do nosso projeto.</p>
      </div>

      <div class="row q-col-gutter-xl">
        <!-- Main Post -->
        <div class="col-12 col-lg-8" v-if="news.length > 0">
          <q-card class="glass-panel glow-border overflow-hidden cursor-pointer" @click="goToNews(news[0].slug)">
            <q-img :src="news[0].coverImage" :ratio="21/9">
              <div class="absolute-bottom q-pa-lg" style="background: linear-gradient(transparent, rgba(0,0,0,0.8))">
                <q-chip color="accent" text-color="primary" class="text-weight-bold q-mb-sm">{{ news[0].category }}</q-chip>
                <div class="text-h4 text-heading">{{ news[0].title }}</div>
                <div class="text-subtitle1 text-grey-3">{{ news[0].excerpt }}</div>
              </div>
            </q-img>
          </q-card>
        </div>

        <!-- Sidebar / Recent Posts -->
        <div class="col-12 col-lg-4">
          <div class="glass-panel q-pa-lg full-height">
            <h3 class="text-h5 text-heading q-mb-lg">Mais Recentes</h3>
            <q-list dark separator>
              <q-item v-for="post in news.slice(1)" :key="post.id" clickable v-ripple @click="goToNews(post.slug)">
                <q-item-section avatar>
                  <q-avatar rounded size="60px">
                    <img :src="post.coverImage">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold">{{ post.title }}</q-item-label>
                  <q-item-label caption class="text-grey-4">{{ new Date(post.publishedAt).toLocaleDateString('pt-BR') }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>

            <div class="q-mt-xl">
              <h3 class="text-h5 text-heading q-mb-md">Tags Populares</h3>
              <div class="row q-gutter-xs">
                <q-chip v-for="tag in ['Nasa', 'Telescópios', 'Astrobike', 'Belém', 'Ciência']" :key="tag" outline color="accent" size="sm">{{ tag }}</q-chip>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Feed Grid -->
      <div class="row q-col-gutter-lg q-mt-xl justify-center">
        <div v-for="post in news" :key="post.id" class="col-12 col-sm-6 col-md-4">
          <q-card class="blog-card glass-panel glow-border full-height flex flex-column overflow-hidden cursor-pointer" @click="goToNews(post.slug)">
            <q-img :src="post.coverImage" :ratio="16/9" class="hover-scale" />
            <q-card-section class="q-pa-lg">
              <div class="text-caption text-accent text-weight-bold uppercase q-mb-sm">{{ post.category }}</div>
              <div class="text-h6 text-heading text-white q-mb-md line-clamp-2">{{ post.title }}</div>
              <p class="text-body2 text-grey-4 line-height-relaxed line-clamp-3">
                {{ post.excerpt }}
              </p>
            </q-card-section>
            <q-card-actions align="right" class="q-px-lg q-pb-lg q-mt-auto">
              <q-btn flat color="accent" label="Ler mais" icon-right="chevron_right" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { NEWS_MOCK } from 'src/mocks/events_news.mock';

const news = ref(NEWS_MOCK);

const goToNews = (slug: string) => {
  console.log('Navigating to:', slug);
};

defineOptions({
  name: 'BlogPage'
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
