import { defineStore } from "pinia";
const api = "http://a0990588.xsph.ru/api";
import { useJurnalStore } from "./Jurnal";
import axios from "axios";
export const requirementStore = defineStore("requirement", {
  state: () => ({
    requirements: [],
    formData: {
      content: "",
    },
  }),
  actions: {
    index() {
      const jurnal = useJurnalStore();
      if (!this.requirements.length) {
        jurnal.isLoading = true;
        axios
          .get(`${api}/requirements`)
          .then((res) => {
            this.formData.content = res.data.html_content;
            this.requirements.push(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            jurnal.isLoading = false;
          });
      }
    },
    store() {
      const jurnal = useJurnalStore();
      jurnal.isLoading = true;
      axios
        .post(`${api}/requirements`, this.formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          jurnal.isLoading = false;
        });
    },
    update() {
      const id = this.requirements[0].id;
      const jurnal = useJurnalStore();
      jurnal.isLoading = true;
      axios
        .post(`${api}/requirements/${id}`, this.formData)
        .then((res) => {
          this.formData.content = res.data.html_content;
          this.requirements.push(res.data);
          this.requirements.filter((item) => {
            return item.id === res.data.id;
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          jurnal.isLoading = false;
        });
    },
  },
});
