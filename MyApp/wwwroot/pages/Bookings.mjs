import { ref } from "vue"
import { useClient, useFormatters, AutoQueryGrid } from "@servicestack/vue"
import { QueryCoupons } from "/mjs/dtos.mjs"

export default {
  components: {
    AutoQueryGrid,
  },
  template:/*html*/`
    <AutoQueryGrid type="Booking" :visible-from="{ name:'xl', bookingStartDate:'sm', bookingEndDate:'xl', createdBy:'2xl' }">
        <template #id="{ id }">
            <span class="text-gray-900" v-html="id"></span>
        </template>

        <template #name="{ name }">{{name}}</template>

        <template #roomNumber-header>
            <span class="hidden lg:inline">Room </span>No
        </template>

        <template #cost="{ cost }">
            <span v-html="currency(cost)"></span>
        </template>

        <template #bookingStartDate-header>
            Start<span class="hidden lg:inline"> Date</span>
        </template>

        <template #bookingEndDate-header>
            End<span class="hidden lg:inline"> Date</span>
        </template>

        <template #createdBy-header>
            Employee
        </template>

        <template #createdBy="{ createdBy }" v-html="createdBy"></template>

        <template #discount="{ discount }">
            <TextLink v-if="discount" class="flex items-end" @click.stop="showCoupon(discount.id)" :title="discount.id">
                <Icon class="w-5 h-5 mr-1" type="Coupon" />
                <PreviewFormat :value="discount.description" />
            </TextLink>
        </template>
    </AutoQueryGrid>
    <AutoEditForm v-if="coupon" type="UpdateCoupon" v-model="coupon" v-on:done="close" v-on:save="close" />
  `,
  props: { bookings:Array },
    setup() {
        const client = useClient()
        const coupon = ref()
        const { currency } = useFormatters()
        async function showCoupon(id) {
            const api = await client.api(new QueryCoupons({ id }))
            if (api.succeeded) {
                coupon.value = api.response.results[0]
            }
        }
        const close = () => coupon.value = null
        return { coupon, showCoupon, close, currency }
    }
}
