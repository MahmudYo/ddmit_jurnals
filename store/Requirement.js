import { defineStore } from "pinia";
const api = "http://127.0.0.1:8000/api";
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
            alert(`${err} 404`);
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
          alert("Saved");
        })
        .catch((err) => {
          console.log(err);
          alert(`${err} 404`);
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
          alert("Saved");
        })
        .catch((err) => {
          alert(`${err} 404`);
          console.log(err);
        })
        .finally(() => {
          jurnal.isLoading = false;
        });
    },
  },
});
