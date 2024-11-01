import { defineStore } from "pinia";
import axios from "axios";
const api = "https://crazy-gauss.89-253-237-222.plesk.page/api";
export const useJurnalStore = defineStore("jurnal", {
  state: () => ({
    jurnals: [],
    formData: {
      year: null,
      title: null,
      jurnal: null,
      image: null,
      selectData: null,
    },
    paginate: {},
    oldPages: [],
    response: null,
    formType: null,
    isOpenModal: false,
    isLoading: true,
    progress: {
      loading: 0,
      size: 0,
    },
  }),

  actions: {
    Index() {
      if (!this.jurnals.length) {
        this.isLoading = true;
        axios
          .get(`${api}/jurnals`)
          .then((res) => {
            this.jurnals = res.data.data;
            this.paginate = res.data;
            this.oldPages.push({ current_page: 1, data: this.jurnals });
          })
          .finally(() => {
            this.isLoading = false;
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
    update(jurnal) {
      this.isLoading = true;
      const sendFormData = new FormData();
      for (const key in this.formData) {
        sendFormData.append(key, this.formData[key]);
      }
      axios
        .post(`${api}/jurnals/${jurnal.id}`, sendFormData, {
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
          this.isLoading = false;
          this.isOpenModal = false;
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
          this.jurnals = this.jurnals.map((item) =>
            item.id === jurnal.id ? this.response.data.jurnal : item
          );
          this.paginate.data = this.paginate.data.map((item) =>
            item.id === jurnal.id ? this.response.data.jurnal : item
          );
        });
    },
    remove(jurnal, answer) {
      if (answer) {
        this.isLoading = true;
        axios
          .delete(`${api}/jurnals/${jurnal.id}`)
          .then((res) => {
            console.log(res);
            this.isOpenModal = false;
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.isLoading = false;
            this.jurnals = this.jurnals.filter((item) => item.id !== jurnal.id);
            this.paginate.data = this.paginate.data.filter(
              (item) => item.id !== jurnal.id
            );
          });
      } else {
        this.isOpenModal = false;
      }
    },
    // filterYear(date) {
    //   if (date) {
    //     const year = +date.split("-")[0];
    //     this.isLoading = true;
    //     axios
    //       .get(`${api}/jurnals/year/${year}`)
    //       .then((res) => {
    //         this.jurnals = res.data.data;
    //         this.paginate = res.data;
    //         this.oldPages.push({ current_page: 1, data: this.jurnals });
    //       })
    //       .finally(() => {
    //         this.isLoading = false;
    //       });
    //     // this.jurnals = this.jurnals.filter((item) => item.year == year);
    //   } else {
    //     this.isLoading = true;
    //     axios
    //       .get(`${api}/jurnals`)
    //       .then((res) => {
    //         this.jurnals = res.data.data;
    //         this.paginate = res.data;
    //         this.oldPages.push({ current_page: 1, data: this.jurnals });
    //       })
    //       .finally(() => {
    //         this.isLoading = false;
    //       });
    //   }
    // },
  },
});
