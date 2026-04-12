<template>
  <q-layout view="lHh Lpr lFf">
    <q-header 
      elevated 
      :class="[
        'header-container transition-all-slow', 
        isScrolled ? 'header--scrolled' : 'header--top'
      ]"
    >
      <q-toolbar class="header-toolbar q-px-md q-px-md-lg">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="lt-md text-white"
        />

        <q-toolbar-title class="flex items-center no-pointer-events">
          <router-link :to="{ name: 'home' }" class="flex items-center cursor-pointer pointer-events-all">
             <img src="~assets/images/logo.png" :class="['logo-image', isScrolled ? 'logo--small' : 'logo--large']">
          </router-link>
        </q-toolbar-title>

        <div class="gt-sm q-gutter-x-sm items-center flex">
          <q-btn flat no-caps label="Home" :to="{ name: 'home' }" exact class="nav-btn" active-class="nav-btn--active" />
          <q-btn flat no-caps label="Ações Educativas" :to="{ name: 'acoes' }" class="nav-btn" active-class="nav-btn--active" />
          <q-btn flat no-caps label="Eventos" :to="{ name: 'eventos' }" class="nav-btn" active-class="nav-btn--active" />
          <q-btn flat no-caps label="Galeria de Momentos" :to="{ name: 'galeria' }" class="nav-btn" active-class="nav-btn--active" />
          <q-btn flat no-caps label="Blog" :to="{ name: 'blog' }" class="nav-btn" active-class="nav-btn--active" />
          <q-btn flat no-caps label="Sobre" :to="{ name: 'sobre' }" class="nav-btn" active-class="nav-btn--active" />
          
          <q-btn 
            unelevated 
            class="contact-btn q-ml-md" 
            label="Contato" 
            :to="{ name: 'contato' }" 
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      bordered
      class="bg-dark text-white drawer-container"
    >
      <div class="q-pa-md text-center q-mt-lg">
        <img src="~assets/images/logo.png" style="height: 60px; max-width: 100%;" class="q-mb-md">
        <div class="text-h6 text-heading text-accent">Navegação</div>
      </div>

      <q-list padding class="q-mt-md">
        <q-item clickable v-ripple :to="{ name: 'home' }" exact active-class="text-accent">
          <q-item-section avatar><q-icon name="home" /></q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="{ name: 'acoes' }" active-class="text-accent">
          <q-item-section avatar><q-icon name="science" /></q-item-section>
          <q-item-section>Ações Educativas</q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="{ name: 'eventos' }" active-class="text-accent">
          <q-item-section avatar><q-icon name="event" /></q-item-section>
          <q-item-section>Eventos / Agenda</q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="{ name: 'galeria' }" active-class="text-accent">
          <q-item-section avatar><q-icon name="photo_library" /></q-item-section>
          <q-item-section>Galeria de Momentos</q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="{ name: 'blog' }" active-class="text-accent">
          <q-item-section avatar><q-icon name="newspaper" /></q-item-section>
          <q-item-section>Blog / Notícias</q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="{ name: 'sobre' }" active-class="text-accent">
          <q-item-section avatar><q-icon name="info" /></q-item-section>
          <q-item-section>Sobre o Projeto</q-item-section>
        </q-item>

        <q-separator dark class="q-my-md mx-md" />

        <q-item clickable v-ripple :to="{ name: 'contato' }" active-class="text-accent" class="bg-accent text-primary q-mx-md rounded-borders">
          <q-item-section avatar><q-icon name="email" /></q-item-section>
          <q-item-section class="text-weight-bold">Contato</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <StarBackground />
      <q-scroll-observer @scroll="onScroll" />
      <router-view v-slot="{ Component }">
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
      
      <footer class="bg-dark q-pa-xl text-white">
        <div class="row q-col-gutter-lg justify-center text-center">
          <div class="col-12 col-md-4">
            <div class="text-h6 text-heading q-mb-md text-accent">Bike Astronomia</div>
            <p class="text-body2 text-grey-4">Divulgando a ciência e a astronomia de forma educativa e acessível para toda a comunidade de Belém e região.</p>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-h6 text-heading q-mb-md text-accent">Redes Sociais</div>
            <div class="flex flex-center q-gutter-sm">
              <q-btn flat round class="social-icon" icon="fab fa-instagram" href="https://instagram.com/bike_astronomia_belem" target="_blank" />
              <q-btn flat round class="social-icon" icon="fab fa-facebook" />
              <q-btn flat round class="social-icon" icon="fab fa-whatsapp" />
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-h6 text-heading q-mb-md text-accent">Contato</div>
            <p class="text-body2">contato@bikeastronomia.com.br</p>
            <p class="text-body2">Belém, PA - Brasil</p>
          </div>
        </div>
        <q-separator dark class="q-my-xl opacity-20" />
        <div class="text-center text-caption text-grey-5 uppercase letter-spacing-2">
          &copy; {{ new Date().getFullYear() }} Bike Astronomia. Todos os direitos reservados.
        </div>
      </footer>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import StarBackground from 'components/common/StarBackground.vue';

const leftDrawerOpen = ref(false);
const isScrolled = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function onScroll(info: { position: { top: number } }) {
  isScrolled.value = info.position.top > 20;
}

defineOptions({
  name: 'MainLayout'
});
</script>

<style lang="scss">
.transition-all-slow {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.header-container {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  z-index: 9999 !important;
}

.header--top {
  background: rgba(10, 14, 46, 0.4) !important;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  height: 90px;
  
  @media (max-width: 600px) {
    height: 70px;
  }
}

.header--scrolled {
  background: rgba(10, 14, 46, 0.9) !important;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  height: 70px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);

  @media (max-width: 600px) {
    height: 60px;
  }
}

.header-toolbar {
  height: 100%;
}

.logo-image {
  transition: all 0.4s ease;
  filter: drop-shadow(0 0 8px rgba(245, 166, 35, 0.2));
  object-fit: contain;

  &.logo--large {
    height: 52px;
    max-width: 240px;
    
    @media (max-width: 600px) {
      height: 40px;
      max-width: 180px;
    }
  }

  &.logo--small {
    height: 40px;
    max-width: 200px;

    @media (max-width: 600px) {
      height: 32px;
      max-width: 150px;
    }
  }
  
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 12px rgba(245, 166, 35, 0.4));
  }
}

.nav-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  text-transform: none;
  font-size: 0.95rem;
  margin: 0 2px;
  position: relative;
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 6px;
    left: 50%;
    width: 0%;
    height: 2px;
    background: $accent;
    transition: all 0.3s ease;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  &:hover {
    color: #fff;
    &::after {
      width: 60%;
    }
  }

  &--active {
    color: $accent !important;
    &::after {
      width: 40%;
      background: $accent;
    }
  }
}

.contact-btn {
  background: linear-gradient(135deg, $accent 0%, #ffcc33 100%);
  color: $primary;
  font-weight: 700;
  border-radius: 30px;
  padding: 8px 24px;
  text-transform: none;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(245, 166, 35, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 166, 35, 0.5);
  }
}

.social-icon {
  transition: all 0.3s ease;
  &:hover {
    color: $accent;
    transform: translateY(-3px) scale(1.1);
  }
}

.drawer-container {
  background: rgba(10, 14, 46, 0.95) !important;
  backdrop-filter: blur(10px);
}

.letter-spacing-2 {
  letter-spacing: 2px;
}

.opacity-20 {
  opacity: 0.2;
}
</style>
