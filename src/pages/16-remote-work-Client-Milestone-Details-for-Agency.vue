<template>
  <div>
    <div class="flex-break"></div>
    <div class="text-h7 text-center">Hi Florin, welcome to your dashboard!</div>
    <div class="flex-break q-py-md"></div>
    <q-separator />
    <div class="">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <div class="text-black text-h7 text-center">
            <q-btn dense flat color="black" icon="person"></q-btn>
            <div>Profile</div>
          </div>
        </div>
        <div class="col">
          <div class="text-black text-h7 text-center">
            <q-btn dense flat color="black" icon="addchart"></q-btn>
            <div>Post a Project</div>
          </div>
        </div>
        <div class="col">
          <div class="text-black text-h7 text-center">
            <q-btn
              dense
              flat
              color="black"
              icon="insert_chart_outlined"
            ></q-btn>
            <div>Projects</div>
          </div>
        </div>
        <div class="col">
          <div class="text-black text-h7 text-center">
            <q-btn dense flat color="black" icon="mark_email_unread"></q-btn>
            <div>Messages</div>
          </div>
        </div>
        <div class="col">
          <div class="text-black text-h7 text-center">
            <q-btn dense flat color="black" icon="local_atm"></q-btn>
            <div>Accounts</div>
          </div>
        </div>
        <div class="col">
          <div class="text-black text-h7 text-center">
            <q-btn dense flat color="black" icon="tune"></q-btn>
            <div>Settings</div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <q-separator />
    <div>
      <q-linear-progress size="25px" :value="progress1" color="accent">
        <div class="absolute-full flex flex-center">
          <q-badge color="white" text-color="accent" :label="progressLabel1" />
        </div>
      </q-linear-progress>
    </div>
    <div class="container">
      <h5>Logo Design for Insurence Agency</h5>
      <q-separator />
      <div>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>AGENCY NAME</q-item-label>
            <q-item-label>
              <q-btn padding="xl" round color="teal-4" icon="business" />
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-chip clickable @click="onClick" color="black" text-color="white">
              Add Milestone
            </q-chip>
          </q-item-section>
        </q-item>
      </div>
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs
          dense
          align="left"
          v-model="tab"
          indicator-color="purple"
          class="text-black"
          :breakpoint="0"
        >
          <q-tab name="mails" label="Milestons" />
          <q-tab name="alarms" label="Feedback" />
        </q-tabs>
      </div>

      <div class="flex justify-center q-mt-md">
        <q-btn unelevated rounded color="grey-6" label="Back" class="q-mr-md" />
        <q-btn unelevated rounded color="primary" label="Next" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const submitResult = ref([]);

    return {
      shape: ref("line"),
      submitResult,

      onSubmit(evt) {
        const formData = new FormData(evt.target);
        const data = [];

        for (const [name, value] of formData.entries()) {
          data.push({
            name,
            value,
          });
        }

        submitResult.value = data;
      },
    };
  },
};
</script>
<style>
.container {
  width: 1200px;
  margin: auto;
}
</style>
