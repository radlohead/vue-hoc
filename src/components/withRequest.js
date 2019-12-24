import Vue from "vue";
import axios from "axios";

export const withRequest = url => component => {
  return Vue.component("withRequest", {
    data() {
      return {
        fetchData: null
      };
    },
    async created() {
      const response = await axios.get(url);
      this.fetchData = response.data;
    },
    render(createElement) {
      return createElement(component, {
        props: {
          data: this.fetchData
        }
      });
    }
  });
};
