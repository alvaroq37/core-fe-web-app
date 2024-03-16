<script setup lang="ts">
import MaintenanceClientPage from 'src/web-app-sigc-modules/admins-settings/pages/MaintenanceClientPage.vue';
import MaintenanceContractPage from 'src/web-app-sigc-modules/admins-settings/pages/MaintenanceContractPage.vue';
import MaintenanceCountryPage from 'src/web-app-sigc-modules/admins-settings/pages/MaintenanceCountryPage.vue';
import MaintenanceJewelPage from 'src/web-app-sigc-modules/admins-settings/pages/MaintenanceJewelPage.vue';
import MaintenanceUserPage from 'src/web-app-sigc-modules/admins-settings/pages/MaintenanceUserPage.vue';
</script>

<template>
  <div class="row">
    <div>
      <MaintenanceCountryPage />
    </div>
    <div>
      <MaintenanceClientPage />
    </div>
    <div>
      <MaintenanceJewelPage />
    </div>
    <div>
      <MaintenanceContractPage />
    </div>
    <div>
      <MaintenanceUserPage />
    </div>
  </div>
</template>
