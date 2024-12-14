<template>
    <div class="p-16 flex flex-col gap-24">
      <p class="cursor-pointer"><span class="text-gray-400">Home </span>/ Account</p>
      <div class="w-full flex">
        <div class="w-5/12">
          <!-- Ajoute ici une liste pour choisir l'option -->
          <div class="flex flex-col gap-4">
            <div
              v-for="(option, index) in accountLayout"
              :key="index"
              @click="selectedLayoutOption = index"
              class="font-semibold flex flex-col gap-2"
            >
              <p>{{ option.layoutOption }}</p>
              <!-- Sous-options -->
              <div class="flex flex-col gap-1">
                <div
                  v-for="(subOption, subIndex) in option.layoutSubOption"
                  :key="subIndex"
                  @click="selectSubOption(index, subIndex)"
                  class="pl-8 font-normal cursor-pointer"
                >
                  <p
                    :class="subOption.isSelected ? 'text-primary' : 'text-gray-600'"
                  >
                    {{ subOption.label }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <component v-if="selectedSubOption.component" :is="selectedSubOption.component"></component>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, computed, defineAsyncComponent } from 'vue';

  const selectedLayoutOption = ref<number>(0);
  const selectedSubOptionIndex = ref<number>(0);

  const accountLayout = [
    {
      layoutOption: "Manage My Account",
      layoutSubOption: [
        {
          label: "My Profile",
          name: "HomePage",
          isSelected: true,
          component: defineAsyncComponent(() =>
            import("./accountPages/ProfileView.vue")
          ),
        },
        {
          label: "Address Book",
          name: "HomePage",
          isSelected: false,
          component: defineAsyncComponent(() =>
            import("./accountPages/AddressBookView.vue")
          ),
        },
        {
          label: "My Payment Options",
          name: "HomePage",
          isSelected: false,
          component: defineAsyncComponent(() =>
            import("./accountPages/PaymentOptionsView.vue")
          ),
        },
      ],
    },
    {
      layoutOption: "My Orders",
      layoutSubOption: [
        {
          label: "Order Returns",
          name: "HomePage",
          isSelected: false,
          component: defineAsyncComponent(() =>
            import("./accountPages/OrderReturnView.vue")
          ),
        },
        {
          label: "Order Cancellation",
          name: "HomePage",
          isSelected: false,
          component: defineAsyncComponent(() =>
            import("./accountPages/OrderConcellation.vue")
          ),
        },
      ],
    },
    {
      layoutOption: "My Wishlist",
      layoutSubOption: [],
    },
  ];

  // Calcul pour obtenir l'option sélectionnée
  const selectedSubOption = computed(() => {
    return (
      accountLayout[selectedLayoutOption.value]?.layoutSubOption[
        selectedSubOptionIndex.value
      ] || {}
    );
  });

  // Méthode pour gérer la sélection
  const selectSubOption = (layoutIndex: number, subIndex: number) => {
    selectedLayoutOption.value = layoutIndex;
    selectedSubOptionIndex.value = subIndex;

    // Réinitialiser les `isSelected`
    accountLayout.forEach((layout, i) => {
      layout.layoutSubOption.forEach((subOption, j) => {
        subOption.isSelected = i === layoutIndex && j === subIndex;
      });
    });
  };
  </script>

<style scoped></style>
