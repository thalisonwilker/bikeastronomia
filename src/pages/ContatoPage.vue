<template>
  <q-page class="q-pa-xl">
    <div class="container mx-auto">
      <div class="text-center q-mb-xl">
        <h1 class="text-h2 text-heading text-gradient q-mb-md">Fale Conosco</h1>
        <p class="text-h6 text-grey-4 text-weight-light">Dúvidas, sugestões ou parcerias? Nossa equipe está pronta para ouvir você.</p>
      </div>

      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <div class="glass-panel q-pa-xl">
            <h2 class="text-h4 text-heading q-mb-lg">Envie uma Mensagem</h2>
            
            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input
                v-model="form.name"
                label="Seu Nome"
                filled
                dark
                color="accent"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Por favor, informe seu nome']"
              />

              <q-input
                v-model="form.email"
                label="Seu E-mail"
                type="email"
                filled
                dark
                color="accent"
                lazy-rules
                :rules="[ val => val && /.+@.+\..+/.test(val) || 'Por favor, informe um e-mail válido']"
              />

              <q-select
                v-model="form.subject"
                :options="subjectOptions"
                label="Assunto"
                filled
                dark
                color="accent"
              />

              <q-input
                v-model="form.message"
                label="Mensagem"
                type="textarea"
                filled
                dark
                color="accent"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Por favor, descreva sua mensagem']"
              />

              <div>
                <q-btn 
                  label="Enviar Mensagem" 
                  type="submit" 
                  color="accent" 
                  text-color="primary" 
                  class="full-width text-weight-bold" 
                  size="lg"
                  :loading="submitting"
                />
              </div>
            </q-form>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <div class="glass-panel q-pa-lg flex items-center">
                <q-avatar color="accent" text-color="primary" icon="location_on" class="q-mr-md" />
                <div>
                  <div class="text-weight-bold">Endereço</div>
                  <div class="text-grey-4">Belém, Pará - Amazônia, Brasil</div>
                </div>
              </div>
            </div>
            
            <div class="col-12">
              <div class="glass-panel q-pa-lg flex items-center">
                <q-avatar color="accent" text-color="primary" icon="email" class="q-mr-md" />
                <div>
                  <div class="text-weight-bold">E-mail</div>
                  <div class="text-grey-4">contato@bikeastronomia.com.br</div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="glass-panel q-pa-lg flex items-center">
                <q-avatar color="accent" text-color="primary" icon="description" class="q-mr-md" />
                <div>
                  <div class="text-weight-bold">CNPJ / Registro</div>
                  <div class="text-grey-4">Disponível sob solicitação para parcerias.</div>
                </div>
              </div>
            </div>

            <div class="col-12 q-mt-lg">
              <h3 class="text-h5 text-heading q-mb-md">Fale agora no WhatsApp</h3>
              <q-btn 
                color="positive" 
                icon="fab fa-whatsapp" 
                label="Conversar no WhatsApp" 
                href="https://wa.me/559198149182" 
                target="_blank"
                class="full-width q-py-md text-weight-bold shadow-10"
                size="lg"
              />
            </div>

            <div class="col-12 q-mt-lg">
              <h3 class="text-h5 text-heading q-mb-md">Siga nossa jornada</h3>
              <div class="row q-gutter-sm">
                <q-btn round color="accent" text-color="primary" icon="fab fa-instagram" href="https://instagram.com/bike_astronomia_belem" target="_blank" />
                <q-btn round color="accent" text-color="primary" icon="fab fa-facebook" />
                <q-btn round color="accent" text-color="primary" icon="fab fa-youtube" />
                <q-btn round color="accent" text-color="primary" icon="fab fa-linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const submitting = ref(false);

const form = reactive({
  name: '',
  email: '',
  subject: 'Informações Gerais',
  message: ''
});

const subjectOptions = [
  'Informações Gerais',
  'Parcerias e Patrocínio',
  'Agendamento Escolar',
  'Voluntariado',
  'Imprensa'
];

const onSubmit = () => {
  submitting.value = true;
  
  // Simulate API call
  setTimeout(() => {
    submitting.value = false;
    $q.notify({
      color: 'positive',
      message: 'Mensagem enviada com sucesso! Logo entraremos em contato.',
      icon: 'check_circle'
    });
    
    // Reset form
    form.name = '';
    form.email = '';
    form.message = '';
    form.subject = 'Informações Gerais';
  }, 1500);
};

defineOptions({
  name: 'ContatoPage'
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
