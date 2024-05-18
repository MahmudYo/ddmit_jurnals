import { defineStore } from "pinia";
const api = "http://127.0.0.1:8000/api";
import axios from "axios";
export const useJurnalStore = defineStore("jurnal", {
  state: () => ({
    jurnals: [],
    formData: {
      year: null,
      title: null,
      jurnal: null,
      image: null,
    },
    paginate: {},
    response: null,
    formType: null,
    isOpenModal: false,
    isLoading: false,
    progress: {
      loading: 0,
      size: 0,
    },
  }),

  actions: {
    Index() {
      if (!this.jurnals.length) {
        axios.get(`${api}/jurnals`).then((res) => {
          this.jurnals = res.data.data;
          this.paginate = res.data;
        });
      }
    },
    store() {
      this.isLoading = true;

      const sendFormData = new FormData();
      for (const key in this.formData) {
        sendFormData.append(key, this.formData[key]);
      }

      axios
        .post(`${api}/jurnals`, sendFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            let progress = (progressEvent.loaded * 100) / progressEvent.total;
            // Переводим байты в килобайты
            const loadedKB = progressEvent.loaded / 1024;
            this.progress.loading = progress.toFixed(2);
            this.progress.size = loadedKB.toFixed(2);
          },
        })
        .then((res) => {
          this.response = res;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.formData = {
            year: null,
            title: null,
            jurnal: null,
            image: null,
          };
          this.isOpenModal = false;
          this.isLoading = false;
          this.progress.loading = 0;
          this.progress.size = 0;
          this.jurnals.push(this.response.data.jurnal);
        });
    },
    edit() {},
    remove() {},
  },
});
