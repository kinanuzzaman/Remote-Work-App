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

    <!-- Card 1 Div -->

    <div class="row q-pa-md flex-center items-start">
      <div flat bordered class="my-card" style="max-width: 820px">
        <q-card-section>
          <div class="text-h6 text-center">
            Your Profile/Document Verification
          </div>
        </q-card-section>
        <q-separator />

        <!-- Card 2 & 3 Div -->

        <div class="row">
          <div class="q-pa-md col-6 flex-center items-start q-gutter-md">
            <q-card
              class="my-card this-card text-black bg-grey-4"
              style="max-width: 360px"
            >
              <div class="q-pa-md">
                <div class="row">
                  <div class="col-9 text-h7 text-bold">
                    Personal ID verification
                  </div>
                  <div class="col-9 text-h7">
                    Upload at least two documents for verification
                  </div>
                </div>
                <div class="row">
                  <div class="col-4 q-pa-md text-h7 text center">
                    <span
                      style="display: block; margin-bottom: 15px"
                      class="text-bold"
                    >
                      Add credit card</span
                    >
                    <q-btn
                      color="black"
                      dense
                      round
                      icon="done"
                      style="margin-bottom: 15px"
                    ></q-btn>
                    <div class="text-h7">Credit card added</div>
                  </div>
                  <div class="col-5 q-pa-md text-h7 text center">
                    <span
                      style="display: block; margin-bottom: 15px"
                      class="text-bold"
                    >
                      Add bank account</span
                    >
                    <q-btn
                      color="black"
                      dense
                      round
                      icon="add"
                      style="margin-bottom: 15px"
                    ></q-btn>
                    <div class="text-h7">Address Proof.pdf</div>
                  </div>
                </div>
              </div>
            </q-card>
          </div>
          <div class="q-pa-md col-6 flex-center items-start q-gutter-md">
            <q-card
              class="my-card this-card text-black bg-grey-4"
              style="max-width: 360px"
            >
              <div class="q-pa-md">
                <div class="row">
                  <div class="col-9 text-h7 text-bold">
                    Add paycheck receive method
                  </div>
                  <div class="col-9 text-h7">
                    Add any verify the payments method
                  </div>
                </div>
                <div class="row">
                  <div class="col-4 q-pa-md text-h7 text center">
                    <span
                      style="display: block; margin-bottom: 15px"
                      class="text-bold"
                    >
                      Add credit card</span
                    >
                    <q-btn
                      color="black"
                      dense
                      round
                      icon="done"
                      style="margin-bottom: 15px"
                    ></q-btn>
                    <div class="text-h7">Credit card added</div>
                  </div>
                  <div class="col-5 q-pa-md text-h7 text center">
                    <span
                      style="display: block; margin-bottom: 15px"
                      class="text-bold"
                    >
                      Add bank account</span
                    >
                    <q-btn
                      color="black"
                      dense
                      round
                      icon="add"
                      style="margin-bottom: 15px"
                    ></q-btn>
                    <div class="text-h7">Address Proof.pdf</div>
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Div -->

    <div class="row flex-center q-pa-md">
      <!-- <div class="col"></div> -->
      <q-btn
        size="10px"
        rounded
        color="black"
        label="Submit documents -→"
        class="text-white text-h7"
      ></q-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  // name: "IndexPage",
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px

.row > div
  padding: 10px 15px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem
.row
  // background: rgba(255,0,0,.1)


.this-card
  // background: rgba(255,0,0,.1)
  border-radius: 30px
</style>
