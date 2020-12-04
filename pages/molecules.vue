<template>
  <vf-m-container class="mx-auto mb-8">
    <vf-a-heading class="text-center mt-4">EDIT STATE</vf-a-heading>
    <div class="text-center my-8">
      <vf-a-button color="danger" @click="state = !state">Change</vf-a-button>
    </div>
    <vf-a-heading class="text-center mt-4">DROPDOWN</vf-a-heading>
    <div class="text-center my-8">
      <vf-m-dropdown>
          <template slot="button-content">
              <vf-a-icon icon="account-circle-outline" />
              Label
          </template>
          <vf-m-dropdown-item>Item 1</vf-m-dropdown-item>
          <vf-m-dropdown-item>Item 2</vf-m-dropdown-item>
          <vf-m-dropdown-item>Item 3</vf-m-dropdown-item>
      </vf-m-dropdown>
      <vf-m-dropdown variant="link" right>
          <template slot="button-content">
              <vf-a-icon icon="account-circle-outline" />
              Label
          </template>
          <vf-m-dropdown-item>Item 1</vf-m-dropdown-item>
          <vf-m-dropdown-item>Item 2</vf-m-dropdown-item>
          <vf-m-dropdown-item>Item 3</vf-m-dropdown-item>
      </vf-m-dropdown>
    </div>
    <vf-a-heading class="text-center mt-4">INPUT GROUP</vf-a-heading>
    <div class="text-center my-8">
      <vf-m-input-group
        v-for="size in ['sm','','lg']"
        :key="size"
        :size="size"
        class="mb-3"
        prepend="Label"
      >
        <vf-a-input></vf-a-input>
        <template #append>
          <vf-a-button size="sm" text="Button" variant="success">Button</vf-a-button>
        </template>
      </vf-m-input-group>
    </div>
    <div class="text-center my-8">
      <vf-m-input-group>
        <template #prepend>
          <vf-m-dropdown text="Dropdown" variant="info">
            <vf-m-dropdown-item>Action A</vf-m-dropdown-item>
            <vf-m-dropdown-item>Action B</vf-m-dropdown-item>
          </vf-m-dropdown>
        </template>

        <vf-a-input></vf-a-input>

        <template #append>
          <vf-m-dropdown text="Dropdown" variant="outline-secondary" v-for="i in 2" :key="i">
            <vf-m-dropdown-item>Action C</vf-m-dropdown-item>
            <vf-m-dropdown-item>Action D</vf-m-dropdown-item>
          </vf-m-dropdown>
        </template>
      </vf-m-input-group>
    </div>
    <vf-a-heading class="text-center mt-4">BUTTON GROUP</vf-a-heading>
    <div class="text-center my-8">
      <vf-m-button-group>
        <vf-a-button>Button 1</vf-a-button>
        <vf-a-button>Button 2</vf-a-button>
        <vf-a-button>Button 3</vf-a-button>
      </vf-m-button-group>
    </div>
    <div class="text-center my-8">
      <vf-m-button-group size="sm">
        <vf-a-button>Left</vf-a-button>
        <vf-a-button>Middle</vf-a-button>
        <vf-a-button>Right</vf-a-button>
      </vf-m-button-group>
    </div>
    <div class="text-center my-8">
      <vf-m-button-group size="lg">
        <vf-a-button>Left</vf-a-button>
        <vf-a-button>Middle</vf-a-button>
        <vf-a-button>Right</vf-a-button>
      </vf-m-button-group>
    </div>
    <vf-a-heading class="text-center mt-4">LIST GROUP</vf-a-heading>
    <div class="text-center my-8">
      <vf-m-list-group>
          <vf-m-list-group-item active to="#">List item one</vf-m-list-group-item>
          <vf-m-list-group-item to="#">List item two</vf-m-list-group-item>
          <vf-m-list-group-item to="#">List item tree</vf-m-list-group-item>
      </vf-m-list-group>
    </div>
  </vf-m-container>
</template>
<script>
export default {
  data() {
    return {
      checkbox1: false,
      radio1: false,
      radioGroup1: 'A',
      checkboxGroup1: [],
      select: null,
      page: 2,
      state: true,
      options2: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
      options: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'D', name: 'Option C', notEnabled: true },
          { item: { d: 1 }, name: 'Option D' }
        ],
        colors: [
          'primary',
          'secondary',
          'success',
          'info',
          'warning',
          'danger',
          'white',
          'light',
          'dark'
        ]
    }
  }
}
</script>